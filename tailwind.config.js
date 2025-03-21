/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark base colors
        background: {
          DEFAULT: '#0A0A0B',
          secondary: '#13151A'
        },
        // Neon accents
        neon: {
          purple: '#B537F2',
          blue: '#3FCAFF',
          pink: '#FF2E8A',
          green: '#00F59B'
        },
        // Muted accents
        muted: {
          purple: '#9333EA',
          blue: '#2563EB',
          pink: '#DB2777',
          green: '#059669'
        },
        // Surface colors
        surface: {
          dark: '#1E1E24',
          DEFAULT: '#252A34',
          light: '#2D3544'
        },
        // Text colors
        content: {
          primary: '#FFFFFF',
          secondary: '#94A3B8',
          tertiary: '#64748B'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-game': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon': '0 0 20px -5px var(--tw-shadow-color)',
      }
    },
  },
  plugins: [],
};

