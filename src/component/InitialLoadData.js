import React, {useState,useEffect, Component} from 'react';
import { connect } from 'react-redux';
import { addItemAction, removeItemAction, editItemAction, StorageAction } from '../actions/addItemAction';


const InitialLoadData = (props) => {
  useEffect(() => {
    props.StorageAction()
    console.log('chackinitialdata')
    },[])
    return null
}
  
const mapStateToProps = (state) => ({
    Local_data_list: state.subjectsReducer,
  });
  

const mapDispatchToProps = (dispatch) => ({
  StorageAction: () => dispatch(StorageAction()),
});

export default connect(mapStateToProps, mapDispatchToProps) (InitialLoadData);