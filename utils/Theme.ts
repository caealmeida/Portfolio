import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Inter', sans-serif`
  },
  colors: {
    light: '#f5f5f5',
    dark: '#050609'
  }
})

export default theme