import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components';
import Leaderboard from './components/Leaderboard';

const Dashboard = () => {
  return (
    <ScrollView>
      <Leaderboard></Leaderboard>
    </ScrollView>
  );
};

export default Dashboard;
