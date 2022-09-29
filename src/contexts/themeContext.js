import { createContext, useState } from 'react'
import { dark, light } from '../estilosGlobais'

export const ThemeContext = createContext({})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  const themes = {
    'dark': dark,
    'light': light,
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themeSelected: themes[theme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
