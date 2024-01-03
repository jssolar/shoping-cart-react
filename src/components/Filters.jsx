import  { useState, useId } from 'react'
import './Filters.css'

export default function Filters({}) {

  const [minPrice, setMinPrice] = useState(0)
  
  
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

/*   console.log({
    minPriceFilterId,
    categoryFilterId
  })
 */
  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value)
    onChange(prevState =>({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (event)=>{
    onChange(prevState =>({
      ...prevState,
      categoty: event.target.value
    }))
  }
  return (
    <section className="filters">
      <div>

        <label htmlFor={minPriceFilterId}>Precio desde:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Notbooks</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}


