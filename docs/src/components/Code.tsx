import React from 'react';
import RaduiCode from "@radui/ui/Code"


function Code({children}) {
    return (
        <RaduiCode customRootClass="rounded-lg border font-mono pt-2 pb-2 p-4 shadow-sm">
            {children}
            </RaduiCode>
    );
}

export default Code;