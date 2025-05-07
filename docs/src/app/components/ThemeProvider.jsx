"use client";
import React from 'react';
import Theme from '@radui/ui/Theme';
import Navbar from './Navbar';

function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    return (
        <Theme appereance={isDarkMode ? 'dark' : 'light'}>
            <Navbar darkMode={isDarkMode} setDarkMode={setIsDarkMode} />
            {children}
        </Theme>
    );
}

export default ThemeProvider;