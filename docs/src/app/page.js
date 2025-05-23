"use client"


import Link from "next/link";


export default function Home() {
  const compList = [
    "accordion",
    "badge",
    "button",
    "card",
    "code",
    "toggle"
  ]
  return (
    <div className="flex flex-col gap-4 text-white items-center">

      {compList.map((comp, index) => (
        <Link href={`/components/${comp}`} key={index}>{comp}</Link>
      ))}

    </div>
  );
}
