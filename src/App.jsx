import logo from './logo.svg';
import './App.scss';
import Nav from './components/Navigation/Nav';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="container">
     
        <Nav/>

      <Header/>
      <Shop/>
      <About/>
      <Footer/>
      
    </div>
  );
}

export default App;
