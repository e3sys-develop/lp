import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        'primary-hover': "var(--primary-hover)",
        'primary-dark': "var(--primary-dark)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        'bg-muted': "var(--bg-muted)",
        'border-gray': "var(--border-gray)",
        'text-dark': "var(--text-dark)",
        'text-light': "var(--text-light)",
      },
    },
  },
  plugins: [],
} satisfies Config;
