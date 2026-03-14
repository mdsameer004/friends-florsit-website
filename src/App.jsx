import { Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import Orders from './pages/Orders'
import Cart from './pages/Cart'
import Admin from './pages/Admin'
import ProductDetails from './pages/ProductDetails'
import './App.css'

function App() {
  return (
    <DataProvider>
      <div className="app-container">
        <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

        <Footer />
      </div>
    </DataProvider>
  )
}

export default App
