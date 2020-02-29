import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const CoffeeAnimation = styled.View`
  background-color: brown;
  width: 200px;
  height: ${({ height }) => height}px;
`;

const CoffeeSelector = props => {
  return (
    <CoffeeAnimation height={200} />
  )
}

CoffeeSelector.propTypes = {

}

export default CoffeeSelector
