import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import { UserContext } from '../../contexts/userContext'
import { Produto } from '../../componentes/Produto'
import { produtos } from './produtos'
import { estilos } from './estilos'
import { Feather } from 'react-native-vector-icons'
import Configuracao from '../Configuracao'

export default function Principal({ navigation }) {
  const ultimosVistos = []

  const { themeSelected } = useContext(ThemeContext)
  const estilo = estilos(themeSelected)

  const { user } = useContext(UserContext)

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.tituloArea}>
        <Text style={estilo.titulo}>Olá, {user?.name}</Text>
        <View style={estilo.carrinhoArea}>
          <TouchableOpacity onPress={() => {}}>
            <Feather
              name='shopping-cart'
              size={30}
              color='#fff'
              style={estilo.carrinhoIcon}
            />
          </TouchableOpacity>
          <View style={estilo.carrinhoQuantidadeArea}>
            <Text style={estilo.carrinhoQuantidade}>0</Text>
          </View>
          <TouchableOpacity style={estilo.iconArea}>
            <Configuracao
              name='settings'
              size={30}
              color='#fff'
              style={estilo.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => Math.random()}
        renderItem={({ item }) => <Produto item={item} adicionar={true} />}
        style={estilo.lista}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            {ultimosVistos.length > 0 && (
              <View style={estilo.ultimosVistos}>
                <Text style={estilo.tituloUltimosVistos}>Últimos vistos</Text>
                <FlatList
                  data={ultimosVistos}
                  keyExtractor={(item) => Math.random()}
                  renderItem={({ item }) => (
                    <Produto item={item} adicionar={false} />
                  )}
                  style={estilo.lista}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            )}
            <Text style={[estilo.titulo, { paddingLeft: 16 }]}>Produtos</Text>
          </View>
        )}
      />
    </View>
  )
}
