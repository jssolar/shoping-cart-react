import React, { useState } from 'react'
import './Filters.css'

const Filters = () => {

  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value)
  }
  return (
    <section className="filters">
      <div>

        <label htmlFor="price">Precio desde:</label>
        <input
          type="range"
          id='price'
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          />
          <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoría</label>
        <select name="" id="category">
          <option value="all">Todas</option>
          <option value="laptops">Notbooks</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
