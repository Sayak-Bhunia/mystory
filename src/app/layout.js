import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'mystory | share your stories anonymously',
  description: 'a place to share stories anonymously and connect with like minded people.',
  keywords: [
    "Anonymous",
  "Story Writing",
  "Creative Writing",
  "Anonymous Stories",
  "Writing Community",
  "Online Writing Platform",
  "Narrative Writing",
  "Anonymous Authorship",
  "Story Sharing",
  "Collaborative Writing",
  "Creative Expression",
  "Writing Prompt",
  "User-generated Content",
  "Community Stories",
  "Anonymous Contributions",
  "Narrative Community",
  "Anonymous Feedback",
  "Writing Forum",
  "Anonymous Platform",
  "Story Exchange",
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1d1d1d] text-white`}>{children}</body>
    </html>
  );
};