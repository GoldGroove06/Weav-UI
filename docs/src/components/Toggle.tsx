import React from 'react';
import RaduiToggle from "@radui/ui/Toggle"

function Toggle(props) {
    return (
        <RaduiToggle customRootClass="border border-gray-900 hover:border-gray-200 px-2 py-1 aria-pressed:bg-gray-950">
            {props.children}
        </RaduiToggle>  
    );
}

export default Toggle;