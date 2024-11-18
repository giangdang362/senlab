/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('tailwindcss-textshadow')],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        xl: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        custom: '3px 2px 0px rgba(0, 0, 0, 1)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "gray-alpha-200": "rgba(var(--gray-rgb), 0.145)",
        "gray-alpha-100": "rgba(var(--gray-rgb), 0.06)",
        "button-primary-hover": "#ccc",
        "button-secondary-hover": "#1a1a1a",
      },
      screens: {
        'mobile': { 'min': '320px', 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '1199px' },
        'pc': { 'min': '1200px' },
      },
      animation: {},
      keyframes: {},
      backgroundImage: {
        'banner-first': 'url(/images/home/banner/background-banner-1.webp)',
      },
      fontFamily: {
        'regular': ['Gilroy'],
        'medium': ['Gilroy-Medium'],
        'medium-italic': ['Gilroy-MediumItalic'],
        'black': ['Gilroy-Black'],
        'black-italic': ['Gilroy-BlackItalic'],
        'heavy': ['Gilroy-Heavy'],
        'heavy-italic': ['Gilroy-HeavyItalic'],
        'bold': ['Gilroy-Bold'],
        'bold-italic': ['Gilroy-BoldItalic'],
        'light': ['Gilroy-Light'],
        'light-italic': ['Gilroy-LightItalic'],
        'italic': ['Gilroy-Italic'],
        'xbold': ['Gilroy-XBold'],
        'xbold-italic': ['Gilroy-XBoldItalic'],
        'thin': ['Gilroy-Thin'],
        'thin-italic': ['Gilroy-ThinItalic'],
        'xlight': ['Gilroy-XLight'],
        'xlight-italic': ['Gilroy-XLightItalic'],
        'semi': ['Gilroy-Semi'],
        'semi-bold': ['Gilroy-SemiBold'],
        'semi-bold-italic': ['Gilroy-SemiBoldItalic'],
      },
    },
  }
}
