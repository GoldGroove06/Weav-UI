"use client"
import React from 'react';
import WeavBadge from "@/components/Badge"

function page() {
    return (
        <div className='flex space-x-2 bg-black h-screen flex-col items-center'>
            Badge component
            <WeavBadge>
                Badge
            </WeavBadge>
        </div>
    );
}

export default page;