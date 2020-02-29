import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components';
import Leaderboard from './components/Leaderboard';
import CoffeeOrphan from './components/CoffeeOrphan';
import CoffeeSelector from './components/CoffeeSelector';

const Dashboard = () => {
  return (
    <ScrollView>
      <CoffeeSelector />
      <Leaderboard></Leaderboard>
      <CoffeeOrphan></CoffeeOrphan>
    </ScrollView>
  );
};

export default Dashboard;
