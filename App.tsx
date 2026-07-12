import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from './components/Header';
import { styles } from './styles/styles';
import Main from './components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Header></Header>
      </View>
      <Main></Main>
    </View>
  );

}




