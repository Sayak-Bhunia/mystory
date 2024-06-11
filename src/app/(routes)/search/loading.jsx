import CustomCursor from '@/components/ui/custom-cursor';

export default function Loading() {
  return (
    <>
      <CustomCursor />
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 bg-transparent border-zinc-500 " />
      </div>
    </>
  );
}
