import React from 'react';
import Accordion from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
}

export default meta;

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

export const Default=  () => {
  return (
      <Accordion.Root>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={`item-${index}`}>
          <Accordion.Header>
            <Accordion.Trigger index={index}>{item.title}</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content index={index}>{item.content}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
 

