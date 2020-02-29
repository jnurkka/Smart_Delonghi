import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components';
import Leaderboard from './components/Leaderboard';
import CoffeeOrphan from './components/CoffeeOrphan';
import CoffeeSelector from './components/CoffeeSelector';

const Heading = styled.Text`
  font-size: 60px;
  color: white;
  margin: 5%;
`;

const Dashboard = () => {
  const getUserName = () => {
    // TODO: Get from server
    return 'Jovan';
  };

  return (
    <ScrollView>
      <Heading>Need a kick, {getUserName()}?</Heading>
      <CoffeeSelector />
      <Leaderboard></Leaderboard>
      <CoffeeOrphan></CoffeeOrphan>
    </ScrollView>
  );
};

export default Dashboard;
