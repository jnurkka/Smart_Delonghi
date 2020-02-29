import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const UserTable = styled.View`
  background-color: grey;
  flex: 1;
`;

const UserItem = styled.View`
  border: 5px;
`;

const Leaderboard = () => {
  //   TODO: Get from Redux
  const [users, setUsers] = useState([
    {name: 'Jovan', score: 10},
    {name: 'Miri', score: 20},
    {name: 'Julian', score: 9000},
  ]);

  const renderUsers = () => {
    console.log('users', users);
    return users.map(user => (
      <UserItem>
        <Text>{user.name}</Text>
        <Text>{user.score}</Text>
      </UserItem>
    ));
  };

  return <UserTable>{renderUsers()}</UserTable>;
};

export default Leaderboard;
