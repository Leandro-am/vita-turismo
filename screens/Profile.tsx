import { Ionicons } from "@expo/vector-icons";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { stylespf } from "../styles/profileStyle";
import CardProfile from "../components/CardProfile";




export default function Profile() {
    return(
        <View style={stylespf.container}>
            <View style={stylespf.containerProfile}>
                <Text style={stylespf.meuperfil}>Meu Perfil</Text>
                <View style={stylespf.viewProfile}>
                    <Ionicons name="person-circle-outline" size={70} color={"white"}></Ionicons>
                    <View style={stylespf.viewProfileTexts}>
                        <Text style={stylespf.nome}>Leandrico</Text>
                        <Text style={stylespf.email}>leandrico@gmail.com</Text>
                    </View>
                </View>
                <TouchableOpacity style={stylespf.botaoProfile}>
                    <Ionicons name="person" size={13} color={"white"}></Ionicons>
                    <Text style={stylespf.botaoProfileTexto}> Editar perfil</Text>
                    </TouchableOpacity>
            </View>

            <View style={stylespf.viewGostosDeViagem}>
                <Text style={stylespf.gostosDeViagemTexto}>Seus gostos de Viagem</Text>
                <Text style={stylespf.gostosDeViagemTextoPequeno}>Usamos isso para recomendar viagens que combinam com você.</Text>

                <View style={stylespf.viewCardsProfile}>
                    <CardProfile texto="Natureza" corTextoAoClicar="white" corTextoInicial="black" corInicial="white" corAoClicar="#118282"></CardProfile>
                    <CardProfile texto="Tranquilo" corTextoAoClicar="white" corTextoInicial="black" corInicial="white" corAoClicar="#5C5972"></CardProfile>
                    <CardProfile texto="Radical" corTextoAoClicar="white" corTextoInicial="black" corInicial="white" corAoClicar="#A8501F"></CardProfile>
                    <CardProfile texto="Pet Friendly" corTextoAoClicar="white" corTextoInicial="black" corInicial="white" corAoClicar="#009292"></CardProfile>
                    <CardProfile texto="Cidade" corTextoAoClicar="black" corTextoInicial="black" corInicial="white" corAoClicar="#BEBEBE"></CardProfile>
                    <CardProfile texto="Montanha" corTextoAoClicar="black" corTextoInicial="black" corInicial="white" corAoClicar="#E0B198"></CardProfile>
                </View>
            </View>
        </View>
    )
}