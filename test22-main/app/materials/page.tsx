'use client'

import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { useProduct } from '../context/productContext'
import { useCart } from '../context/cartContext'
import RecipeReviewCard from '../components/common/Card/Cars'
import Fab from '@mui/material/Fab'
import LoginIcon from '@mui/icons-material/Login'
import Link from 'next/link'

const MaterialsPage = () => {
  const { product } = useProduct()
  const { addToCart, cartItems } = useCart()
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null)

  const materials = ['Wood', 'Plastic', 'Metal']

  const filteredProducts = selectedMaterial
    ? product?.filter((item) => item.material === selectedMaterial)
    : product

  return (
    <div className="relative">
      <div className="p-6">
        <Typography variant="h4" gutterBottom>
          Select a product here
        </Typography>
        <div className="flex gap-2 my-4 pl-10">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className="bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600"
            >
              {mat}
            </button>
          ))}
          <button
            onClick={() => setSelectedMaterial(null)}
            className="bg-gray-300 text-black px-3 py-2 rounded"
          >
            All
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {filteredProducts?.map((item) => (
            <RecipeReviewCard
              key={item.title}
              product={item}
              addToCart={addToCart}
              isInCart={cartItems.some((c) => c.title === item.title)}
            />
          ))}
        </div>
      </div>

      {/* Floating login button */}
      <Link href="/login" passHref legacyBehavior>
        <Fab
          color="primary"
          aria-label="login"
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
            cursor: 'pointer'
          }}
        >
          <LoginIcon />
        </Fab>
      </Link>
    </div>
  )
}

export default MaterialsPage