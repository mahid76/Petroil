
import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Collab from './components/Collab/Collab'
import Header from './components/Header/Header'
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
    </>
  )
}

export default App
