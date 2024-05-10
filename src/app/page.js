import Footer from '@/components/Footer';
import HeroScrollDemo from '@/components/HeroScrollDemo';
import Seamless from '@/components/Seamless';
import PrivacyMatters from '@/components/PrivacyMatters';
import TitleSpecial from '@/components/TitleSpecial';
import ShareEasily from '@/components/ShareEasily';
export default function Home() {
  return (
    <main>
      <HeroScrollDemo />
      <TitleSpecial />
      <Seamless />
      <PrivacyMatters />
      <ShareEasily />
      <Footer />
    </main>
  );
}
