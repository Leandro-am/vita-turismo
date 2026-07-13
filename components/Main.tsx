import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from '../styles/styles'
import CardMain from './CardMain'

export default function Main() {
  return (
    <View style={styles.main}>
        <Text style= {styles.tituloMain}>Lugares Para Você</Text>
        <View style={styles.MainContainerCard}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 8, gap: 8}} >
            <CardMain titulo='Vulcão Osorno' descricao='Majestoso vulcão com vistas panorâmicas e trilhas de montanha.' Imagem={require('../images/vulcao.png')} filtro={{
              nome: "natureza",
              cor: "#E4EBE1"
            }}></CardMain>
            <CardMain titulo='Cristo Redentor' descricao='Uma das sete maravilhas do mundo, e está pertinho de você.' Imagem={require("../images/CristoRedentor.jpg")} filtro={{
              nome: "montanha",
              cor: "#FBE4D8"}}>
            </CardMain>
            <CardMain titulo='Fernando de Noronha' descricao='Um belo lugar para se visitar em família, e não esqueça do seu pet!' Imagem={require("../images/FernandoDeNoronha.jpeg")} filtro={{
              nome: "natureza",
              cor: "#E4EBE1"}}>
            </CardMain>
            <CardMain titulo='Lençois Maranhenses' descricao='Dunas impressionantes e lagoas naturais que formam um cenário único.' Imagem={require("../images/fozDoIguacu.webp")} filtro={{
              nome: "natureza",
              cor: "#E4EBE1"}}>
            </CardMain>
            <CardMain titulo='Jericoara' descricao='Praias, dunas e um dos pores do sol mais bonitos do Brasil.' Imagem={require("../images/jericoara.jpg")} filtro={{
              nome: "natureza",
              cor: "#E4EBE1"}}>
            </CardMain>
            <CardMain titulo='Santorini' descricao='Casas brancas, mar azul e um dos destinos mais românticos do mundo.' Imagem={require("../images/Santorini.jpg")} filtro={{
              nome: "cidade",
              cor: "#DBDBDB"}}>
            </CardMain>
            <CardMain titulo='Machu Picchu' descricao='Uma viagem inesquecível pela história inca em meio aos Andes.' Imagem={require("../images/machuPichu.webp")} filtro={{
              nome: "montanha",
              cor: "#FBE4D8"}}>
            </CardMain>
          </ScrollView>
        </View>
    </View>
  )
}
