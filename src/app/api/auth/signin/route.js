import connect from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, password } = reqBody;
    //check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { error: 'User does not exist' },
        { status: 400 },
      );
    }
    console.log('user exists');

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      console.log('invalid password');
      return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
    }

    //create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    //create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: '1h',
    });

    const response = NextResponse.json({
      message: 'Login successful',
      success: true,
    });

    response.cookies.set('token', token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
