"use client"

import React from "react";
import Badge from "@radui/ui/Badge";
import clsx from "clsx";


const WeavBadge = ({children}) => {
    return(
        <Badge customRootClass = {clsx("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2")} >
            {children}
        </Badge>
    )
}

export default WeavBadge