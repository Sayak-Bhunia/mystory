'use client'
import Content from "@/components/Content";
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    (async ()=>{
      const LocomotiveScroll =(await import('locomotive-scroll')).default;
      const locomotive = new LocomotiveScroll();
    })
  })


  return (
    <main>
      <Header />
      <Content />
      <Footer />
    </main>
  );
}