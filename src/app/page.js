// <<<<<<< HEAD
"use client";
// import Content from "@/components/Content";
// import Header from "@/components/Header";
// <<<<<<< HEAD
import Footer from "@/components/Footer";
// =======
// import Footer from "@/components/Footer";
import { useEffect } from "react";
// >>>>>>> 35589f525da8ffacde7acc49890893a30fd92a6b
import HeroScrollDemo from "@/components/Hero/HeroScrollDemo";
import TitleSpecial from "@/components/Features/TitleSpecial";
import Features from "@/components/Features/Features";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotive = new LocomotiveScroll();
    };
  });
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
// =======
// import Footer from '@/components/Footer';

// export default function Home() {
// // >>>>>>> c39496839c93e4ca35d284dac050663c83055a30
//   return (
//     <main>
//       <HeroScrollDemo />
//       <TitleSpecial />
//       <Features />
//       <CallToAction />
//       <Footer />
//     </main>
//   );
// }
