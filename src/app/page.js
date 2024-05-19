'use client'
import Footer from '@/components/Footer/Footer';
import HeroScrollDemo from '@/components/Hero/HeroScrollDemo';
import TitleSpecial from '@/components/Features/TitleSpecial';
import Features from '@/components/Features/Features';
import CallToAction from '@/components/CallToAction';
import BuyMeACoffee from '@/components/BuyMeACoffee';
import Background from '@/components/Background';

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
      <Background>
        <HeroScrollDemo />
        <TitleSpecial />
        <Features />
        <BuyMeACoffee />
      </Background>
      <CallToAction />
    </main>
  );
}
