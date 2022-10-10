import { StyleSheet } from 'react-native'

export const estilos = (theme) => {
  return StyleSheet.create({
    container: {
      fontFamily: 'Mitr-Light',
      flex: 1,
      backgroundColor: theme.fundo,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontFamily: 'Mitr-Light',
      fontSize: 25,
      color: theme.texto,
      marginBottom: 20,
    },
    inputArea: {
      fontFamily: 'Mitr-Light',
      height: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      fontFamily: 'Mitr-Light',
      height: 40,
      width: '90%',
      backgroundColor: theme.input,
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
      color: theme.preto,
    },
    botao: {
      height: 40,
      width: 100,
      backgroundColor: theme.botao,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
    botaoTexto: {
      fontFamily: 'Mitr-Light',
      fontSize: 18,
      fontWeight: '400',
      color: theme.preto,
    },
  })
}
