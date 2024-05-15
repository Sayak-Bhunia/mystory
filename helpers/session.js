import { options } from '@/app/api/auth/[...nextauth]/options';
import User from '@/models/userModel';
import { getServerSession } from 'next-auth';
export async function getUserId() {
  const session = await getServerSession(options);
  const user = await User.findOne({ email: session.user.email }).lean().exec();
  const id = user._id;
  return id.toString();
}
