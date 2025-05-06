"use client"

import Link from "next/link";


export default function Home() {
  const items = [
    {
      title: "React",
      content: "React is a JavaScript library for building user interfaces."
    },
    {
      title: "Angular",
      content: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript."
    },
    {
      title: "Vue",
      content: "Vue.js is a progressive framework for building user interfaces."
    }
  ]
  return (
    <div className="flex flex-col gap-4 h-screen bg-black text-white items-center">

      <Link href="/components/accordion">Accordion</Link>
      <Link href="/components/badge">Badge</Link>
    </div>
  );
}
