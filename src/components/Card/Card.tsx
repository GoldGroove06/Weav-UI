import React from 'react';
import RaduiCard from "@radui/ui/Card"

function Card({children}) {
    return (
       <RaduiCard customRootClass="rounded-lg border bg-card text-card-foreground shadow-sm">
           {children}
       </RaduiCard>
    );
}

export default Card;