export interface Theme {
  name: string;
  colors: {
    primary: string;
    'primary-hover': string;
    'primary-dark': string;
    secondary: string;
    accent: string;
    'bg-muted': string;
    'border-gray': string;
    'text-dark': string;
    'text-light': string;
  };
}

export const themes: Record<string, Theme> = {
  naraban: {
    name: 'NARABAN',
    colors: {
      primary: '#3abeff',
      'primary-hover': '#26a9e0',
      'primary-dark': '#188abf',
      secondary: '#ffffff',
      accent: '#007bff',
      'bg-muted': '#f0fbff',
      'border-gray': '#d1e4f0',
      'text-dark': '#1a2e3b',
      'text-light': '#5f7f94',
    },
  },
  katawara: {
    name: 'KATAWARA',
    colors: {
      primary: '#ff6b35',
      'primary-hover': '#e55a2b',
      'primary-dark': '#cc4a1f',
      secondary: '#ffffff',
      accent: '#ff8c42',
      'bg-muted': '#fff5f0',
      'border-gray': '#ffe0d0',
      'text-dark': '#2d1b0f',
      'text-light': '#6b4a3a',
    },
  },
  bansou: {
    name: 'BANSOU',
    colors: {
      primary: '#8b5cf6',
      'primary-hover': '#7c3aed',
      'primary-dark': '#6d28d9',
      secondary: '#ffffff',
      accent: '#a855f7',
      'bg-muted': '#faf5ff',
      'border-gray': '#e9d5ff',
      'text-dark': '#1e1b4b',
      'text-light': '#5b4b7a',
    },
  },
};

export function getTheme(themeName: string): Theme {
  return themes[themeName] || themes.naraban;
}

export function getThemeCSSVariables(theme: Theme): string {
  return `
    --primary: ${theme.colors.primary};
    --primary-hover: ${theme.colors['primary-hover']};
    --primary-dark: ${theme.colors['primary-dark']};
    --secondary: ${theme.colors.secondary};
    --accent: ${theme.colors.accent};
    --bg-muted: ${theme.colors['bg-muted']};
    --border-gray: ${theme.colors['border-gray']};
    --text-dark: ${theme.colors['text-dark']};
    --text-light: ${theme.colors['text-light']};
  `;
} 