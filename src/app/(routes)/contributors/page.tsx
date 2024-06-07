'use client';

import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3D-cards';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { ContributorsData } from "./ContributorsData";





const page = () => {
    return (
        <>
            {/* <Header /> */}

            <section className="my-40 py-12 relative overflow-x-hidden mx-4 md:mx-20">
                <div className="px-4 md:px-6  mb-10">
                    <div className="my-8 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl lg:7xl">
                            Creator
                        </h2>
                        <CardContainer>
                            <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-zinc-800 backdrop-blur bg-opacity-20 border-black/[0.3] w-auto sm:w-[30rem] h-auto rounded-lg p-6 ">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-purple-500 dark:text-purple-700"
                                >
                                    Sayak Bhunia
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

                    <div className="grid"></div>

                    <div className="mb-12 text-center ">
                        <h2 className="text-3xl text-center font-bold  sm:text-4xl">
                            Meet Our Contributors
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {ContributorsData.map((data, index) => (
                            <a
                                key={index}
                                href={data.github}
                                target="_blank"
                                className="group rounded-lg bg-white p-4 shadow-sm transition-all duration-300 hover:bg-primary/10 hover:shadow-md dark:bg-stone-950 dark:hover:bg-stone-800 dark:shadow-zinc-700 dark:border"
                            >
                                <div className="relative h-72 md:h-60 overflow-hidden rounded-lg">
                                    <Image
                                        alt={data.name}
                                        className="h-full w-full object-cover object-center group-hover:scale-110 transition-all duration-500"
                                        src={data.imageUrl}
                                        width={400}
                                        height={400}
                                    />
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-semibold">{data.name}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
};

export default page;
