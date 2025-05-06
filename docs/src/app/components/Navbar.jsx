import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Github } from 'lucide-react';

function Navbar() {
    return (
        <div className='flex flex-row sticky top-0 bg-red-500 justify-between items-center p-2 mlr-2 mr-2'>
                  <Image src="/images/weavui.png" alt="Weav UI Logo" width={150} height={150} />
                  <Link href="https://github.com/GoldGroove06/Weav-UI"><Github className='text-black'/></Link>
        </div>
    );
}

export default Navbar;