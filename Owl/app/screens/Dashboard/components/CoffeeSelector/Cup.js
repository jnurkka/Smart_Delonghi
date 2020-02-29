import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Image, ScrollView, Dimensions } from 'react-native';

const Touchable = styled.TouchableOpacity.attrs(({
  activeOpacity: 0.9,
}))`
  justify-content: flex-end;
  align-items: center;
  width: ${Dimensions.get('window').width * 0.95}px;
`;

const CoffeeAnimation = styled.View`
  border: 6px solid #C69C6D;
  background-color: #754C24;
  width: 60%;
  height: ${({ height }) => height}%;
  position: absolute;
  bottom: 45px;
`;

const Cup = ({ source, type }) => {
  const defaultAmount = 0;
  const [amount, setAmount] = useState(defaultAmount);
  let interval = React.useRef(null);

  const small = type === 'coffee' ? 31 : 28;
  const double = type === 'coffee' ? 51 : 48;

  const handlePressIn = () => {
    let coffeeInterval = amount;
    interval.current = setInterval(() => {
      if (coffeeInterval <= double) coffeeInterval += 2;
      setAmount(coffeeInterval)
    }, 100);
  }

  fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ type: 'strong'})
  }).then(r => r.json()).then(data => console.log('data returned:', data));

  const handlePressOut = () => {
    if (amount > small && amount < double) {
      setAmount(small);
      console.log(`make a ${type}`);
    };
    if (amount >= double) {
      setAmount(double);
      console.log(`make a double ${type}`);
    };
    if (amount < small) {
      setAmount(defaultAmount)
    }
    clearInterval(interval.current);
    setTimeout(() => {
      setAmount(defaultAmount)
    }, 5000);
  }

  return (
    <Touchable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <CoffeeAnimation height={amount} />
      <Image source={source} style={{ width: '100%', height: 315 }} resizeMode="center" />
    </Touchable>
  )
}

Cup.propTypes = {
  source: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}

export default Cup;
