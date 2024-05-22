import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import NavBar from "./components/NavBar"
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Denuncia from './pages/Denuncia';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<SignUp />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/denuncia' element={<Denuncia/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
