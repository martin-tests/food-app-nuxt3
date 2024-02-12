import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    colors: {
      black: '#181818',
      gray: {
        200: '#f2f3f5',
        700: '#9e9e9e'
      },
      green: '#019c00',
      orange: '#ffca51',
      red: '#ff0626',
      white: '#ffffff'
    },
    extend: {
      maxWidth: {
        mob: '375px'
      }
    }
  },
}