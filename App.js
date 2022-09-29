import Rotas from './src/rotas'
import { InfoProvider } from './src/contexts/globalContext'
import { ThemeProvider } from './src/contexts/themeContext'

export default function App() {
  return (
    <ThemeProvider>
      <Rotas />
    </ThemeProvider>
  )
}
