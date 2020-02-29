import React, {useState} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import styled from 'styled-components';

const coffee_double = require('../../images/coffee_double.png');

const InputFieldContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const UserNameInput = styled.TextInput`
  width: 90%;
  height: 5%;
  background-color: white;
`;

const GreetingImage = styled.Image`
  width: 200px;
  height: 200px;
`;

const Login = ({ setUser }) => {
  const [userName, setUserName] = useState('');

  return (
    <InputFieldContainer>
      <GreetingImage source={coffee_double}></GreetingImage>
      <UserNameInput
        onChangeText={setUserName}
        value={userName}
        placeholder={'Namen eingeben'}/>
      <TouchableHighlight onPress={() => setUser(userName)}>
        <Text>Login</Text>
      </TouchableHighlight>
    </InputFieldContainer>
  );
};