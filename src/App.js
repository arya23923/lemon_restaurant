// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Nav';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/navbar' element={<Navbar />}></Route>
          <Route path='/header' element={<Header />}></Route>
          <Route path='/main' element={<Main />}></Route>
          <Route path='/footer' element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
