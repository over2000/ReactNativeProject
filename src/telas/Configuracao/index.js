import { Text, View, Switch } from 'react-native'
import { estilos } from './estilos'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext'

export default function Configuracao({ navigation }) {
  const { theme, setTheme, themeSelected } = useContext(ThemeContext)

  const estilo = estilos(themeSelected)

  return (
    <View style={estilo.inputArea}>
      <Switch
        onValueChange={() =>
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        }
        value={theme === 'dark' ? true : false}
      />
    </View>
  )
}
