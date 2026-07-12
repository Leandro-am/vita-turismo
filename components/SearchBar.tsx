import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

export default function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchBarCorpo}>
        <Ionicons name="search" size={20} color="#777" />
        <TextInput
    
          style={styles.searchBarText}
          placeholder="Para onde vamos?"
          placeholderTextColor="#777"
        />
      </View>
    </View>
  );
}