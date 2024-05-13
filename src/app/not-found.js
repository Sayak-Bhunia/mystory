import { IoArrowBackCircleOutline } from 'react-icons/io5';

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-700 to-purple-900">
      <h1 className="text-3xl md:text-5xl text-center text-white mb-6 ">
        Oopsie Daisy! 404 Error 🚧
      </h1>
      <p className="text-2xl text-center text-white mb-8 animate-pulse">
        Page Not Found 😢
      </p>
      <a
        href="/"
        className="text-2xl mt-6 hover:shadow-lg rounded-full transition duration-300
       hover:-translate-x-8 border flex justify-center items-center px-4 py-2 bg-white text-purple-600 hover:bg-purple-600 hover:text-white"
      >
        <IoArrowBackCircleOutline className="mr-2 inline-block" />
        Take Me Home
      </a>
      <div className="mt-8 text-center text-white text-opacity-60">
        <p>While you&apos;re here, enjoy this funny 404 page. 🎉</p>
        <p>
          Here&apos;s a random fact: Bananas are berries, but strawberries
          aren&apos;t!
        </p>
      </div>
    </div>
  );
}

export default NotFound;
