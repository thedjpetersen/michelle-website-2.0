/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Boska', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['64px', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        }],
        'h1': ['48px', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        }],
        'h2': ['36px', {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        }],
        'h3': ['24px', {
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        'body': ['16px', {
          lineHeight: '1.6',
          fontWeight: '400',
        }],
        'small': ['14px', {
          lineHeight: '1.6',
          fontWeight: '400',
        }],
      },
      colors: {
        navy: {
          DEFAULT: '#1B3954',
          50: '#F5F7FA',
          100: '#E9EEF3',
          200: '#C5D5E3',
          300: '#93AFC9',
          400: '#517A9E',
          500: '#1B3954',
          600: '#162F45',
          700: '#112536',
          800: '#0B1A27',
          900: '#060F18',
        },
        slate: {
          DEFAULT: '#64748B',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        text: {
          DEFAULT: 'oklch(0.556 0 0)',
        },
        // Material Truth Palette
        titanium: {
          light: '#EAEEF1',    // Aircraft-grade aluminum
          DEFAULT: '#D1D5D9',  // Machined metal
          dark: '#B5B9BE',     // Surgical steel
        },
        impact: {
          cyan: '#00C7D1',     // Béhar's Impact Cyan
          hover: '#00A8B1',
        },
        // Functional colors mapped to material aesthetics
        background: {
          DEFAULT: 'hsl(var(--background))',
          secondary: 'hsl(var(--background-secondary))',
        },
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // Data Visualization Colors
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
      // Custom spacing for precise engineering layouts
      spacing: {
        'precision-1': '0.0625rem',  // 1px
        'precision-2': '0.125rem',   // 2px
        'precision-4': '0.25rem',    // 4px
        'precision-8': '0.5rem',     // 8px
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      // Custom backdrop filters for depth
      backdropFilter: {
        'precision': 'blur(12px) saturate(180%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '4xl': '2rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-prose-body)',
            lineHeight: '1.6',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    // Add plugin for backdrop filters
    function({ addUtilities }) {
      addUtilities({
        '.backdrop-precision': {
          '@apply backdrop-blur-md backdrop-saturate-150': {},
        },
      })
    },
  ],
};
