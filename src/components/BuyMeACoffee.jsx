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
            src="https://cdn.dribbble.com/users/3349322/screenshots/14039201/media/616e4ae6995fb288e434c3f0927541ce.png?resize=400x0"
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
