import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootStackParamList } from './types/navigation';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { Ionicons } from '@expo/vector-icons';

const tab = createBottomTabNavigator<RootStackParamList>();

export default function App() {

  return (
    <NavigationContainer>
      <tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
          headerShown: false,

          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === "Home") {
              iconName = "home";
            } else {
              iconName = "person-circle";
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarStyle: {
            height: 50,
            backgroundColor: "#045858"
          },

          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        })}>
        <tab.Screen name='Home' component={Home}>
        </tab.Screen>
        <tab.Screen name='Profile' component={Profile}>
        </tab.Screen>
      </tab.Navigator>
      
    </NavigationContainer>
  );
}






