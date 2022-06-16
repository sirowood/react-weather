import React from 'react';
import styled from 'styled-components';

const ErrorPanel = styled.div`
  position: absolute;
  top: 540px;
  left: 49px;

  width: 330px;
  background: rgba(255, 64, 64, 0.5);
  border-radius: 10px;
  color: #FFFFFF;
  font-size: 24px;

  padding: 2px 0px;
  text-align: center;

`;

const Error = ({ error }) => {
  return (
    <ErrorPanel>
      {error}
    </ErrorPanel>
  )
};

export default Error;