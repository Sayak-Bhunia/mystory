import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import SessionWrapper from "@/components/SessionWrapper";
export const metadata = {
  title: "mystory | share your stories anonymously",
  description:
    "a place to share stories anonymously and connect with like minded people.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-[#1d1d1d] dark:text-white text-black bg-white`}
      >
        <SessionWrapper>
          <NavBar />
          <div>{children}</div>
        </SessionWrapper>
      </body>
    </html>
  );
}

//
