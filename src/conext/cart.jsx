import { useReducer, createContext } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart.js'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return {  addToCart, state, removeFromCart, clearCart }
}

// la dependencia de usar React Context
// es MÍNIMA
export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}





// import { createContext, useState } from "react";
// // 1. Crear contexto
// export const CartContext = createContext()

// // 2. Crear provider
// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([])

//   const addToCart = (product) => {
//     /* setCart([ ...cart, product])//esta es la forma más sensilla de añadir algo al carro */
//     // Check if the product is already in the cart
    
//     const productInTheCartIndex = cart.findIndex(item => item.id === product.id)
    
//     if(productInTheCartIndex >= 0 ) {
//       //una forma usando structuredClone
//       const newCart = structuredClone(cart)
//       newCart[productInTheCartIndex].quantity += 1
//        return setCart(newCart)
//     }
//     // Si product no está en cart
//     setCart(prevState => ([
//       ...prevState, 
//       {
//         ...product,
//         quantity: 1
//       }
//     ]))
//    }


//    const removeFromCart = (product) =>{
//     setCart(prevState => prevState.filter(item => item.id !== product.id))
//    }



//   const clearCart = () => {
//     setCart([])
//   }

//   return (
//     <CartContext.Provider value={{
//       removeFromCart,
//       cart,
//       addToCart,
//       clearCart
//     }}>
//       {children}
//     </CartContext.Provider>
//   )
// }


