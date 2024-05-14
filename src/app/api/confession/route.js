import { NextResponse, NextRequest } from 'next/server';
import connect from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import Confession from '@/models/confessionModel';
import { getDataFromToken } from '@/helpers/getDataFromToken';

connect();

export async function POST(req) {
  console.log('POST request made to /api/confession');
  try {
    const userId = await getDataFromToken(req);
    const username = await User.findById(userId);
    const { confessionContent } = await req.json();

    if (!username || !confessionContent) {
      return NextResponse.json(
        { message: 'Please fill all fields' },
        { status: 411 },
      );
    }

    const confession = new Confession({
      content: confessionContent,
      author: userId,
    });

    console.log('Confession:', confession);

    await confession.save();
    await User.updateOne(
      { _id: userId },
      { $push: { confessions: confession._id } },
    );

    return NextResponse.json({ message: 'Confession added successfully' });
  } catch (error) {
    console.error('Error adding confession:', error.message);
    return NextResponse.json(
      { message: 'An error occurred while adding the confession' },
      { status: 500 },
    );
  }
}

export async function GET(req) {
  console.log('GET request made to /api/confession');
  try {
    const username = req.nextUrl.searchParams.get('username') ?? '';
    console.log('Username:', username);

    if (!username) {
      return NextResponse.json(
        { message: 'Please provide a username' },
        { status: 411 },
      );
    }

    const user = await User.findOne({ username });
    console.log('User:', user);

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const confessions = await Confession.find({ author: user._id });

    return NextResponse.json({ data: confessions });
  } catch (error) {
    console.log('Error fetching confessions:', error.message);
    return NextResponse.json(
      { message: 'An error occurred while fetching confessions' },
      { status: 500 },
    );
  }
}

connect();

export async function PUT(req) {
  try {
    const userId = await getDataFromToken(req);
    const { confessionId, confessionContent } = await req.json();

    if (!confessionId || !confessionContent) {
      return NextResponse.json(
        { message: 'Please provide a confession ID and content' },
        { status: 400 },
      );
    }

    const confession = await Confession.findById(confessionId);

    if (!confession) {
      return NextResponse.json(
        { message: 'Confession not found' },
        { status: 404 },
      );
    }

    if (confession.author.toString() !== userId) {
      return NextResponse.json(
        { message: 'Unauthorized to update this confession' },
        { status: 403 },
      );
    }

    confession.content = confessionContent;
    await confession.save();

    return NextResponse.json({ message: 'Confession updated successfully' });
  } catch (error) {
    console.error('Error updating confession:', error.message);
    return NextResponse.json(
      { message: 'An error occurred while updating the confession' },
      { status: 500 },
    );
  }
}

export async function DELETE(req) {
  console.log('DELETE request made to /api/confession');
  try {
    const userId = await getDataFromToken(req);
    const { confessionId } = await req.json();

    if (!confessionId) {
      return NextResponse.json(
        { message: 'Please provide a confession ID' },
        { status: 400 },
      );
    }

    const confession = await Confession.findById(confessionId);

    if (!confession) {
      return NextResponse.json(
        { message: 'Confession not found' },
        { status: 404 },
      );
    }

    if (confession.author.toString() !== userId) {
      return NextResponse.json(
        { message: 'Unauthorized to delete this confession' },
        { status: 403 },
      );
    }

    await Confession.findByIdAndDelete(confessionId);
    await User.updateOne(
      { _id: userId },
      { $pull: { confessions: confessionId } },
    );

    return NextResponse.json({ message: 'Confession deleted successfully' });
  } catch (error) {
    console.error('Error deleting confession:', error.message);
    return NextResponse.json(
      { message: 'An error occurred while deleting the confession' },
      { status: 500 },
    );
  }
}
