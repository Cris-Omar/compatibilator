
import React from 'react'
import Filter from '../components/Filter'
import Searchbar from '../components/Searchbar'
import "../styles/style.css"
import { useState } from 'react'

export default function Compatibilator() {

  // hide/show manual searchfilters
  const [hidden, setHidden] = useState(true);

  return (
    <div className='compatibilator'>
      <Searchbar/>
      <div>
        {!hidden ? <Filter/> : null}
        <button onClick={() => setHidden(s => !s)}>manual Product search</button>
      </div>

        <div className="total">

      </div>
    </div>
  )
}
