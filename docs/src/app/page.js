"use client"


import Link from "next/link";


export default function Home() {
 
  return (
    <div className="flex flex-col gap-4 h-screen bg-black text-white items-center">


      <Link href="/components/accordion">Accordion</Link>
      <Link href="/components/badge">Badge</Link>

    

    </div>
  );
}
