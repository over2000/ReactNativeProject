import { StyleSheet } from 'react-native'

export const estilos = (theme) => {
  return StyleSheet.create({
    subtitulo: {
      fontSize: 18,
      fontWeight: '400',
      color: theme.texto,
      marginBottom: 20,
    },
    inputArea: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
}
