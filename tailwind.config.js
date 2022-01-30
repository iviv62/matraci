module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '300px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        'main': {
          'primary': '#9B51E0',
          'primary-focus': '#4506cb',
          'light':'#fff',
          'primary-content': '#ffffff',
          'secondary': '#E2CEF5',
          'secondary-focus': '#e51a4c',
          'secondary-content': '#ffffff',
          'accent': '#FF0080',
          'accent-focus': '#ff003f',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#40CE4E',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
      
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
