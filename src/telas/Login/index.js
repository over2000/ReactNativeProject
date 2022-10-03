import { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native'
import { estilos } from './estilos'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import { UserContext } from '../../contexts/userContext'
import Configuracao from '../Configuracao'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const { themeSelected } = useContext(ThemeContext)
  const estilo = estilos(themeSelected)

  const { login } = useContext(UserContext)

  function logIn() {
    const res = login(email, senha)
    if (res === 'ok') {
      navigation.navigate('Principal')
    } else {
      Alert.alert(res)
    }
  }

  return (
    <View style={estilo.container}>
      <StatusBar />
      <TouchableOpacity style={estilo.iconArea}>
        <Configuracao
          name='settings'
          size={30}
          color='#fff'
          style={estilo.icon}
        />
      </TouchableOpacity>
      <Text style={estilo.titulo}>Login</Text>

      <View style={estilo.inputArea}>
        <TextInput
          style={estilo.input}
          placeholder='Email'
          placeholderTextColor='#999'
          autoCapitalize='none'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={estilo.input}
          placeholder='Senha'
          placeholderTextColor='#999'
          autoCapitalize='none'
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={estilo.botao} onPress={() => logIn()}>
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}
