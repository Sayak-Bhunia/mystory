//
'use client';

import Image from 'next/image';
import React from 'react';
import {
  CardBody,
  CardContainer,
  CardItem,
} from '../../components/ui/3D-cards';
import { Github } from 'lucide-react';
import { Button } from '../../components/ui/button';

export function ThreeDCardDemo() {
  return (
    <div className="container grid px-1  md:px-6">
      <h1 className="text-4xl text-center text-purple-600">Developer</h1>

      <CardContainer>
        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-zinc-800 backdrop-blur bg-opacity-20 border-black/[0.3] w-auto sm:w-[30rem] h-auto rounded-lg p-6 ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-purple-500 dark:text-purple-700"
          >

          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm text-left max-w-sm mt-2 text-purple-50 dark:text-purple-400"
          >
            Web Dev 🌐 | Open Source ⭐ | CP 📈 | Cloud ☁️ | Web3💲 | Hackathons
            💻 | Community 🍀
          </CardItem>
          <CardItem translateZ="100" rotateX={-5} className="w-full mt-6">
            <Image
              src="/image/sayakbunia.webp"
              height="700"
              width="700"
              className="h-80 w-full object-cover rounded-lg group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              translateX={-40}
              as="button"
              className="text-xs font-normal text-purple-700 dark:text-purple-100"
            >
              <Button variant="ghost" asChild>
                <a
                  href="https://sayak-bhunia.github.io/linktree/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Know More →
                </a>
              </Button>
            </CardItem>
            <CardItem
              translateZ={20}
              translateX={40}
              as="button"
              className="px-4 py-2 rounded-md bg-purple-600 text-white text-xs font-bold"
            >
              <a
                title="Github"
                href="https://github.com/Sayak-Bhunia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center"
              >
                Github <Github size={20} />
              </a>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
