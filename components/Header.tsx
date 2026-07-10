import { View, Text } from "react-native"
import {styles} from "../styles/styles"
import { TouchableOpacity } from "react-native"

export default function Header() {
  return (
    <View style={styles.header}>
        <div>
          <div>
            <Text>Brasil</Text>
            <Text>Rio de janeiro</Text>
          </div>
          <TouchableOpacity>aqui vai ficar um tsx do usuario</TouchableOpacity>
          <Text>nao sei como fazer ainda mas vai ter um filtro aqui</Text>
        </div>

        <div>
          <label htmlFor="" aria-placeholder="Para onde vamos?">a label é esse texto aqui</label>
        </div>
    </View>
  )
}
