import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Image, ScrollView, Dimensions, View } from 'react-native';

import Cup from './Cup';
import coffeeImg from '../../../../images/coffee.png';
import espressoImg from '../../../../images/espresso.png';

const CoffeeSelector = () => {
  return (
    <View style={{ alignItems: 'center'}}>
      <View style={{ backgroundColor: '#9bcfe5', width: '95%', borderRadius: 20, paddingVertical: 15 }}>
        <ScrollView horizontal={true} snapToAlignment="center" pagingEnabled={true} showsHorizontalScrollIndicator={false}>
          <Cup source={coffeeImg} type="coffee" />
          <Cup source={espressoImg} type="espresso" />
        </ScrollView>
      </View>
    </View>
  )
}

CoffeeSelector.propTypes = {}

export default CoffeeSelector;
