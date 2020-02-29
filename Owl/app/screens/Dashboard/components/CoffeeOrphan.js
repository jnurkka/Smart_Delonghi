import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TileContainer, Tile, TileHeader, TileFont} from './Leaderboard';
import styled from 'styled-components';

const images = {
  espresso_single: require('../../../images/espresso_single.png'),
  espresso_double: require('../../../images/espresso_double.png'),
  coffee_single: require('../../../images/coffee_single.png'),
  coffee_double: require('../../../images/coffee_double.png'),
};

const OrphanCoffee = styled.TouchableOpacity`
  width: 33%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const CoffeeImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const CoffeeOrphan = () => {
  const [coffees, setCoffees] = useState([
    {type: 'coffee_double', id: '1', timestamp: '2020-02-29Z10:00:00'},
    {type: 'coffee_single', id: '2', timestamp: '2020-02-28Z10:00:00'},
    {type: 'espresso_single', id: '3', timestamp: '2020-03-22Z10:00:00'},
    {type: 'espresso_double', id: '4', timestamp: '2020-02-29Z12:00:00'},
    {type: 'espresso_single', id: '5', timestamp: '2020-02-21Z10:00:00'},
  ]);

  const handleAssignOrphanCoffee = id => {
    console.log('id', id);
    // TODO: Send to id with user to server
  };

  const getDateString = ts => {
    const timestamp = new Date(ts);
    return `${timestamp.getDate()}.${timestamp.getMonth()}.${timestamp.getFullYear()}, ${timestamp.getHours()}:${timestamp.getMinutes()}`;
  };

  const renderOrphanCoffees = () => {
    console.log('new Date().toString()', new Date().toUTCString());
    return coffees
      .sort((a, b) => (new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1))
      .map(coffee => {
        const {type, timestamp, id} = coffee;
        const pathToCoffeeImage = images[type];
        return (
          <OrphanCoffee
            key={coffee.id}
            onPress={() => handleAssignOrphanCoffee(id)}>
            <CoffeeImage
              alt={type}
              resizeMode="contain"
              source={pathToCoffeeImage}
            />
            <View>
              <TileFont>{type}</TileFont>
              <TileFont>{getDateString(timestamp)}</TileFont>
            </View>
          </OrphanCoffee>
        );
      });
  };
  return (
    <TileContainer>
      <Tile>
        <TileHeader>Coffee Orphanage</TileHeader>
        {renderOrphanCoffees()}
      </Tile>
    </TileContainer>
  );
};

export default CoffeeOrphan;
