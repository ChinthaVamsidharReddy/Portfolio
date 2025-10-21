/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* gray-700 */
        input: "var(--color-input)", /* gray-900 */
        ring: "var(--color-ring)", /* electric-blue */
        background: "var(--color-background)", /* deep-black */
        foreground: "var(--color-foreground)", /* slate-50 */
        primary: {
          DEFAULT: "var(--color-primary)", /* electric-blue */
          foreground: "var(--color-primary-foreground)", /* deep-black */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* violet-500 */
          foreground: "var(--color-secondary-foreground)", /* slate-50 */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-500 */
          foreground: "var(--color-destructive-foreground)", /* slate-50 */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-700 */
          foreground: "var(--color-muted-foreground)", /* slate-400 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* green-400 */
          foreground: "var(--color-accent-foreground)", /* deep-black */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* gray-900 */
          foreground: "var(--color-popover-foreground)", /* slate-50 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* gray-900 */
          foreground: "var(--color-card-foreground)", /* slate-50 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* emerald-500 */
          foreground: "var(--color-success-foreground)", /* slate-50 */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-500 */
          foreground: "var(--color-warning-foreground)", /* deep-black */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* slate-50 */
        },
        conversion: {
          DEFAULT: "var(--color-conversion)", /* orange-500 */
          foreground: "var(--color-conversion-foreground)", /* slate-50 */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "typing": "typing 3s steps(40, end), blink-caret 0.75s step-end infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 10s ease-in-out infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "typing": {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { "border-color": "transparent" },
          "50%": { "border-color": "var(--color-primary)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 4px 20px rgba(0, 212, 255, 0.1)',
        'glow-lg': '0 8px 40px rgba(0, 212, 255, 0.15)',
        'accent-glow': '0 4px 20px rgba(0, 255, 136, 0.1)',
        'conversion-glow': '0 4px 20px rgba(255, 107, 53, 0.2)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(0, 255, 136, 0.1) 100%)',
        'text-gradient': 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
      },
    },
  },
  plugins: [
  require("tailwindcss-animate"),

  // 👇 Add this custom plugin
  function ({ addUtilities }) {
    addUtilities({
      // Enables 3D perspective
      '.perspective-1000': {
        perspective: '1000px',
      },
      // Ensures 3D children render properly
      '.preserve-3d': {
        transformStyle: 'preserve-3d',
      },
      // Hides the back face of flipped elements
      '.backface-hidden': {
        backfaceVisibility: 'hidden',
      },
      // Rotate card for flip effect
      '.rotate-y-180': {
        transform: 'rotateY(180deg)',
      },
    })
  },
],
}