
import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Blog from './components/Blog/Blog'
import Collab from './components/Collab/Collab'
import Header from './components/Header/Header'
import MapLayout from './components/MapLayout/MapLayout'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Supply from './components/Supply/Supply'

function App() {

  return (
    <>
     <Header />
     <Navbar />
     <Banner />
     <Supply />
     <Services />
     <About />
     <Collab />
     <Blog />
     <MapLayout />
    </>
  )
}

export default App
