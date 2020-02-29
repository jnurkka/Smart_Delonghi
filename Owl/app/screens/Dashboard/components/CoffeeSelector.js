import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Image, ScrollView } from 'react-native';

const small = 28;
const double = 46;

const Touchable = styled.TouchableOpacity.attrs(({
  activeOpacity: 0.9,
}))`
  justify-content: flex-end;
  align-items: center;
`;

const CoffeeAnimation = styled.View`
  border: 6px solid #C69C6D;
  background-color: #754C24;
  width: 200px;
  height: ${({ height }) => height}%;
  position: absolute;
  bottom: 50px;
`;

const CoffeeSelector = props => {
  const [amount, setAmount] = useState(5);
  let interval = React.useRef(null);

  const handlePressIn = () => {
    let coffeeInterval = amount;
    interval.current = setInterval(() => {
      if (coffeeInterval <= double) coffeeInterval += 2;
      setAmount(coffeeInterval)
    }, 100);
  }

  const handlePressOut = () => {
    if (amount > small && amount < double) {
      setAmount(small);
      console.log('make a coffe');
    };
    if (amount >= double) {
      setAmount(double);
      console.log('make a double coffe');
    };
    if (amount < small) {
      setAmount(7)
    }
    clearInterval(interval.current);
  }

  return (
    <ScrollView horizontal={true}>
      <Touchable onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <CoffeeAnimation height={amount} />
        <Image source={require('../../../images/coffee.png')} style={{width: '100%', height: 280 }} resizeMode="contain" />
      </Touchable>
    </ScrollView>
  )
}

CoffeeSelector.propTypes = {

}

export default CoffeeSelector;
