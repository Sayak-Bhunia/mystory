import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import '../styles/globals.css';

const StoriesPage = () => {
  return (
    
    <div className="session1" style={{  alignItems: 'center' }}>
        <h1 className="font-bold text-2xl mb-4 text-center">Other</h1>
        <div className='flex'>
        <div className="image1" style={{ marginRight: '20px' }}>
        <Image
          src={'/other.png'}
          alt="Stories"
          className="object-cover"
          width={10000}
          height={10000}
        />
      </div>
        <div className="mb-6 lg:mr-6 text-center">
            
            
                <p className='alinment'>Once upon a time, in a quaint little village nestled between rolling hills and whispering forests, there lived a curious young girl named Elara. She had eyes as bright as the morning sun and a heart as wild as the meadows that surrounded her home.

Elara was known far and wide for her insatiable thirst for knowledge. She spent her days exploring the nooks and crannies of the village library, poring over dusty tomes and ancient scrolls. Her favorite stories were those of great adventurers who braved the unknown in search of treasures untold.

One crisp autumn morning, as the leaves turned to fiery hues of red and gold, Elara stumbled upon a mysterious map hidden within the pages of an old atlas. The map depicted a series of winding trails leading deep into the heart of the enchanted forest that bordered the village.

Filled with an overwhelming sense of excitement, Elara decided to embark on a grand adventure of her own. Armed with nothing but her wits and a thirst for discovery, she set off into the unknown, her heart pounding with anticipation.

As she journeyed deeper into the forest, Elara encountered all manner of wonders and challenges. She braved treacherous rivers, outwitted cunning creatures, and even faced her own fears along the way. But through it all, she remained steadfast in her determination to uncover the secrets hidden within the ancient woods.

Finally, after days of travel, Elara emerged into a breathtaking clearing bathed in the soft glow of twilight. Before her stood a majestic tree, its branches reaching towards the heavens like outstretched arms. And nestled within the branches, shimmering in the fading light, was the greatest treasure of all – a fountain of knowledge that flowed endlessly, its waters sparkling with the wisdom of the ages.

With a smile of pure joy, Elara approached the fountain and drank deeply, feeling the knowledge of the universe course through her veins. And as she stood there, surrounded by the whispers of the forest and the gentle murmur of the fountain, she knew that her adventure had only just begun.

From that day forward, Elara became known as the greatest adventurer the village had ever seen, her thirst for knowledge leading her to countless new discoveries and adventures. But no matter where her travels took her, she would always return to the enchanted forest, where the fountain of knowledge awaited, ready to reveal its secrets to those who dared to seek them.</p>
            
        </div>
        </div>
      
    </div>
  );
};

export default StoriesPage;
