import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

const Card = ({ title}) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div className="card" onClick={() => setCount((prevState) => prevState + 1)}>
      <h2>{title} <br /> {count || null}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

// export default Card

const App = () => {
  return (
    <div className="card-container">
    <Card title="Terminator" />
    <Card title="The Lion King" />
    <Card title="Star Wars" />
    </div>
  )
}

export default App
