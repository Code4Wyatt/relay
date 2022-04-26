import React from 'react'
import './Category.scss'

const Category = ({ title, img }) => {
  return (
      <div className="category__card"><img src={img}></img>
      <h5>{title}</h5></div>
  )
}

export default Category