import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Home.css'
export default function Home() {
  return(
    <div>
        <Navbar />
        <div className = "button-container">
            <button className = "post-button">
                Look for a Buddy!
            </button>
        </div>
    </div>
  )
}
