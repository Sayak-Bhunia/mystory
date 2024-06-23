'use client';
import { useState, useEffect } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import VanillaTilt from "vanilla-tilt";
import CustomCursor from '@/components/ui/custom-cursor';
import BackToTop from '@/components/BackToTop';

const Confess = () => {
  const [confessContent, setConfessContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

useEffect(() => {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    toast.loading('Submitting confession...');

    try {
      const response = await axios.post('/api/confession', {
        confessionContent: confessContent,
      });

      toast.dismiss();
      toast.success('Confession submitted successfully 🎉');
    } catch (error) {
      toast.error('An error occurred while submitting the confession 😢');
      console.error('Error submitting confession:', error);
    }
    setConfessContent('');
    setIsSubmitting(false);
    setTimeout(() => {
      toast.dismiss();
    }, 3000);
  };

  return (
    <>
      <CustomCursor />
  
    <div className="py-32 h-fit dark:bg-neutral-900 flex flex-col-reverse lg:flex-row justify-center items-center">
   
      <style >{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
      <div data-tilt="true">
        <Image
        src={'/confess.svg'}
        alt="Girl in thoughts"
        className="object-cover float "
        width={700}
        height={700}
      />
      </div>
      <div className="max-w-sm lg:max-w-md w-full bg-neutral-100 dark:bg-neutral-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Confess Anonymously</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="confessContent" className="block mb-2">
              Confession
            </label>
            <textarea
              id="confessContent"
              value={confessContent}
              onChange={(e) => setConfessContent(e.target.value)}
              rows="4"
              className="w-full px-3 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg focus:outline-none focus:ring focus:border-neutral-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Confession'}
            <RiSendPlaneFill className="ml-2" />
          </button>
        </form>
      </div>
      <BackToTop />
    </div>
  </>);
};

export default Confess;
