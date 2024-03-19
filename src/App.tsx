import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { defaultTheme } from './styles/theme/default'
import { Outlet } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartProvider'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </ThemeProvider>
  )
}
