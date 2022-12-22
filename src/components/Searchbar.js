import React from 'react'
import "../styles/style.css"
import axios from "axios";
import { useState, useEffect } from 'react';

export default function Searchbar() {

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const handleFilter = (event) => {
    const searchWord = event.target.value
    const newFilter = data.filter((value =>{
      return value.model.toLowerCase().includes(searchWord.toLowerCase())
    }))
    if (searchWord === "") {
      setFilteredData ([])
    }else {
      setFilteredData(newFilter)
    }
  }
  
    useEffect(() => {
      axios.get("/products")
      .then(res => {
        console.log("Getting from::::", res.data)
        setData(res.data)
      }).catch(err=> console.log(err))
    }, [])
  
//map data
//    const arr = data.map((data, index) => {
//    return (
//      <tr>
//        <td>{data.brand}</td>
//        <td>{data.category}</td>
//        <td>{data.model}</td>
//      </tr>
//      )
//    })
//
// display Data array in div: {arr}
//<table>
//<tr>
//<th>Brand</th>
//<th>Category</th>
//<th>Mogel</th>
//</tr>
//</table>

  return (

    <div className="searchbar">
        <div className='wrap'>
            <div className="search">
             <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={handleFilter}/>
             <button type="submit" className="searchButton"><i class="fa fa-search"></i></button>
            </div>
            {filteredData.length != 0 && (
            <div className='dataResult'>
              {filteredData.slice(0, 5).map((value, key) => {
                return <div className='dataItem'>{value.model}</div>
                })}
            </div>
            )}
        </div>
    </div>
  )
}
