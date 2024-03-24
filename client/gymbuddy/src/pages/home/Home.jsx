import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Home.css'
import FindBuddy from '../../components/findbuddy/FindBuddy'
export default function Home() {
  return(
    <div>
        <Navbar />
        <FindBuddy />
    </div>
  )
}
