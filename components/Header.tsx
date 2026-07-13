import { View, Text, Image, TextInput } from "react-native"
import {styles} from "../styles/styles"
import { TouchableOpacity } from "react-native"
import SearchBar from "./SearchBar"
import { Ionicons } from "@expo/vector-icons"
import CardFiltro from "./CardFiltro"
import { useState } from "react"
import { ScrollView } from "react-native"




export default function Header() {
  const [filtroSelecionado, setFiltroSelecionado] = useState("Todos");
  return ( 
    <View style={styles.header}>
        <View style={styles.headercontainer}>
          <View style={styles.headerLocalizacao}>
          <Ionicons name="location" size={20} color="black" style={styles.iconHeaderLocal}/>
            <View style={styles.headerTextoLocalizacao}>
              <Text style={styles.textheaderTituloFonte}>Brasil</Text>
              <Text style={styles.textHeaderDescricao}>Rio de janeiro</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity>
            <Ionicons name="person-circle" size={50} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <SearchBar></SearchBar>
        <View style={styles.headerFiltroView}>
          <ScrollView horizontal={true} style={ [{width: "100%"}]} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 8, gap: 8}}>
            <CardFiltro titulo="Todos" selecionado={filtroSelecionado === "Todos"} onPress={() => setFiltroSelecionado("Todos")}></CardFiltro>
            <CardFiltro titulo="Montanhas" selecionado={filtroSelecionado === "Montanhas"} onPress={() => setFiltroSelecionado("Montanhas")}></CardFiltro>
            <CardFiltro titulo="Radical" selecionado={filtroSelecionado === "Radical"} onPress={() => setFiltroSelecionado("Radical")}></CardFiltro>
            <CardFiltro titulo="Cidade" selecionado={filtroSelecionado === "Cidade"} onPress={() => setFiltroSelecionado("Cidade")}></CardFiltro>
            <CardFiltro titulo="Natureza" selecionado={filtroSelecionado === "Natureza"} onPress={() => setFiltroSelecionado("Natureza")}></CardFiltro>
            <CardFiltro titulo="Aventura" selecionado={filtroSelecionado === "Aventura"} onPress={() => setFiltroSelecionado("Aventura")}></CardFiltro>
          </ScrollView>
        </View>
    </View>
  )
}

