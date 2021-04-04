import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import { StyleSheet, Text, View,Button, TextInput, ImageBackground, Image, FlatList, TouchableOpacity, ScrollView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { addItemAction } from '../actions/addItemAction';
import { AntDesign, Entypo, Ionicons, Feather, EvilIcons } from '@expo/vector-icons';


const Search = (props) => {
 
    
    return (
      <ScrollView>
         <FlatList
        data={props.adname.subjectsReducer.data}
        // keyExtractor={item => item.id}
        renderItem = {({ item }) => (
          <View style={{flexDirection:'row'}}>
              <Text style={styles.t2} key={item.id}>{item.name}</Text>
              <TouchableOpacity>
                  <AntDesign name="delete" color='#3b2322' size={18} style={styles.icon} />
              </TouchableOpacity>
          </View>
        )}/> 
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
 contenar: {
  flex:1,
  justifyContent:'center',
  alignItems:'center'
 },
 t2: {
  marginTop:25,
  marginLeft:20,
  fontSize:18,
},
icon: {
  marginLeft: 10,
  marginTop:25,
  marginLeft:20,
  fontSize:18,
}
});

const mapStateToProps = (state) => ({
  subjectlist: state.subjectsReducer,
  adname: state
});

export default connect(mapStateToProps) (Search);