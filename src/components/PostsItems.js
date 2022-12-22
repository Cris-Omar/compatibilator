import React from 'react'

export default function PostsItems({title, image, shortText}) {
  return (
    <div className='PostsItems'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> { title } </h1>
      <p> { shortText } </p>
    </div>
  )
}
