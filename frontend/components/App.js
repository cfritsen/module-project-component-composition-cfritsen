import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Module from './Module.js'

function App() {
  const [apod, setApod] = useState(undefined)

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((result) => {
      console.log("OG result:" + result)
      setApod(result)
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
console.log(apod.data)
  return (
    <Module data={apod.data} />
  )

}

export default App
