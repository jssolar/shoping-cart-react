// import './App.css'
import {  useState } from 'react'
import Products from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import {Header} from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './conext/cart'





function App() {

  const [products] = useState(initialProducts)
  const { filters, filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header  />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
      <Cart />
    </CartProvider>
  )
}

export default App
