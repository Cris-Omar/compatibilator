import React from 'react'
import "../styles/style.css"
import { Posts } from "../Data/Posts"
import PostsItems from '../components/PostsItems'


function Blog() {
  return (
  <div className='blog'>
    <h1>Blog Site</h1>

      <div className='newsFeed'>

        {Posts.map((Posts, key) => {
          return <PostsItems 
            kex={key}
            title={Posts.title} 
            image={Posts.image} 
            shortText={Posts.shortText}/>
        })}
      </div>

  </div>
  )
}

export default Blog