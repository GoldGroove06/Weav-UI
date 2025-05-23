import React from 'react';

function layout({children}) {
    return (
        <div className='flex flex-col gap-4 h-screen bg-black text-white items-center pt-8'>
            {children}
        </div>
    );
}

export default layout;