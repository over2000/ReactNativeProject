import { createContext, useState } from 'react'

export const ProductsContext = createContext({})

export function ProductsProvider({ children }) {

    const[item, setItems] = useState(0)
    const[cart, setCart] = useState([])
    const[lastViews, setLastViews]= useState([])

    function seeItems(item){
        setItems(item++)

        let newCart = cart
        newCart.push(items)
        setCart(newCart)

        let newLastViwes = new Set(lastViews)
        newLastViwes.add(item)
        setLastViews([...newLastViwes])
    }

  return (
    <ProductsContext.Provider value={{
        item,
        cart,
        lastViews,
        seeItems
    }}>
      {children}
    </ProductsContext.Provider>
  )
}
