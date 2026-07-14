import { useState } from "react";
import { Pressable, Text } from "react-native";
import { stylespf } from "../styles/profileStyle";

interface CardProps {
    texto: string;
    corInicial: string;
    corAoClicar: string;
    corTextoInicial: string;
    corTextoAoClicar: string;
}

export default function CardProfile({
    texto,
    corInicial,
    corAoClicar,
    corTextoInicial,
    corTextoAoClicar,
}: CardProps) {

    const [selecionado, setSelecionado] = useState(false);

    return (
        <Pressable
            onPress={() => setSelecionado(!selecionado)}
            style={[
                stylespf.cardContainer,
                {
                    backgroundColor: selecionado
                        ? corAoClicar
                        : corInicial,
                },
            ]}
        >
            <Text style={[stylespf.cardTexto,{ color: selecionado ? corTextoAoClicar: corTextoInicial,},]}>
                {texto}
            </Text>
        </Pressable>
    );
}