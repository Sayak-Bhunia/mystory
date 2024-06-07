'use client';
import styles from './page.module.css';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase =
  'In Willowbrook, a boy named Ezra dreamed big. Despite humble beginnings, he devoured books, fueled by curiosity. With grit, he conquered obstacles, turning challenges into stepping stones. When opportunity came, he seized it, embarking on a journey to success. Against all odds, the small-town boy emerged triumphant, a beacon of determination and self-belief.';

export default function Cont() {
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 2.5}`,
      },
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(' ').forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + '_' + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split('').forEach((letter, i) => {
      letters.push(
        <span
          key={letter + '_' + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>,
      );
    });
    return letters;
  };

  return (
    <main ref={container} className={styles.main}>
      <div ref={body} className={styles.body}>
        {splitWords(phrase)}
      </div>
    </main>
  );
}
