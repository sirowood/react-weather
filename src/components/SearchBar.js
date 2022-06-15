import React, { useState } from 'react';

const SearchBar = () => {
  const [input, setInput] = useState('');

  const handleClick = (event) => {
    console.log(input);
  };

  return (
    <div className='try'>
      <input
        type="text"
        value={input}
        placeholder="Search City"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default SearchBar;