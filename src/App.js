import Key from './components/Content/Key';
import Slider from './components/Content/Slider';
import Header from './components/Header/Header';
import './App.css';
import Data from './components/Content/Data';
import It from './components/Content/It';
import AraSayfa from './components/Content/AraSayfa';
import Contact from './components/Content/Contact';
import ItSol from './components/Content/ItSol';
import Web from './components/Content/Web';



function App() {
  return (
    <div className="App" >
      

      <Header></Header>

      {/* <Slider title2="Web Software Developers" butn="READ MORE"></Slider> */}
      <Slider></Slider>
      
      <Key></Key>

      <Data></Data>

      <It></It>

      <AraSayfa></AraSayfa>

      <ItSol></ItSol>

      {/* <Web></Web> */}

      <Contact></Contact>

      {/* <Deneme></Deneme> */}

    </div>
  );
}

export default App;
