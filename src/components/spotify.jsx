import { useState } from 'react';
import Image from 'next/image';

const SpotifyWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '100px',
        left: '20px',
        zIndex: 50,
        width: isExpanded ? '300px' : '40px',
        height: isExpanded ? 'auto' : '40px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#c053e6dd',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}
    >
      <button
        onClick={toggleExpand}
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
        }}
      >
        <span
          style={{
            fontSize: '20px',
            color: 'white',
          }}
        >
          {isExpanded ? (
            'x' // Use text for the collapse button
          ) : (
            <Image
              src="/spotify.png" // Path to your Spotify icon
              alt="Spotify"
              width={30}
              height={30}
              style={{
                alignItems: 'center',
              }}
            />
          )}
        </span>
      </button>
      <iframe
        style={{
          borderRadius: '10px',
          width: '100%',
          height: '352px',
          display: isExpanded ? 'block' : 'none', // Hide when collapsed
        }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator&theme=0"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyWidget;
