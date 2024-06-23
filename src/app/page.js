'use client';
import Footer from '@/components/Footer/Footer';
import HeroScrollDemo from '@/components/Hero/HeroScrollDemo';
import TitleSpecial from '@/components/Features/TitleSpecial';
import Features from '@/components/Features/Features';
import CallToAction from '@/components/CallToAction';
import BuyMeACoffee from '@/components/BuyMeACoffee';
import BackToTop from '@/components/BackToTop';
import Background from '@/components/Background';
import Spotify from '@/components/Spotify';

import CustomCursor from '@/components/ui/custom-cursor';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import { InfiniteMovingCardsDemo } from '../components/Testimonials';

import { CardHoverEffectDemo } from '../components/importance';
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
    <>
      <CustomCursor />
      <main>
        <Background>
          <HeroScrollDemo />
          <TitleSpecial />
          <Features />
          <BuyMeACoffee />
          <Spotify />
          <BackToTop />
        <CardHoverEffectDemo />
          
          <InfiniteMovingCardsDemo />
        </Background>
        <CallToAction />
      </main>
    </>
  );
}
