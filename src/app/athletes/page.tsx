import ParallaxBanner from '@/components/ParallaxBanner'
import PlayersPage from '@/components/PlayersPage'
import React from 'react'

const page = () => {
  return (
    <div>
   
    <ParallaxBanner
      backgroundImage="/website.png" 
      overlayText="Our Players and Coaches"
      height="70vh" 
    />
    
      <PlayersPage /> 
      <PlayersPage /> 
    </div>
  )
}

export default page