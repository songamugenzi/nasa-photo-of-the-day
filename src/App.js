import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from './constants/index.js'

////////////////////////////////
///// IMPORTING COMPONENTS /////
////////////////////////////////
import Header from './components/Header/Header'
import Description from './components/Description/Description'
import Nasaimage from './components/NASAImage/Nasaimage'

///////////////////////////////////////
///// IMPORTING STYLED COMPONENTS /////
///////////////////////////////////////
import styled from 'styled-components'
import { StyledHeaderContainer } from './components/Header/Header'



/////////////////////////////
///// PARENT COMPONENT //////
/////////////////////////////
function App() {
  const [data, setData] = useState({})
  const { date, title, explanation, url } = data

  useEffect(() => {
    axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then(res => {
        setData(res.data)
      })
      .catch(res => {
        console.log(res)
      })
  }, [])

  return (
    <div className="App">
      {/* <StyledHeaderContainer className="placeholder">
            <StyledLogo className="placeholder">&lt; 💅 &gt;</StyledLogo>
      </StyledHeaderContainer> */}
      <Header date={date} title={title} />
      <Description explanation={explanation} />
      <Nasaimage url={url} />
    </div>
  );
}

export default App;
