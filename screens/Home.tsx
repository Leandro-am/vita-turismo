import { Pressable, View, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import { styles } from "../styles/styles";
import Main from "../components/Main";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home( {navigation} : Props) {
    return(
        <View style={styles.container}>
            <Header></Header>
            <Main></Main>
        </View>
    )
}