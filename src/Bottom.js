import { View, Text, Settings } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Login from './screens/Login';
import Search from './screens/Search';
import Home from './screens/Home';
import Detail from './screens/Detail';
import Cart from './screens/Cart';





export default function Bottom() {
  return (

    
    
          <Tab.Navigator>

<Tab.Screen name="Home" component={Home}
                    options={{headerShown: false , tabBarIcon:(props) =>
                     <AntDesign name='home' size={25} color="gray"/>}}/> 

                 <Tab.Screen name="Search" component={Search}
                  options={{headerShown: false ,  tabBarIcon:(props) =>
                    <AntDesign name='search1' size={25} color="gray"/>}}
                 />
            <Tab.Screen name="Login" component={Login}
             options={{headerShown: false ,  tabBarIcon:(props) =>
                 <AntDesign name='login' size={25} color="gray"/>}}
             />

            <Tab.Screen name="Detail" component={Detail}
             options={{headerShown: false ,  tabBarIcon:(props) =>
                 <FontAwesome name='th-large' size={25} color="gray"/>}}
             />
             <Tab.Screen name="Cart" component={Cart}
             options={{headerShown: false ,  tabBarIcon:(props) =>
              <AntDesign  name='shoppingcart' size={25} color='gray'/>}}
             />
            
           
          </Tab.Navigator>
        );
      }
