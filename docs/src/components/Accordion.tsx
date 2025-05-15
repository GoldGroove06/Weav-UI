"use client";

import React from "react";
import RaduiAccordion  from "@radui/ui/Accordion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

// Root component
const Root = ({ children }) => 
<RaduiAccordion.Root customRootClass = "weav-accordion">
  {children}
</RaduiAccordion.Root>;

// Item
const Item = 
  ({ className, ...props }) => (
    <RaduiAccordion.Item  className={clsx("", className)} {...props} />
  )

Item.displayName =  RaduiAccordion.Item.displayName;

// Header
const Header = 
  ({ className, ...props }) => (
    <RaduiAccordion.Header
      className={clsx("flex flex-1 items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180", className)}
      {...props}
    />
  )

Header.displayName = RaduiAccordion.Header.displayName;

// Trigger
const Trigger = 
  ({ className, children, ...props }) => (
    <RaduiAccordion.Trigger

      className={clsx(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:-translate-y-1 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </RaduiAccordion.Trigger>
  )

Trigger.displayName = RaduiAccordion.Trigger.displayName;

// Content
const Content = 
  ({ className, children, ...props }) => (
    <RaduiAccordion.Content
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={clsx("pb-4 pt-0", className)}>{children}</div>
    </RaduiAccordion.Content>
  )

Content.displayName = RaduiAccordion.Content.displayName;

// Export as a single object
const Accordion = {
  Root,
  Item,
  Trigger,
  Header,
  Content,
};

export default Accordion;
