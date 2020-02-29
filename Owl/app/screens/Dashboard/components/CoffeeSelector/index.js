import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Image, ScrollView, Dimensions } from 'react-native';

import Cup from './Cup';
import coffeeImg from '../../../../images/coffee.png';
import espressoImg from '../../../../images/espresso.png';

const CoffeeSelector = () => {
  return (
    <ScrollView horizontal={true} snapToAlignment="center" pagingEnabled={true} showsHorizontalScrollIndicator={false}>
      <Cup source={coffeeImg} type="coffee" />
      <Cup source={espressoImg} type="espresso" />
    </ScrollView>
  )
}

CoffeeSelector.propTypes = {}

export default CoffeeSelector;
