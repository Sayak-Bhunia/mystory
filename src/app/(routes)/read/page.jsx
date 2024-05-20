import Link from 'next/link';
import Image from 'next/image';
import '../styles/globals.css';




const Home = () => {
  

  return (
    <main>
    
      <section className="section">
        <div className="flex items-center justify-center flex-col lg:flex-row">
        
        <div className='image1'>
            <Image
              src={'/stories.png'}
              alt="Stories"
              className="object-cover"
              width={200}
              height={200}
            />
          </div>
          <div className='mb-6 lg:mr-6'>
          <div className="mb-6 lg:mr-6 text-center ">
            <h2 className="text-2xl font-bold mb-2 lg:mb-0">Stories 📖</h2>
            <p>Here are some interesting stories!</p>
            <Link href="/storiesPage">
              <button className="button-81">Let's Read Stories</button>
            </Link>
            
          </div>
          </div>
          
        </div>
      </section>

      <section className="section">
        <div className="flex items-center justify-center flex-col lg:flex-row">
        <div className='image1'>
            <Image
              src={'/memes.png'}
              alt="Memes"
              className="object-cover"
              width={200}
              height={200}
            />
          </div>
          <div className="mb-6 lg:mr-6 text-center">
            <h2 className="text-2xl font-bold mb-2 lg:mb-0">Memes 😂</h2>
            <p>Check out some memes!</p>
            <Link href="/memePage">
              <button className="button-81">View Memes</button>
            </Link>
          </div>
          
        </div>
      </section>

      <section className="section">
        <div className="flex items-center justify-center flex-col lg:flex-row">
        <div className='image1'>
            <Image
              src={'/lifestories.png'}
              alt="Life Stories"
              className="object-cover"
              width={200}
              height={200}
            />
          </div>
          <div className="mb-6 lg:mr-6 text-center">
            <h2 className="text-2xl font-bold mb-2 lg:mb-0">Life Stories 📝</h2>
            <p>Read some life stories!</p>
            <Link href="/lifestoriesPage">
              <button className="button-81">Read Life Stories</button>
            </Link>
          </div>
          
        </div>
      </section>

      <section className="section">
        <div className="flex items-center justify-center flex-col lg:flex-row">
        <div className='image1'>
            <Image
              src={'/fictional.png'}
              alt="Fictional Stories"
              className="object-cover"
              width={200}
              height={200}
            />
          </div>
          <div className="mb-6 lg:mr-6 text-center">
            <h2 className="text-2xl font-bold mb-2 lg:mb-0">Fictional Stories 🧙‍♂️</h2>
            <p>Here are some fictional stories!</p>
            <Link href="/fictionPage">
              <button className="button-81">Read Fictional Stories</button>
            </Link>
          </div>
          
        </div>
      </section>

      <section className="section">
        <div className="flex items-center justify-center flex-col lg:flex-row">
        <div className='image1'>
            <Image
              src={'/other.png'}
              alt="Other Options"
              className="object-cover"
              width={200}
              height={200}
            />
          </div>
          <div className="mb-6 lg:mr-6 text-center">
            <h2 className="text-2xl font-bold mb-2 lg:mb-0">Other Options 📚</h2>
            <p>Explore other options!</p>
            <Link href="/otherPage">
              <button className="button-81">Explore Options</button>
            </Link>
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default Home;
