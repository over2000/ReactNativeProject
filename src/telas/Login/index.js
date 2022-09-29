import { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import { estilos } from './estilos'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const { themeSelected } = useContext(ThemeContext)

  const estilo = estilos(themeSelected)

  return (
    <View style={estilo.container}>
      <StatusBar />
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
        />
      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => navigation.navigate('Principal')}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}
