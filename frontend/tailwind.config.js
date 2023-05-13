/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontSize: {
        '7xl': '5rem', // Custom font size class
      },
      margin:{
        "100px":"150px"
      },
      colors:{
     
      }
    }
  },
  plugins: [],
}

