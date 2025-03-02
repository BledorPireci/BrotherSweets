import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import RegularGallow from './components/Gallow/RegularGallow'
import SpecialGallow from './components/Gallow/SpecialGallow'
import HoneyCake from './components/HoneyCake/HoneyCake'
import CottonCandy from './components/CottonCandy/CottonCandy'
import Popcorn from './components/Popcorn/Popcorn'
import AboutUs from './components/AboutUs/AboutUs'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <RegularGallow />
              <SpecialGallow />
              <CottonCandy />
              <Popcorn />
              <HoneyCake />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
