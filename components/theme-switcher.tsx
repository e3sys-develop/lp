'use client';

import React from 'react';
import { useTheme } from './theme-provider';
import { themes } from '@/lib/themes';

export function ThemeSwitcher() {
    const { currentThemeName, setTheme } = useTheme();

    return (
        <div className="fixed top-4 right-4 z-50">
            <div className="bg-white rounded-lg shadow-lg border border-border-gray p-2">
                <select
                    value={currentThemeName}
                    onChange={(e) => setTheme(e.target.value)}
                    className="text-sm text-text-dark bg-transparent border-none outline-none cursor-pointer"
                >
                    {Object.entries(themes).map(([key, theme]) => (
                        <option key={key} value={key}>
                            {theme.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
} 