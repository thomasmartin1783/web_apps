import React, { useState } from 'react'
import styled from 'styled-components'

// utils
import data from './data'


function App() {


  const [songs, setSongs] = useState(data())


  return (
    <Data>
      <img src={songs[0].cover} alt="" />
      <h1>{songs[0].name}</h1>
      <p>{songs[0].artist}</p>
    </Data>
  );
}


const Data = styled.div`
  img {
    width: 10rem;
    border-radius: 50%;
  }
`


export default App;
