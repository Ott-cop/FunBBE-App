import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';
import Home from './pages/Home/Home'
import BottomBarNavigation from './pages/BottomBarNavigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  useFonts({
    "Alegreya": require("./assets/Fonts/AlegreyaSans-Bold.ttf")
})
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <BottomBarNavigation />
      </NavigationContainer>   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
