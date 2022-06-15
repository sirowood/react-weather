import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

const App = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <SearchBar setData={setData}/>
    </div>
  );
};

export default App;