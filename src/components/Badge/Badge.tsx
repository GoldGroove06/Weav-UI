"use client"

import React from "react";
import RaduiBadge from "@radui/ui/Badge";
import clsx from "clsx";


const Badge = ({children}) => {
    return(
    
        <RaduiBadge customRootClass = {clsx("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2")} >
            {children}
        </RaduiBadge>
    )
}

export default Badge