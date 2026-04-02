import React from 'react'
import { CartProvider } from './contexts/CartContext'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Prizes from './components/Prizes'
import Pricing from './components/Pricing'
import Differentials from './components/Differentials'
import WhereToBuy from './components/WhereToBuy'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import CartIcon from './components/CartIcon'
import Cart from './components/Cart'

function App() {
  return (
    <CartProvider>
      <CartIcon />
      <Cart />
      <Hero />
      <HowItWorks />
      <ProductList />
      <Prizes />
      <Pricing />
      <Differentials />
      <WhereToBuy />
      <CTASection />
      <Footer />
    </CartProvider>
  )
}

export default App