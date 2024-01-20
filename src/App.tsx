import { Navbar, Footer } from "./components"
import {Home, Error} from './pages'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
