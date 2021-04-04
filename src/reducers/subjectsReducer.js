import AsyncStorage from '@react-native-async-storage/async-storage';
import { objectOf } from 'prop-types';
import * as Types from '../constants/ActionKeys';
import * as StorageKeys from '../constants/StorageKeys';


const INITIAL_STATE =  {
  
  // all_subjects: [
  //   'Literature',
  //   'Speech',
  //   'Writing',
  //   'Algebra',
  //   'Geometry',
  //   'Statistics',
  //   'Chemisrty',
  //   'Biology',
  //   'Physics',
  //   'Economics',
  //   'Geography',
  //   'History',
  // ],
  data: [],
};

const subjectsReducer =  (state = INITIAL_STATE, action) => {
 
  switch (action.type) {
    case Types.LOCAL_STORAGE: {
      return {
        data: [...state.data, ...action.item]
        }
      }
    case Types.ADD_ITEM: {
      console.log('dataasss', action.item);
      AsyncStorage.setItem(StorageKeys.USER_DATA, JSON.stringify([...state.data, action.item]));
      return  {
        data: [...state.data, action.item]
       
      }
      
      
    } 
    case Types.REMOVE_ITEM: {
      state.data.splice(action.index, 1);
      let setdatastore = state.data
      AsyncStorage.setItem(StorageKeys.USER_DATA, JSON.stringify(setdatastore))
      return  {
        data:  state.data
      }
    } 
    case Types.EDIT_ITEM: {
      console.log("updateok",);
      // AsyncStorage.setItem(StorageKeys.USER_DATA, JSON.stringify());  
      {
        let temp = state.data,
            index = action.index,
            oldItem = state.data.findIndex((em) => em.id=== action.index);
           let clonedItem = Object.freeze(({}, oldItem, action.item));
           const setdatastore = temp.slice(0, index).
           concat([clonedItem]).
           concat(temp.slice(index + 1))
           AsyncStorage.setItem(StorageKeys.USER_DATA, JSON.stringify(setdatastore))
        return ({}, state, {
            data: temp.slice(0, index).
                concat([clonedItem]).
                concat(temp.slice(index + 1)),
                     
                
        } );
      }
    } 
    default:
      return state
  }
};

export default subjectsReducer