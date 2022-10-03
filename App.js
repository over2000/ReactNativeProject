import Rotas from './src/rotas'
import { ThemeProvider } from './src/contexts/themeContext'
import { UserProvider } from './src/contexts/userContext'

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Rotas />
      </UserProvider>
    </ThemeProvider>
  )
}
