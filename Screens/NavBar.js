
import { Text, Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Materials from "./Materials";
import Schedules from "./Schedules";
import Marks from "./Marks";
import Signout from "./Signout";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "black"
    
  }
};

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Materials"
          component={Materials}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <AntDesign name="book" size={24} color="white" />
                  <Text style={{ fontSize: 12, color: "white" }}>Materials</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Schedules"
          component={Schedules}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <MaterialIcons name="schedule" size={24} color="white" />
                  <Text style={{ fontSize: 12, color: "white" }}>Schedules</Text>
                </View>
              );
            },
          }}
        />
       
        
        <Tab.Screen
          name="Marks"
          component={Marks}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Foundation name="results" size={24} color="white" />
                  <Text style={{ fontSize: 12, color: "white" }}>Marks</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Signout"
          component={Signout}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <FontAwesome name="sign-out" size={24} color="white" />
                  <Text style={{ fontSize: 12, color: "white" }}>Sign-Out</Text>
                </View>
              );
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}