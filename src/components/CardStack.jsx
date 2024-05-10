"use client";
import { CardStack } from "@/components/ui/card-stack";
import CARDS from '@/data/CardStackData';

export default function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}
