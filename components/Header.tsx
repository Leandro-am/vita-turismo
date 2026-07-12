import { View, Text, Image, TextInput } from "react-native"
import {styles} from "../styles/styles"
import { TouchableOpacity } from "react-native"
import SearchBar from "./SearchBar"
import { Ionicons } from "@expo/vector-icons"

export default function Header() {
  return (
    <View style={styles.header}>
        <div style={styles.headercontainer}>
          <div style={styles.headerLocalizacao}>
          <Ionicons name="location" size={20} color="black" />
            <div style={styles.headerTextoLocalizacao}>
              <Text><strong>Brasil</strong></Text>
              <Text>Rio de janeiro</Text>
            </div>
          </div>
          <div>
            <TouchableOpacity>
            <Ionicons name="home" size={40} color="black" />
            </TouchableOpacity>
          </div>
        </div>
        <SearchBar></SearchBar>
        
    </View>
  )
}
