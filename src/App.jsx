import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

const Card = ({ title}) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(true)}>
        {hasLiked ? 'Liked' : 'Like'}
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
