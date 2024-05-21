import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar"
import Home from './pages/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<Home />}/>
          <Route path='/signin' element={<Home />} />
          <Route path='/sala/:id' element={<Home />} />
          <Route path='/verPerfil' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
