import { AboutCard } from '../components/ui/aboutcard';
import { TypewriterEffect } from './ui/typewriterabout';
const authors = [
  {
    name: 'Anonymous Story Sharing',
    details: '',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLisQDXrgVPt8jJcdKbzjDgXCK7jah3rGkvg&s',
  },
  {
    name: 'User-Friendly Interface',
    details: '',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDC-dLyw1eLkKfk-4aROMxg3oPaawpygmhXA&s',
  },
  {
    name: 'Privacy and Security',
    details: '',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdD4qGQw-cu8wnePthawQLc5H12aw9PqPR3A&s',
  },
  {
    name: 'Social Media Integration',
    details: '',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mC54iA9w0Ojv5v6V0TfDb-_M_MjPcDmFig&s',
  },
  {
    name: 'Open-Source Platform',
    details: '',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0mgfUwPJlaRtqtEvusaO1onSeGdksP--7ng&s',
  },
  {
    name: 'Safe and Supportive Community',
    details: '',
    image: 'https://i.insider.com/631f8f8589d2b3001894b4f6?width=700',
  },
];

  const words = [
    {
      text: "Unleash",
    },
    {
      text: "stories",
    },
    {
      text: "anonymously",
    },
    {
      text: "with",
    },
    {
      text: "mystory.",
      className: "text-purple-800 dark:text-purple-800",
    },
  ];

export default function AuthorsList() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[40rem] -mt-10">
        <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
          The road to freedom starts from here
        </p>
        <TypewriterEffect words={words} />
      </div>
      <div className="grid grid-cols-3 gap-20 mx-20 -mt-24">
        {authors.map((author, index) => (
          <AboutCard key={index} author={author} />
        ))}
      </div>
    </div>
  );
}
