module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Adjust this to match your file structure
  theme: {
    extend: {
      colors: {
        background: '#F3EBDC',
        textColor: '#F43127',
        bgColor: '#F3F3F3',
        borderColor: '#E9E9E9',
        active: '#F2F8FD',
        addToCart: '#FE9900',
      },
      fontSize: {
        // Custom font sizes
        'xxs': 'clamp(50px, 5.5vw, 90px)', // 10px
        "fontX": "clamp(10px, 10vw, 60px)",
        "fontY": "clamp(0px, 6vw, 60px)",
      },
      gap: {
        'gap1': 'clamp(1px, 1.5vw, 35px)',
      },
      left: {
        'leaves': '5rem',
      },
      theme: {
        extend: {
          animation: {
            'move-left-right': 'moveLeftRight 3s ease-in-out infinite',
          },
          keyframes: {
            moveLeftRight: {
              '0%, 100%': { transform: 'translateX(0)' },
              '50%': { transform: 'translateX(10px)' },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
