"use client"
import React from 'react';
import Badge from "@/components/Badge"
import Button from "@/components/Button"

function page() {
    return (

        <div className='flex space-x-2 bg-black h-screen flex-col items-center text-white'>
            Badge component

            <Badge>
                Badge
            </Badge>
        </div>
    );
}

export default page;