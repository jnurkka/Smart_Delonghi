import React from 'react';
import {View, Text} from 'react-native';

const Leaderboard = () => {
  //   TODO: Get from Redux
  const [users, setUsers] = useState([
    {name: 'Jovan', score: 10},
    {name: 'Miri', score: 20},
    {name: 'Julian', score: 9000},
  ]);

  const renderUsers = () => {
    users.map(user => {
      <View>
        <Text>{user.name}</Text>
        <Text>{user.score}</Text>
      </View>;
    });
  };

  return <View>{renderUsers}</View>;
};

export default Leaderboard;
