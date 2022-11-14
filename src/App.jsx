import logo from './logo.svg';
import './App.scss';
import Nav from './components/Navigation/Nav';
import Home from './Routes/Home';
import Modal from './components/Modal/Modal';
import { useContext } from 'react';
import { ModalContext } from './utils/Modalcontext';
import { Route,Routes } from 'react-router-dom';
import Places from './Routes/Places';
import Footer from './components/footer/Footer';
function App() {
  const{isModalOpen}=useContext(ModalContext)
  return (
    <div className="container">
     {isModalOpen && <Modal/>}
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/places" element={<Places/>}/>
        </Routes>

      <Footer/>
    </div>
  );
}

export default App;
