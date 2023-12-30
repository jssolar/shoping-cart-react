// import './App.css'
import Products from './components/Products'
import { products } from './mocks/products.json'


function App() {

  return (
    <>
      <Products products={products} />
      <h1>hola desde h1</h1>
    </>
  )
}

export default App
