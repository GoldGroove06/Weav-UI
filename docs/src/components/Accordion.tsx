"use client";

import React from "react";
import Accordion from "@radui/ui/Accordion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

// Root component
const Root = ({ children }) => 
<Accordion.Root customRootClass = "weav-accordion">
  {children}
</Accordion.Root>;

// Item
const Item = 
  ({ className, ...props }) => (
    <Accordion.Item  className={clsx("", className)} {...props} />
  )

Item.displayName =  Accordion.Item.displayName;

// Header
const Header = 
  ({ className, ...props }) => (
    <Accordion.Header
      className={clsx("flex flex-1 items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180", className)}
      {...props}
    />
  )

Header.displayName = Accordion.Header.displayName;

// Trigger
const Trigger = 
  ({ className, children, ...props }) => (
    <Accordion.Trigger

      className={clsx(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:-translate-y-1 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </Accordion.Trigger>
  )

Trigger.displayName = Accordion.Trigger.displayName;

// Content
const Content = 
  ({ className, children, ...props }) => (
    <Accordion.Content
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={clsx("pb-4 pt-0", className)}>{children}</div>
    </Accordion.Content>
  )

Content.displayName = Accordion.Content.displayName;

// Export as a single object
export const WeavAccordion = {
  Root,
  Item,
  Trigger,
  Header,
  Content,
};
