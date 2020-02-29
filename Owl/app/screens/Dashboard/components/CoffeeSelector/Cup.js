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
  const [block, setBlock] = useState(false);
  let interval = React.useRef(null);

  const small = type === 'coffee' ? 31 : 28;
  const double = type === 'coffee' ? 51 : 48;

  const brewIt = type => {
    const query = `
      {
        brew(type: "${type}", userId: 9) {
          id
        }
      }
    `;

    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query }),
    }).then(r => r.json()).then(data => console.log('data returned:', data));
  }

  const handlePressIn = () => {
    if (block) return;
    let coffeeInterval = amount;
    interval.current = setInterval(() => {
      if (coffeeInterval <= double) coffeeInterval += 1;
      setAmount(coffeeInterval)
    }, 50);
  }

  const handlePressOut = () => {
    clearInterval(interval.current);
    if (amount > small && amount < double) {
      setBlock(true);
      setAmount(small);
      brewIt(`normal-${type}`);
      setTimeout(() => {
        setAmount(defaultAmount)
        setBlock(false);
      }, 5000);
    };
    if (amount >= double) {
      setBlock(true);
      setAmount(double);
      brewIt(`double-${type}`);
      setTimeout(() => {
        setAmount(defaultAmount)
        setBlock(false);
      }, 5000);
    };
    if (amount < small) {
      setAmount(defaultAmount)
    }
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
