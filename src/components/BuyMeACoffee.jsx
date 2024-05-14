import Image from 'next/image';

export default function BuyMeACoffee() {
  return (
    <div>
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href="https://www.buymeacoffee.com/sbhunia2909"
          target="_blank"
          className="block w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden active:scale-90 hover:scale-110 transition duration-150"
        >
          <Image
            src="/cup.png"
            layout="fill"
            objectFit="cover"
            alt="Buy Me A Coffee"
            className="rounded-full"
          />
        </a>
      </div>
    </div>
  );
}
