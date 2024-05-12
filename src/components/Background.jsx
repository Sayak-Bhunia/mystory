export default function Background({ children }) {
  return (
    <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.12] bg-grid-black/[0.05]'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      {children}
    </div>
  );
}
