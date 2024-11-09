import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import About from './pages/About';
import Work from './pages/Work';
import {Routes, Route} from 'react-router-dom';

function App(){
  return(
    <div className="p-5 md:w-3/4 mx-auto flex flex-col h-screen">
    <Navbar />
    <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/work" element={<Work/>} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App;