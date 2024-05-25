import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../helpers/session';
import User from '@/models/userModel';
export async function POST(req) {
  try {
    const username = await req.json();
    const user = await getCurrentUser();
    console.log(user);
    if (!user) return NextResponse.json({ message: 'You need to sign in!' });
    await User.updateOne(
      { username: user.username },
      { $set: { username: username } },
    );
    return NextResponse.json({ message: 'Updated Succesfully' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Something Went Wrong', status: 404 });
  }
}
