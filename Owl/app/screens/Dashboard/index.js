import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components';
import Leaderboard from './components/Leaderboard';
import CoffeeSelector from './components/CoffeeSelector';

const Dashboard = () => {
  return (
    <ScrollView>
      <CoffeeSelector />
      <Leaderboard></Leaderboard>
    </ScrollView>
  );
};

export default Dashboard;
