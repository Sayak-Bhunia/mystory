import Settings from '@/components/Settings';
import SignInForm from '@/components/signInForm';
import UserForm from '@/components/UserForm';
import CustomCursor from '@/components/ui/custom-cursor';

export default function Page() {
  return (
    <>
      <CustomCursor />
      <div className="flex flex-col items-center justify-center h-screen mx-48">
        <Settings />
      </div>
    </>
  );
}