import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from './components/Header';
import { styles } from './styles/styles';
import Footer from './components/Footer'
import Main from './components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <Text>eu so quero ver se vai dar certo</Text>
    </View>
  );
}


