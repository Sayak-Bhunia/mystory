import { NextResponse, NextRequest } from 'next/server';
import connect from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import Confession from '@/models/confessionModel';

connect();

export async function POST(req) {
  console.log('POST request made to /api/confession');
  try {
    const { username, confessionContent } = await req.json();

    if (!username || !confessionContent) {
      return NextResponse.json(
        { message: 'Please fill all fields' },
        { status: 411 }
      );
    }

    let user = await User.findOne({ username });
    if (!user) {
      user = await User.create({ username });
    }

    const confession = new Confession({
      content: confessionContent,
      author: user._id,
    });

    console.log('Confession:', confession);

    await confession.save();
    await User.updateOne(
      { _id: user._id },
      { $push: { confessions: confession._id } }
    );

    return NextResponse.json({ message: 'Confession added successfully' });
  } catch (error) {
    console.error('Error adding confession:', error);
    return NextResponse.json(
      { message: 'An error occurred while adding the confession' },
      { status: 500 }
    );
  }
}
