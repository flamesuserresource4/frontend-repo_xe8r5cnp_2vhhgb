import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Loyalty from './pages/Loyalty'
import Students from './pages/Students'
import Content from './pages/Content'
import Stores from './pages/Stores'
import ProductsPage from './pages/ProductsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loyalty" element={<Loyalty />} />
      <Route path="/students" element={<Students />} />
      <Route path="/content" element={<Content />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  )
}

export default App
