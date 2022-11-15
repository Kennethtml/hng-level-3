import React from 'react'
import Header from '../components/Header/Header';
import Shop from '../components/Shop/Shop';
import About from '../components/About/About';
import { useContext,useEffect} from 'react';
import { ModalContext } from '../utils/Modalcontext';
function Home() {

  const {  setToggle } = useContext(ModalContext);
  useEffect(() => {
    setToggle(false);
  }, []);
  return (
    <>
      <Header />
      <Shop />
      <About />
     
    </>
  );
}

export default Home