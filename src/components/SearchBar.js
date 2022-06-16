import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import mag from '../svgs/magnifer.svg';
const { BASE_URL } = process.env;

const Form = styled.form`
  position: absolute;
  left: 19px;
  right: 19px;
  bottom: 29px;

  width: 390px;
  height: 48px;
  background: #FDFDFD;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s;
  border-radius: 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-center;
  justify-content: space-between;

  &:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.2s;
  }
`;

const Input = styled.input`
  height: 100%;
  border: none;
  margin-left: 25px;
  outline: none;

  padding: 0px 2px;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
`;

const SearchButton = styled.button`
  margin-right: 25px;
  border: none;
  background: none;
  padding: 0px;

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
  transition: filter 0.2s;

  &:hover {
    filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 1));
    transition: filter 0.2s;
  }
`;

const SearchBar = ({ setData, setError }) => {
  const [input, setInput] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    axios.get(`${BASE_URL}&q=${input}&aqi=no`)
      .then(({ data }) => {
        setData(data);
        setInput('');
      })
      .catch((error) => {
        setError(`Couldn't found '${input}'`);
        setData(null);
        setInput('');
        setTimeout(() => {
          setError('')
        }, 5000);
      });
  };

  return (
    <Form onSubmit={handleClick}>
      <Input
        type="text"
        value={input}
        placeholder="Search City"
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchButton type="submit">
        <Icon src={mag} width="24px" alt="Magnifer icon"/>
      </SearchButton>
    </Form>
  )
}

export default SearchBar;