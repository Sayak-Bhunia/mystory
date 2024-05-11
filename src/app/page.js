"use client";
import Content from "@/components/Content";
import Header from "@/components/Header";
// <<<<<<< HEAD
import Footer from "@/components/Footer";
// =======
// import Footer from "@/components/Footer";
import { useEffect } from "react";
// >>>>>>> 35589f525da8ffacde7acc49890893a30fd92a6b

export default function Home() {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotive = new LocomotiveScroll();
    };
  });

  return (
    <main>
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
