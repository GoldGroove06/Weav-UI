"use client"
import {WeavAccordion} from "@/components/Accordion"
import Button from "@radui/ui/Button"

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
      <Button >Button</Button>
      Weav UI
      
      <div className="w-64 md:w-96">
    <WeavAccordion.Root>
      {items.map((item, index) => (
        <WeavAccordion.Item key={index} value={`item-${index}`}>
          <WeavAccordion.Header>
            <WeavAccordion.Trigger index={index}>{item.title}</WeavAccordion.Trigger>
          </WeavAccordion.Header>
          <WeavAccordion.Content index={index}>{item.content}</WeavAccordion.Content>
        </WeavAccordion.Item>
      ))}
    </WeavAccordion.Root>
  </div>
    </div>
  );
}
