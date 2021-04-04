import React from 'react';
import {Button, Image, View, TouchableOpacity} from 'react-native';
import {NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign, Entypo, Ionicons, Feather, EvilIcons } from '@expo/vector-icons';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';


const initialState = {};
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
    return true
  };

 
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Entypo name="menu" color='#3b2322' size={26} style={{ marginLeft: 10}} />
      </TouchableOpacity>
     
    </View>
  );
};

const BackActionButton = (props) => {
  const Back = () => {
    //Props to open/close the drawer
    props.navigationProps.goBack()
    
  };

  return(
    <TouchableOpacity >
        <Ionicons  onPress={() => Back()} name="chevron-back" color='#3b2322' size={26} style={{ marginLeft: 10}} />
    </TouchableOpacity>
  )
}



const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Search':
      return 'Search';
  }
};

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor:"#3b2322",
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#ffffff',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={26} />)
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" color={color} size={26} />)
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreenStack = ({navigation}) => {

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="BottomTabtack"
        component={BottomTabStack}
        options={({route, navigation}) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          // headerRight: () => (
          //   <View style={{flexDirection: 'row'}}> 
          //     <TouchableOpacity style={{paddingRight:18}} >
          //         <AntDesign name="user" color='#3b2322' size={26} onPress={ () => navigation.navigate('ScreenStack', { screen: 'Account' })}/>
          //     </TouchableOpacity>
          //     <TouchableOpacity style={{paddingRight:8}}  >
          //         <AntDesign name="shoppingcart" color='#3b2322' size={26} onPress={ () => navigation.navigate('ScreenStack', { screen: 'Cart' })}/>
          //     </TouchableOpacity>
            
          //   </View>  
          // ),
          headerStyle: {
            backgroundColor: '#ffffff', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            color: "#3b2322",
            textAlign:"center" //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};



const Router = () => {
    return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreenStack"
        drawerContentOptions={{
          activeTintColor: '#3b2322',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{drawerLabel: 'Home'}}
          component={HomeScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    );
  };
export default Router;