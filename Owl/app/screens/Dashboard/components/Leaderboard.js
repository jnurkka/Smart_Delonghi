import React, {useState} from 'react';
import {View, Text, fet} from 'react-native';
import styled from 'styled-components';

const images = {
  bean: require('../../../images/bean.png'),
  podium: require('../../../images/podium.png'),
};

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

const PodiumContainer = styled.View`
  justify-content: center;
  flex-direction: row;
`;

const PodiumImg = styled.Image`
  width: 70%;
  height: 200px;
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

const query = `
    {
      users {
        id,
        name,
      }
    }
  `;

const Leaderboard = () => {
  //   TODO: Get from Redux
  const [users, setUsers] = useState([
    {id: '1', name: 'Jovan', score: 10},
    {id: '2', name: 'Miri', score: 20},
    {id: '3', name: 'Julian', score: 9000},
  ]);

  fetch('http://192.168.24.116:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({query: query})
  }).then(r => r.json()).then(data => console.log('data returned:', data));

  const renderPodium = () => {
    // Get first 3 users sorted by score
    const topThree = users
      .sort((a, b) => (a.score > b.score ? -1 : 1))
      .slice(0, 2);
    return (
      <PodiumContainer>
        <PodiumImg resizeMode="contain" source={images['podium']}></PodiumImg>
      </PodiumContainer>
    );
  };

  const renderUsers = () => {
    return users
      .sort((a, b) => (a.score > b.score ? -1 : 1))
      .map(user => (
        <UserTableItem key={users.id}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <UserImg source={images['bean']}></UserImg>
            <TileFont>{user.name}</TileFont>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TileFont>{user.score}</TileFont>
            <CoffeeBean source={images['bean']} />
          </View>
        </UserTableItem>
      ));
  };

  return (
    <TileContainer>
      <Tile>
        <TileHeader>Coffee-Junkies @ Cliniserve</TileHeader>
        {renderPodium()}
        <UserTable>{renderUsers()}</UserTable>
      </Tile>
    </TileContainer>
  );
};

export default Leaderboard;
