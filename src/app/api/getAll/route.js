import { NextResponse, NextRequest } from 'next/server';
import connect from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import Confession from '@/models/confessionModel';

connect();
export async function POST(req) {
  console.log('GET request made to /api/confession');
  try {
    const {username} = await req.json();
    console.log('Username:', username);

    if (!username) {
      return NextResponse.json(
        { message: 'Please provide a username' },
        { status: 411 }
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
      { status: 500 }
    );
  }
}