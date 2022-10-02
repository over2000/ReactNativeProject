import Rotas from './src/rotas'
import { ThemeProvider } from './src/contexts/themeContext'

export default function App() {
  return (
    <ThemeProvider>
      <Rotas />
    </ThemeProvider>
  )
}
