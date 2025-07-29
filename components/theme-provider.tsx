'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme, getTheme, getThemeCSSVariables } from '@/lib/themes';

interface ThemeContextType {
    theme: Theme;
    setTheme: (themeName: string) => void;
    currentThemeName: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

interface ThemeProviderProps {
    children: React.ReactNode;
    initialTheme?: string;
}

export function ThemeProvider({ children, initialTheme = 'naraban' }: ThemeProviderProps) {
    const [currentThemeName, setCurrentThemeName] = useState(initialTheme);
    const [theme, setThemeState] = useState<Theme>(getTheme(initialTheme));

    const setTheme = (themeName: string) => {
        const newTheme = getTheme(themeName);
        setThemeState(newTheme);
        setCurrentThemeName(themeName);

        // CSS変数を適用
        const cssVariables = getThemeCSSVariables(newTheme);
        document.documentElement.style.cssText = cssVariables;
    };

    useEffect(() => {
        // 初期テーマを適用
        const cssVariables = getThemeCSSVariables(theme);
        document.documentElement.style.cssText = cssVariables;
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, currentThemeName }}>
            {children}
        </ThemeContext.Provider>
    );
} 