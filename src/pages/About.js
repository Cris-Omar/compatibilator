
import React from 'react'
import "../styles/style.css"
import example from "../assets/example.jpg"

export default function About() {
  return (
    <div className='about'>
      <h1>About</h1>
      <div className='aboutSection'>
        <p>This site was created by Cristian Hernandez<br/></p>
        <p>the goal was to create a website that helps everyone by a known problem of myself</p>
        <p>a problem that you also already encontered..</p>
        <p >checking the compatibility of Hardware</p>

        <img src={example} alt="BeachPicture"/>

        <p>Einfach irgendein Text.</p>

      </div>
    </div>
  )
}
