import React from 'react'
import "../styles/style.css"
import { useState, useEffect } from 'react'
import axios from "axios";


export default function Filter() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("/products")
    .then(res => {
      console.log("Getting from::::", res.data)
      setData(res.data)
    }).catch(err=> console.log(err))
  }, [])
  
  return (
    <div className='filterWithResults'>
  <div className='filter'>
    <div className='filterResult'></div>

        <div className='filterSort'> Brand
          <select>
            <option>All</option>
            <option value="Apple">Apple</option>
            <option value="HP">HP (Hewlett Packard)</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Samsung">Samsung</option>
          </select>
        </div>

        <div className='filterSort'> Category
          <select>
            <option>All</option>
            <option value="Laptop">Laptop</option>
            <option value="Dockingstation">Dockingstation</option>
            <option value="Monitor">Monitor</option>
            <option value="Computer">Computer</option>
            <option value="Pen">Pen</option>
          </select>
        </div>

        <div className='filterSort'> Model
          <select>
            <option>All</option>
            <option value="lowest">test1</option>
            <option value="highest">test2</option>
          </select>
        </div>

        <div className='filterX'>TestFilter
          <select>
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
      </div>
      <div className='dataResult'>
              {data.slice(0, 5).map((value, key) => {
                return <div className='dataItem'>{value.brand}</div>
                })}
            </div>
      </div>
    )
  
}
