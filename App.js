// In App.js in a new project

import  React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login'
// import Details from './src/screens/Details';
// import Setting from './src/screens/Setting';
import Bottom from './src/Bottom';
import { CartProvider } from './src/Context/cartContext';


const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const App = () => {
// function Bottom() {
//   return (
//     <Tab.Navigator screenOptions={{
//       headerShown:true,
//     }}>
//       <Tab.Screen name="Home" component={Home} options={{tabBarShowLable:true}} />
//       <Tab.Screen name="Details" component={Details} />
//       <Tab.Screen name="Setting" component={Setting} />
//     </Tab.Navigator>
    
//   );
  

  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      <CartProvider>
       <Stack.Navigator initialRouteName = 'Login' >
      
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> 
        <Stack.Screen name="Bottom" component={Bottom} options={{headerShown: false}} />
        
          {/* <Stack.Screen name="Settings" component={Setting} options={{headerShown: false}}  />  */}
         {/* <Stack.Screen name="Detailss" component={Details} options={{headerShown: false}}  />   */}
      </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );

}
export default App;