import { NextResponse, NextRequest } from 'next/server';
import connect from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import Confession from '@/models/confessionModel';

connect();

export async function GET(req) {
  console.log('GET request made to /api/confession');
  try {
    const username = req.nextUrl.searchParams.get('username') ?? '';
    const startDate = req.nextUrl.searchParams.get('startDate');
    const endDate = req.nextUrl.searchParams.get('endDate');
    if (!username) {
      return NextResponse.json(
        { message: 'Please provide a username' },
        { status: 404 },
      );
    }
    console.log(startDate);
    console.log(endDate);

    if (startDate === null && endDate === null) {
      return NextResponse.json({ message: 'mention dates' }, { status: 411 });
    }

    const user = await User.findOne({ username });
    console.log('User:', user);

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 413 });
    }

    let query = { author: user._id };

    if (startDate && endDate) {
      query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    const confessions = await Confession.find(query);

    if (confessions.length === 0) {
      return NextResponse.json(
        { message: 'No confessions found' },
        { status: 404 },
      );
    }

    return NextResponse.json({ data: confessions });
  } catch (error) {
    console.log('Error fetching confessions:', error.message);
    return NextResponse.json(
      { message: 'An error occurred while fetching confessions' },
      { status: 500 },
    );
  }
}
