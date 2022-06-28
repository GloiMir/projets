//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from './front/accueil'
import Fenetre from './front/fenetres'

export default function App() {
  return (
    <Fenetre />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
