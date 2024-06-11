import UserForm from '@/components/UserForm';
import CustomCursor from '@/components/ui/CustomCursor';

export default function Page() {
  return (
    <>
      <CustomCursor />
      <div className="flex flex-col items-center justify-center mx-16">
        <UserForm />
      </div>
    </>
  );
}
