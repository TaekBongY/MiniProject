import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
import CardData from './components/CardData'

function App() {
  

  return (
    <div>
      {CardData.map((data, index) => (
        <ProfileCard
          key={index}
          name={data.name}
          age={data.age}
          isOnline={data.isOnline}
        />
      ))}
    </div>

  )
}

export default App
