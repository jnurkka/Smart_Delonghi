/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import Dashboard from './app/screens/Dashboard';
import {SafeAreaView} from 'react-native';
import Login from './app/screens/Login';
import styled from 'styled-components';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#239CCE', minHeight: '100%'}}>
        {loggedIn ? <Dashboard /> : <Login />}
      </SafeAreaView>
    </>
  );
};

export default App;
