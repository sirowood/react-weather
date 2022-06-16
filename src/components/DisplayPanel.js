import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
  position: absolute;
  top: 133px;
  left: 49px;

  width: 330px;
  height: 330px;
  border-radius: 20px;
  background: #DA9D78;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  padding: 20px;

  color: #FFFFFF;
  font-size: 85px;
  font-family: 'Big Shoulders Display', cursive;
  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
`;

const Date = styled.div`
  font-size: 30px;
`;

const City = styled.div`
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 90px;
  margin-top: 60px
`;

const Icon = styled.img`
  height: 90px;
`;

const VerticalBar = styled.div`
  height: 80px;
  border-left: 5px solid white;
`;

const Temperature = styled.div`
`;

const DisplayPanel = ({ data }) => {
  if (!data) {
    return (
      <Display>- -</Display>
    );
  }

  const date = data.location.localtime.split(' ')[0].split('-').reverse().join('.');
  const city = data.location.name.toUpperCase();
  const icon = 'https://' + data.current.condition.icon;
  const temperature = data.current.temp_c;

  return (
    <Display>
      <Date>{date}</Date>
      <City>{city}</City>
      <Bottom>
        <Icon src={icon}/>
        <VerticalBar></VerticalBar>
        <Temperature>{temperature < 0 ? temperature : '+' + temperature }°C</Temperature>
      </Bottom>
    </Display>
  )
};

export default DisplayPanel;