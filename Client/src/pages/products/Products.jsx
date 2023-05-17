import React, { useState } from 'react'
import { Navbar2 } from '../../components/navbar2/Navbar2'
import { Footer2 } from '../../components/footer2/Footer2'
import HeroSection2 from '../../components/herosection2/HeroSection2'
import ProductCarousel from '../home/productCarousel/ProductCarousel'

import ProductsContainer from './productsContainer/ProductsConatiner'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs"
import PRODUCTS from '../../data/products'
import SingleProductComponent from './singleproductComponent/SingleProductComponent'

export const Products = () => {

  const [filterProduct, setfilterProduct] = useState("All")//changes the selection menu in the herosection 2
  const [renderProductPage, setrenderProductPage] = useState(true) //tell which component to render (job openings or job apply component)

  const productList = PRODUCTS.map((PRODUCT) => PRODUCT.productName) //sets the list option for herosection2 which is going as object prop 

  const SelectedProduct = PRODUCTS.filter((PRODUCT) => filterProduct === PRODUCT.productName) //filters the job which the user select through a select list in herosection2

  const productSection2 = {
    "title": "PRODUCTS",
    "tagline": "Find, What we have",
    "shortDesc1": "You can check out some of our amazing products here. Experience the difference from similar one’s in the market. Our aim is to make some useful applications that are needed in the life of a common man. ",
    "List": productList,
  }

  const handleLearnMoreBtn=(product)=>{
    setrenderProductPage(!renderProductPage)
    setfilterProduct(product)
  }

  return (
    <div className='careers-page-wrapper pb-3'>
      <div className='container pt-3'>
        <Navbar2 />
      </div>
      <div className='container'>
        <HeroSection2 data={productSection2} filter={filterProduct} setfilter={setfilterProduct}  diplayListOption={renderProductPage} />
        {
          renderProductPage
            ? (
              <div className=' pt-5 pb-3 border-top'>
                <div className="d-flex flex-column flex-lg-row gap-3 justify-content-between">
                  {
                    filterProduct === "All"
                      ? <ProductsContainer PRODUCTS={PRODUCTS} handleLearnMoreBtn={handleLearnMoreBtn}/>
                      : <ProductsContainer PRODUCTS={SelectedProduct} handleLearnMoreBtn={handleLearnMoreBtn}/>
                  }
                </div>
              </div>
            ) : (
              <>
                <div className=' pt-2 pb-2 border-top border-bottom '>
                  <div className='m-0'>
                    <div className='text-dark' style={{cursor:'pointer'}} onClick={()=>{setrenderProductPage(!renderProductPage);setfilterProduct("All")}} ><BsArrowLeft size={25} /><span className='ps-3'>Back to Products</span>
                    </div>
                  </div>
                </div>
                 <SingleProductComponent data={SelectedProduct} />
              </>
            )

        }

      </div>



      <Footer2 />

    </div>
  )
}
