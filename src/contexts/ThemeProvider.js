import React, { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false)
    return (
        <div>
            <ThemeContext.Provider value={{dark, setDark}}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
};

export default ThemeProvider;