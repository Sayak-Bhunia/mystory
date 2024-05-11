import Footer from '@/components/Footer';
import HeroScrollDemo from '@/components/Hero/HeroScrollDemo';
import TitleSpecial from '@/components/Features/TitleSpecial';
import Features from '@/components/Features/Features';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  useEffect(()=>{
    (async ()=>{
      const LocomotiveScroll =(await import('locomotive-scroll')).default;
      const locomotive = new LocomotiveScroll();
    })
  })


  return (
    <main>
      <HeroScrollDemo />
      <TitleSpecial />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}
