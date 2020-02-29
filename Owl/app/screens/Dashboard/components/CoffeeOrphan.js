import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TileContainer, Tile, TileHeader} from './Leaderboard';
import styled from 'styled-components';

const images = {
  espresso_single: require('../../../images/espresso_single.png'),
  espresso_double: require('../../../images/espresso_double.png'),
  coffee_single: require('../../../images/coffee_single.png'),
  coffee_double: require('../../../images/coffee_double.png'),
};

const OrphanCoffee = styled.TouchableOpacity`
  width: 33%;
  border: 1px;
  justify-content: center;
  align-items: center;
`;

const CoffeeImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const CoffeeOrphan = () => {
  const [coffees, setCoffees] = useState([
    {type: 'coffee_double', id: '1'},
    {type: 'coffee_single', id: '2'},
    {type: 'espresso_single', id: '3'},
    {type: 'espresso_double', id: '4'},
    {type: 'espresso_single', id: '5'},
  ]);

  const assignOrphanCoffee = id => {
    console.log('id', id);
    // TODO: Send to id with user to server
  };

  const renderOrphanCoffees = () => {
    return coffees.map(coffee => {
      const {type} = coffee;
      const pathToCoffeeImage = images[type];
      return (
        <OrphanCoffee key={coffee.id} onPress={() => assignOrphanCoffee(type)}>
          <CoffeeImage
            alt={type}
            resizeMode="contain"
            source={pathToCoffeeImage}></CoffeeImage>
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
