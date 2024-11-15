import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#f97316', // Custom orange color for scrollbar
        customGreen: '#34D399', // Example custom green
        customBlue: '#3B82F6', 
        customGoldenYellow: '#Fc9953', // Example custom blue
        Red:"#Fe0008",
        Blue:"#0141FF",
        Green:"#34D399",
        Yellow:"#FFC72C",
        Pink:"#FF79B4",
        White:"#ffffff",
       
        Sky:'#0141FF',
        purple:"",

       

      },
      textShadow: {
        red: '2px 2px 0 rgba(255, 0, 0, 0.8)', // Red text shadow
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'], // Use Inter font for headings and body text
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-textshadow') // Enable scrollbar plugin
  ],
}
export default config
