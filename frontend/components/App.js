import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Module from './Module.js'

function App() {
  const [apod, setApod] = useState(undefined)

  useEffect(() => {
    axios.get('http://localhost:9009/api/apod?api_key=DEMO_KEY')
    .then((result) => {
      setApod(result.data)
    })
    .catch((err) => {
      console.log(err)
    })  
  }, [])

  if (apod === undefined) {
    return (
        <h3>Grabbing Today's Photo...</h3>
    )
}

  return (
    <Module data={apod} />
  )

}

export default App
