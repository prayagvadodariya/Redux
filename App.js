import { StatusBar } from 'expo-status-bar';
import React,  {Component}  from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import InitialLoadData from './src/component/InitialLoadData';
import configureStore from './src/store/configureStore'
// import { useFonts } from 'expo-font';

const initialState = {};
const store = configureStore(initialState);

export default function App() {
    // const [loaded] = useFonts({
    // Roboto: require('./fonts/CHESTER-basic.ttf'),
    // net: require('./fonts/DustWest.ttf'),
    // about: require('./fonts/PTSans-Regular.ttf'),
    // text1: require('./fonts/Catamaran-Regular.ttf'),
    // text2: require('./fonts/DustWest.ttf'),
    // Helvetica: require('./fonts/Helvetica.ttf'),
    // });
    
    // if (!loaded) {
    //   return null;
    // }
  
    return (
      <Provider store={store}>
      <InitialLoadData/>
      <Router/>
      </Provider>
    );
  }


// const App = () => <Router />;

// export default App;
    


