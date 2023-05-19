import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Home2 from './pages/home2/Home2'
import  WhoWeAre2  from './pages/whoweare2/WhoWeAre2'
import { Products } from "./pages/products/Products"
import Services2 from "./pages/services2/Services2"
import { Careers } from "./pages/careers/Careers"
import Contact2 from './pages/contact2/Contact2'
import ServiceConsultation2 from "./pages/services2/ServiceConsultation2"
import {SingleProductPage} from "./pages/productSingle/SingleProductPage"
import {CareersApplyPage} from './pages/careersApply/CareersApplyPage'
import ScrollToTop from './components/scrollToTop/ScrollToTop'


function App() {

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home2 />} />
        <Route path='/whoweare' element={<WhoWeAre2 />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:singleProduct' element={<SingleProductPage />} />
        <Route path='/services' element={<Services2 />} />
        <Route path='/services/serviceconsultation' element={ <ServiceConsultation2/> }/>
        <Route path='/careers' element={<Careers />} />
        <Route path='/careers/:jobtitle' element={<CareersApplyPage/>} />
        <Route path='/contact' element={<Contact2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
