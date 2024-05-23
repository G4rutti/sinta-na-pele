import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import NavBar from "./components/NavBar"
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Denuncia from './pages/Denuncia';
import Footer from './components/Footer';
import Video from './pages/Video';
import Tags from './pages/CriarDenuncia';
import CriarDenuncia from './pages/CriarDenuncia';
import VideoType from './pages/VideoType';

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<SignUp />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/denuncia' element={<Denuncia/>}/>
          <Route path='/tags' element={<Tags/>}/>
          <Route path='/videos' element={<Video/>}/>
          <Route path='/videos/:userType' element={<VideoType/>}/>
          <Route path='/create_complaint' element={<CriarDenuncia/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
