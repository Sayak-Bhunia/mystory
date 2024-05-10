'use client';
import Footer from '@/components/Footer';
import HeroScrollDemo from '@/components/HeroScrollDemo';
import CardStackDemo from '@/components/CardStack';
import StickyScrollRevealDemo from '@/components/StickScrollRevealDemo';
export default function Home() {
  return (
    <main>      
      <HeroScrollDemo />
      
      <CardStackDemo />
      <Footer />
    </main>
  );
}
