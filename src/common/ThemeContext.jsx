import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    {/* Creates a theme and sets it to browser unless another theme is active*/}
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );
    {/*A Way to reference the theme*/}
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    {/*Toggle theme*/}
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    {/*Encapsulate entire app within the chosen theme*/}
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};