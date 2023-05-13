import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./Screens/Login";
import NavBar from "./Screens/NavBar";
const Stack = createNativeStackNavigator () ;


export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Login"component= {Login}/>
  <Stack.Screen name="Home" component= {NavBar}/>
</Stack.Navigator>
</NavigationContainer>
      
   
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
