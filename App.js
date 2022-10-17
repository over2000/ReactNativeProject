import Rotas from './src/rotas'
import { ThemeProvider } from './src/contexts/themeContext'
import { UserProvider } from './src/contexts/userContext'
import { ProductsProvider } from './src/contexts/productsContext'

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <ProductsProvider>
          <Rotas />
        </ProductsProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
