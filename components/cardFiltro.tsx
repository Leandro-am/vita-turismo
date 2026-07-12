import { Pressable, Text } from "react-native";
import { styles } from "../styles/styles";

interface CardFiltroProps {
  titulo: string;
  selecionado: boolean;
  onPress: () => void;
}

export default function CardFiltro({
  titulo,
  selecionado,
  onPress,
}: CardFiltroProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.cardFiltro,
        selecionado && styles.cardFiltroSelecionado,
      ]}
    >
      <Text
        style={[
          styles.cardFiltroTexto,
          selecionado && styles.cardFiltroTextoSelecionado,
        ]}
      >
        {titulo}
      </Text>
    </Pressable>
  );
}