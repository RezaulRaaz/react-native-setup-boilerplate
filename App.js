import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'react-native'
import Tabs from './navigation/Tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './components/Drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// without Drawer Navigation
// const App = () => {
//   return (
//     <NavigationContainer>
//     <StatusBar
//       backgroundColor="#FFFFFF"
//       barStyle="dark-content"
//     />
//     <Stack.Navigator
//       // screenOptions={{
//       //   headerShown: false
//       // }}
//       initialRouteName={'Home'}
//     >
//       <Stack.Screen name="Home" options={{
//         headerShown: false, // change this to `false`
//       }} component={Tabs} />
//     </Stack.Navigator>
//   </NavigationContainer>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <Drawer.Navigator
        initialRouteName={'Home'}
        drawerContent={props=><DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={Tabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;