/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**.{html,js,jsx}"],
  mode:'jit',
  theme: {
    extend: {},
    colors:{
      white:'#FFFF',
      blackblue:'#061c1c',
      mdAquamarine:'#61E0A7',
      skyblue:'#61D9E0',
      azureishWhite:'#DCF0F1',
      chineeseBlack:'#061C1C',
      textBlack:'#192D2D',
      black:'#000000'
    }  
  },
  plugins: [],
}
