import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'
import { Product } from '../types/product'
import axios from 'axios'

interface ProductContextType {
  product: Product[] | null
}

const ProductContext = createContext<ProductContextType>({
  product: null,
})

export const useProduct = () => useContext(ProductContext)

interface ProductProviderProps {
  children: ReactNode
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [product, setProduct] = useState<Product[] | null>(null)

  useEffect(() => {
    console.log('Fetching products...')
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        console.log('Fetched Products:', res.data.products)

        // ✅ Add fake material field to each product
        const updatedProducts = res.data.products.map(
          (item: Product, index: number) => ({
            ...item,
            material:
              index % 3 === 0 ? 'Wood' : index % 3 === 1 ? 'Plastic' : 'Metal',
          })
        )

        setProduct(updatedProducts)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  )
}
