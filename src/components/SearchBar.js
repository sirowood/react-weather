import React, { useState } from 'react';
import axios from 'axios';
const { BASE_URL } = process.env;

const SearchBar = ({ setData }) => {
  const [input, setInput] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    axios.get(`${BASE_URL}&q=${input}&aqi=no`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        setData({ error: 'No such city'});
      });
  };

  return (
    <form onSubmit={handleClick}>
      <input
        type="text"
        value={input}
        placeholder="Search City"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar;