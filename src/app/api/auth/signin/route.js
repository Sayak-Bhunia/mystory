import connect from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    //check if user exists
    console.log(username);
    console.log(password);
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { error: 'User does not exist' },
        { status: 400 },
      );
    }
    console.log(user);
    console.log('user exists');

    const validPassword = await bcryptjs.compare(password, user.password);

    console.log(validPassword);
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
   
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: '1h',
    });


    console.log(token);
    console.log("done");
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
