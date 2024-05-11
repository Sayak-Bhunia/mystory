import Footer from '@/components/Footer/Footer';
import HeroScrollDemo from '@/components/Hero/HeroScrollDemo';
import TitleSpecial from '@/components/Features/TitleSpecial';
import Features from '@/components/Features/Features';
import CallToAction from '@/components/CallToAction';
import BuyMeACoffee from '@/components/BuyMeACoffee';

export default function Home() {
  return (
    <main>
      <HeroScrollDemo />
      <TitleSpecial />
      <Features />
      <CallToAction />
      <BuyMeACoffee />
      <Footer />
    </main>
  );
}
