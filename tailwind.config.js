module.exports = {
  content: ["./src/index.html"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'primary': ['League Spartan, sans-serif'],
    },
    colors: {
        secondary: '#502050',
        light: '#f7f2f7',
        gray: '#937b92',
        pink: '#ee68a4',
        primary: '#ffffff'
    },
    extend: {
      backgroundImage: {
        'mobile': "url('/images/bg-pattern-top-mobile.svg')",
        'desktop': "url('/images/bg-pattern-top-desktop.svg')",
        'deskbottom': "url('/images/bg-pattern-bottom-desktop.svg')",
      }
    },
  },
  plugins: [],
}
