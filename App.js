import { Text, SafeAreaView, StyleSheet } from 'react-native';

import Home from './pages/Home/Home'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

});
