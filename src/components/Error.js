import React from 'react';
import styled from 'styled-components';

const ErrorPanel = styled.div`
  position: absolute;
  left: 5%;
  bottom: 20%;

  width: 90%;
  background: rgba(255, 64, 64, 0.1);
  border-radius: 10px;
  color: rgb(255, 64, 64);
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