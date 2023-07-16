import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Inter', sans-serif`
  },
  colors: {
    light: '#f0f0f0',
    dark: '#050609',
    detail: '#cc000e'
  }
})

export default theme