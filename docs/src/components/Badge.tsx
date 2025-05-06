"use client"

import React from "react";
import Badge from "@radui/ui/Badge";
import clsx from "clsx";


const WeavBadge = ({children}) => {
    return(
        <Badge customRootClass = "w-10 h-10">
            {children}
        </Badge>
    )
}

export default WeavBadge