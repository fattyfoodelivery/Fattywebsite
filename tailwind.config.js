/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      },     
    },
    extend: {
      colors: {
        primary: "#FF6704",
        secondary: "#202020",
        "tertiary":"#EBEDEE",
        "quaternary":"#D9D9D9",
        "light-primary":"#FFDBC4",
        "light-primary-1":"#FFCFB4",
        "soft-primary":"#FFC88B",
        "mid-primary":"#FFAB74",
        "hard-primary":"#5E341A",
        "light-secondary":"#828282",
        "soft-tertiary":"#F2EFE6",
        "footer":"#CA4F00",
        "required": "#FF6704",
        "accordian": "#FFF3EB",
        "accordian-summary": "#383838",
        
      },
      screens: {
        'lg':'1360px',
        'xl': '1440px', 
        '2xl': '1536px', 
        '3xl': '1920px', 
        '4xl': '2560px', 
      },
    },
  },
  plugins: []
}
