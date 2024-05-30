import { getServerSession } from 'next-auth';
import { getUserId } from '../../../../helpers/session';
import { NextResponse } from 'next/server';
import { options } from '../auth/[...nextauth]/options';
import Confession from '@/models/confessionModel';
export async function GET(req) {
  const userId = await getUserId();
  const session = await getServerSession(options);
  const user = session.user;

  const confessions = await Confession.find();

  return NextResponse.json({ message: confessions });
}
