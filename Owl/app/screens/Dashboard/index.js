import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components';
import Leaderboard from './components/Leaderboard';
import CoffeeOrphan from './components/CoffeeOrphan';
import CoffeeSelector from './components/CoffeeSelector';

const VerticalSpace = styled.View`
  height: 10px;
`;

const Dashboard = () => {
  return (
    <ScrollView>
      <CoffeeSelector />
      <VerticalSpace />
      <Leaderboard></Leaderboard>
      <VerticalSpace />
      <CoffeeOrphan></CoffeeOrphan>
    </ScrollView>
  );
};

export default Dashboard;
