import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from './constants/index.js'
import Header from './components/Header/Header'
import Description from './components/Description/Description'
import Nasaimage from './components/NASAImage/Nasaimage'

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
      <Header date={date} title={title} />
      <Description explanation={explanation} />
      <Nasaimage url={url} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
