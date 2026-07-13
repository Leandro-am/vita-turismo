import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { ImageSourcePropType } from "react-native";


export default function CardMain ({titulo,descricao,Imagem,filtro} : propscardMain) {
    return(
        <View style={styles.mainCard}>
            <Image source={Imagem} style={styles.Imagem}></Image>
            <View style={styles.containerTextoCardMain}>
                <Text style={styles.TituloDoMainCard} >{titulo}</Text>
                <Text style={styles.descricaoDoMainCard} >{descricao}</Text>
            </View>
            <View style={styles.ContainerComprar}>
                <View style={[styles.flitroCardMain, {backgroundColor: filtro.cor}]}><Text>{filtro.nome}</Text></View>
                <TouchableOpacity style={styles.botaoComprarCardMain}><Text style={styles.botaoCardTexto}>Viajar</Text></TouchableOpacity>
            </View>
        </View>
    )
}

interface propscardMain {
    titulo : string
    descricao : string
    Imagem : ImageSourcePropType
    filtro: {
        nome: string
        cor : string
    }
}