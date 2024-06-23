import { Avatar, AvatarImage, AvatarFallback } from '@/components/avatar.tsx';
import { getCurrentUser } from '../../../../helpers/session';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import CustomCursor from '@/components/ui/custom-cursor';

export default async function Page() {
  const user = await getCurrentUser();
  const session = await getServerSession(options);

  //   console.log(session.user);
  const av = user.username;
  const initials = av
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <>
      <CustomCursor />
      <div className="flex flex-col items-center h-screen justify-center gap-6 px-4 py-8 md:px-6 lg:px-8">
        <div className="relative">
          <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-800">
            <AvatarImage alt="avatar" src={session.user.image} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="absolute -right-2 -bottom-2 rounded-full bg-primary p-1">
            <CameraIcon className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="grid gap-1 text-center">
          <div className="text-2xl font-bold">{user.username}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {user.email}
          </div>
        </div>
        <div className="grid w-full max-w-md gap-4">
          <div className="grid gap-1.5">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Location
            </div>
            <div className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm dark:bg-gray-800">
              <MapPinIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span>
                {session.user.location ? session.user.location : 'India'}
              </span>
            </div>
          </div>
          <div className="grid gap-1.5">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Bio
            </div>
            <div className="rounded-md bg-gray-100 px-3 py-2 text-sm dark:bg-gray-800">
              I&apos;m a software engineer and I love to code! In my free time, I
              enjoy hiking and exploring the great outdoors.
            </div>
          </div>
          <div className="grid gap-1.5">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Joined
            </div>
            <div className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm dark:bg-gray-800">
              <CalendarDaysIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span>To be added</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
