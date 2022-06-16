import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Error from './components/Error';
import DisplayPanel from './components/DisplayPanel';
import styled from 'styled-components';

const MainContainer = styled.div`
  margin: 0px auto;

  width: 100%;
  max-width: 428px;
  height: 100%;
  max-height: 926px;
  background: linear-gradient(180deg, rgba(54, 51, 208, 0.25) 14.66%, rgba(255, 157, 10, 0.25) 48.02%, rgba(16, 209, 252, 0.25) 87.8%);

  position: relative;
`;

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  return (
    <MainContainer>
      <DisplayPanel data={data}/>
      {error && <Error error={error}/>}
      <SearchBar setData={setData} setError={setError}/>
    </MainContainer>
  );
};

export default App;