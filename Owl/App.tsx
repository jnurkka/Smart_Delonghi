/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import Dashboard from './app/screens/Dashboard';
import { SafeAreaView } from 'react-native';
import Login from './app/screens/Login';
import styled from 'styled-components';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    if (user) setLoggedIn(true);
    else setLoggedIn(false);
  }, [user]);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#239CCE', minHeight: '100%' }}>
        {loggedIn ? <Dashboard /> : <Login setUser={setUser} />}
      </SafeAreaView>
    </>
  );
};

export default App;
