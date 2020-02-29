import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

export const TileContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const Tile = styled.View`
  border-radius: 20px;
  width: 95%;
  background-color: #9bcfe5;
  margin-bottom: 2%;
`;

export const TileHeader = styled.Text`
  font-weight: 700;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 20px;
  color: #5d4037;
`;

export const TileFont = styled.Text`
  font-size: 17px;
  color: #5d4037;
`;

const UserTable = styled.View`
  margin: 2%;
`;

const Podium = styled.View`
  flex: 1;
  align-items: center;
`;

const UserTableItem = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

const CoffeeBean = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 7px;
`;

const UserImg = styled.Image`
  border-radius: 100px;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Leaderboard = () => {
  //   TODO: Get from Redux
  const [users, setUsers] = useState([
    {id: '1', name: 'Jovan', score: 10},
    {id: '2', name: 'Miri', score: 20},
    {id: '3', name: 'Julian', score: 9000},
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
    return users
      .sort((a, b) => (a.score > b.score ? -1 : 1))
      .map(user => (
        <UserTableItem key={users.id}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <UserImg source={require('../../../images/bean.png')}></UserImg>
            <TileFont>{user.name}</TileFont>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TileFont>{user.score}</TileFont>
            <CoffeeBean source={require('../../../images/bean.png')} />
          </View>
        </UserTableItem>
      ));
  };

  return (
    <TileContainer>
      <Tile>
        <TileHeader>Coffee-Junkies @ Cliniserve</TileHeader>
        <UserTable>{renderUsers()}</UserTable>
      </Tile>
    </TileContainer>
  );
};

export default Leaderboard;
