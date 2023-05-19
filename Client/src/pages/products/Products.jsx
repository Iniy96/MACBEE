import React, { useState } from 'react'
import { Navbar2 } from '../../components/navbar2/Navbar2'
import { Footer2 } from '../../components/footer2/Footer2'
import HeroSection2 from '../../components/herosection2/HeroSection2'

import ProductsContainer from './productsContainer/ProductsConatiner'

import PRODUCTS from '../../data/products'


export const Products = () => {

  const [filterProduct, setfilterProduct] = useState("All")//changes the selection menu in the herosection 2
  const [displaySelectMenu, setdisplaySelectMenu] = useState(true)
  const [displaySearchFilter, setdisplaySearchFilter] = useState(true)
  const [renderProductPage, setrenderProductPage] = useState(true) //tell which component to render (job openings or job apply component)

  const productList = PRODUCTS.map((PRODUCT) => PRODUCT.productName) //sets the list option for herosection2 which is going as object prop 

  const SelectedProduct = PRODUCTS.filter((PRODUCT) => filterProduct === PRODUCT.productName) //filters the job which the user select through a select list in herosection2

  const productSection2 = {
    "title": "PRODUCTS",
    "tagline": "Find, What we have",
    "shortDesc1": "You can check out some of our amazing products here. Experience the difference from similar one’s in the market. Our aim is to make some useful applications that are needed in the life of a common man. ",
    "List": productList,
  }

  const handleLearnMoreBtn = (product) => {
    setrenderProductPage(!renderProductPage)
    setfilterProduct(product)
  }

  return (
    <div className='careers-page-wrapper pb-3'>
      <div className='container pt-3'>
        <Navbar2 />
      </div>
      <div className='container'>
        <HeroSection2 data={productSection2} filter={filterProduct} setfilter={setfilterProduct} diplayListOption={renderProductPage} displaySelectMenu={displaySelectMenu} displaySearchFilter={displaySearchFilter} />
        <div className=' pt-5 pb-3 border-top'>
          <div className="d-flex flex-column flex-lg-row gap-3 justify-content-between">
            {
              filterProduct === "All"
                ? <ProductsContainer PRODUCTS={PRODUCTS} handleLearnMoreBtn={handleLearnMoreBtn} />
                : <ProductsContainer PRODUCTS={SelectedProduct} handleLearnMoreBtn={handleLearnMoreBtn} />
            }
          </div>
        </div>
      </div>



      <Footer2 />

    </div>
  )
}
