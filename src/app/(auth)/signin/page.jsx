import SignInForm from '@/components/signInForm';
import UserForm from '@/components/UserForm';
import CustomCursor from '@/components/ui/custom-cursor';

export default function Page() {
  return (
    <>
      <CustomCursor />
      <div className="flex flex-col items-center justify-center mx-48">
        <SignInForm />{' '}
      </div>
    </>
  );
}
