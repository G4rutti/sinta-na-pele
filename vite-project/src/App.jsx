import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import NavBar from "./components/NavBar"
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<SignUp />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
