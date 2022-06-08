import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


// is this how you declare?
var Root = createNativeStackNavigator


export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name={"About"} component={About}/>
        <Root.Screen name={"Item Detail"} component={ItemDetail}/>
      </Root.Navigator>
     
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>

    </NavigationContainer>
    
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
