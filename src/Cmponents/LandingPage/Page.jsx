import React from 'react'
import Hero from '../Hero/page'
import Categories from '../Category/page'
// import Product from '../Product/page'
import ProductSection from '../Product/page'
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection'
import Chatbot from '../../Chatbot'

const LandingPage = () => {
  return (
    <>
      <Chatbot />
      <Hero />
      <Categories />
      <ProductSection />
      <TestimonialsSection />
    </>
  )
}

export default LandingPage

