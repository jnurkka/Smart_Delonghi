import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

export const TileContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const Tile = styled.View`
  border-radius: 20px;
  width: 97%;
  background-color: #9bcfe5;
`;

export const TileHeader = styled.Text`
  font-weight: 700;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const UserTable = styled.View`
  margin: 2%;
`;

const Podium = styled.View`
  flex: 1;
  align-items: center;
`;

const UserTableItem = styled.View`
  border: 1px;
  justify-content: space-between;
  flex-direction: row;
`;

const UserTableItemText = styled.Text``;
const UserTableHeader = styled(UserTableItemText)`
  font-weight: 700;
`;

const Leaderboard = () => {
  //   TODO: Get from Redux
  const [users, setUsers] = useState([
    {name: 'Jovan', score: 10},
    {name: 'Miri', score: 20},
    {name: 'Julian', score: 9000},
  ]);

  const renderPodium = () => {
    // Get first 3 users sorted by score
    const topThree = users
      .sort((a, b) => (a.score > b.score ? -1 : 1))
      .slice(0, 2);
    return (
      <Podium>
        <View></View>
        <View></View>
        <View></View>
      </Podium>
    );
  };

  const renderUsers = () => {
    console.log('users', users);
    return users
      .sort((a, b) => (a.score > b.score ? -1 : 1))
      .map(user => (
        <UserTableItem>
          <Text>{user.name}</Text>
          <Text>{user.score}</Text>
        </UserTableItem>
      ));
  };

  return (
    <TileContainer>
      <Tile>
        <TileHeader>Coffee-Junkies @ Cliniserve</TileHeader>
        <UserTable>
          <UserTableItem>
            <UserTableHeader>Name</UserTableHeader>
            <UserTableHeader>Score</UserTableHeader>
          </UserTableItem>
          {renderUsers()}
        </UserTable>
      </Tile>
    </TileContainer>
  );
};

export default Leaderboard;
