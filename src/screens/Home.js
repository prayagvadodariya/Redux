import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import { StyleSheet, Text, View,Button, TextInput, ImageBackground, Image, FlatList, TouchableOpacity, ScrollView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { addItemAction, removeItemAction, editItemAction, StorageAction } from '../actions/addItemAction';
import { AntDesign, Entypo, Ionicons, Feather, EvilIcons } from '@expo/vector-icons';

const Home = (props) => {
  // props.StorageAction();
 
  const [text, setAddData] = React.useState('')
  const [text1,setEditData] = React.useState()
  const [id, setEditIndex] = React.useState()
  const [index, setArrayIndex] = React.useState('')
  const [active, setActive] = useState(true);
  // console.log('additem: ',demoname);
// const data = useState(props) 

const Addnew = () => {
  const listItem = {
    id: String(Date.now()),
    name: text,
  }
  props.addItemAction(listItem);
}

const RemoveItem = (index) => {
  console.log("delete",index);
  props.removeItemAction(index);
}

const EditItem = (edit) => {
  setActive(false);
  setArrayIndex(edit.index)
  setEditIndex(edit.item.id)
  setEditData(edit.item.name)
}

 const UpdateItem = () =>{
  setActive(true);

  var arrayid =  index.toString();
  const updateItem = {
    id: id,
    name: text1,
  }
  props.editItemAction(updateItem,arrayid);
  console.log("idokokko",arrayid);
 }

//  const press = () => {
//    props.StorageAction();
//  }
    
    return (
      <ScrollView>
     
         {active ? 
           <View>
          <Text style={styles.contenar}>Enter Data</Text>
          <TextInput style={styles.inputbox}
          placeholder='Enater name'
          onChangeText={setAddData}
          value={text} />
          <TouchableOpacity style={styles.button} onPress={Addnew} >
            <View  style={styles.t1}><Text >Add</Text></View>
          </TouchableOpacity>
          </View> 
          :null }


          {!active ? 
           <View>
          <Text style={styles.contenar}>Edit Data</Text>
          <TextInput style={styles.inputbox}
          placeholder='Enater name'
          onChangeText={setEditData}
          value={text1} />
          <TouchableOpacity style={styles.button} onPress={() => UpdateItem({active:true})} >
            <View  style={styles.t1}><Text >Edit</Text></View>
          </TouchableOpacity>
          </View> 
          :null }
         
          
        
     


      <FlatList
        extraData ={props.adname.subjectsReducer}
        data={props.adname.subjectsReducer.data}
        renderItem = {({ item, index }) => (
          <View style={{flexDirection:'row'}}>
              <Text style={styles.t2} >{item.name}</Text>
              <TouchableOpacity  onPress={() => RemoveItem(index)} >
                  <AntDesign name="delete" color='#3b2322' size={18} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => EditItem({item, index,active:false})}>
                  <AntDesign name="edit" color='#3b2322' size={18} style={styles.icon} />
              </TouchableOpacity>
          </View>
        )}/> 
        {/* <TouchableOpacity onPress={() => press()}>
                  <AntDesign name="edit" color='#3b2322' size={18} style={styles.icon} />
              </TouchableOpacity> */}
      </ScrollView>

    );
  }


const styles = StyleSheet.create({
 contenar: {
   textAlign:'center',
   marginTop:25,
 },
 inputbox: {
   borderColor:'gray',
   borderWidth:1.2,
   borderRadius:10,
   height:50,
   marginTop:15,
   marginLeft:15,
   marginRight:15
 },
 button: {
  borderColor:'gray',
  borderWidth:1.2,
  borderRadius:28,
   height:50,
   marginTop:10,
   marginLeft:55,
   marginRight:55, 
 },
 t1:{
   flex:1,
   alignContent:'center',
   alignItems:'center',
   justifyContent:'center'
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

const mapDispatchToProps = (dispatch) => ({
  addItemAction: (listItem) => dispatch(addItemAction(listItem)),
  removeItemAction: (Id) => dispatch(removeItemAction(Id)),
  editItemAction: (updateItem, arrayid) => dispatch(editItemAction(updateItem, arrayid)),
  // StorageAction: () => dispatch(StorageAction()),
});

export default connect(mapStateToProps, mapDispatchToProps) (Home);