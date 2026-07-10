import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/styles'

export default function Main() {
  return (
    <View style={styles.main}>
        <Text>texto escrito (lugares para voce)</Text>
        <div>
          <Text>aqui vão ter os cards das indicações de viagens</Text>
          <Text>navbar nao esquecer da navbar</Text>
        </div>
    </View>
  )
}
