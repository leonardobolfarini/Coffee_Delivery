import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.tsx'
import { CartContextProvider } from './contexts/CartContextProvider.tsx'


export function App() {
  return(
    <ThemeProvider  theme={defaultTheme}>
        <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
