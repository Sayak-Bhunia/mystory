import User from '@/models/userModel';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import connect from '@/dbConfig/dbConfig';
export async function POST(req) {
  try {
    connect();
    const body = await req.json();
    const userData = body.formData;

    //Confirm data exists
    if (!userData?.email || !userData.password || !userData.username) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 },
      );
    }

    // check for duplicate emails
    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json({ message: 'Duplicate Email' }, { status: 409 });
    }
    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;
    // console.log(userData);
    await User.create(userData);
    return NextResponse.json({ message: 'User Created.' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
