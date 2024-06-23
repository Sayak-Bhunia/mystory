'use client';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './custom-cursor.css';

const CustomCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const bigBall = document.querySelector('.cursor__ball--big');
    const smallBall = document.querySelector('.cursor__ball--small');

    const onMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.pageX, y: e.pageY });
      gsap.to(bigBall, { duration: 0.4, x: e.pageX - 15, y: e.pageY - 15 });
      gsap.to(smallBall, { duration: 0.1, x: e.pageX - 5, y: e.pageY - 7 });
    };

    const onMouseHover = () => {
      gsap.to(bigBall, { duration: 0.3, scale: 4 });
    };

    const onMouseHoverOut = () => {
      gsap.to(bigBall, { duration: 0.3, scale: 1 });
    };

    document.body.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('.hoverable').forEach((hoverable: Element) => {
      hoverable.addEventListener('mouseenter', onMouseHover);
      hoverable.addEventListener('mouseleave', onMouseHoverOut);
    });

    // Add event listener for scroll
    const onScroll = () => {
      // Update cursor position when scrolling
      setCursorPosition({ x: cursorPosition.x, y: cursorPosition.y + window.scrollY });
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('.hoverable').forEach((hoverable: Element) => {
        hoverable.removeEventListener('mouseenter', onMouseHover);
        hoverable.removeEventListener('mouseleave', onMouseHoverOut);
      });
      window.removeEventListener('scroll', onScroll);
    };
  }, [cursorPosition]); // Add cursorPosition as a dependency

  return (
    <div className="cursor" style={{ top: cursorPosition.y, left: cursorPosition.x }}>
      <div className="cursor__ball cursor__ball--big">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>

      <div className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
