import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TileContainer, Tile, TileHeader} from './Leaderboard';
import styled from 'styled-components';

const CoffeeGrid = styled.View`
  margin: 2%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const OrphanCoffee = styled.View`
  width: 33%;
  padding: 2%;

  border-radius: 2px;
  border: 1px;
`;

const CoffeeImage = styled.Image``;

const CoffeeOrphan = () => {
  const [coffees, setCoffees] = useState([
    {type: 'espresso'},
    {type: 'espresso'},
    {type: 'espresso'},
    {type: 'espresso'},
    {type: 'espresso'},
  ]);

  const renderOrphanCoffees = () => {
    return coffees.map(coffee => {
      const {type} = coffee;
      return (
        <OrphanCoffee>
          <Text>{coffee.type}</Text>
        </OrphanCoffee>
      );
    });
  };
  return (
    <TileContainer>
      <Tile>
        <TileHeader>Coffee Orphanage</TileHeader>
        <CoffeeGrid>{renderOrphanCoffees()}</CoffeeGrid>
      </Tile>
    </TileContainer>
  );
};

export default CoffeeOrphan;
