"use client";
import React from 'react';
import Image from "next/image";
import Switch from "@radui/ui/Switch";
import { Moon, Sun } from "lucide-react";
import Button from "@radui/ui/Button";
import Link from 'next/link';
import { Github } from 'lucide-react';

function Navbar({darkMode, setDarkMode}) {
    return (
        <div className='flex flex-row sticky top-0 bg-gray-500 justify-between items-center p-2 mlr-2 pr-2'>
                  <Image src="/images/weavui.png" alt="Weav UI Logo" width={150} height={150} />
                  <Link href="https://github.com/GoldGroove06/Weav-UI"><Github className='text-black'/></Link>
                  <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Moon /> :<Sun />}</Button>
        </div>
    );
}

export default Navbar;