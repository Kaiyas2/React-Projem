import './App.css';
import { Navbar } from './components/Navbar';
import { Route,Router, Routes } from 'react-router-dom';
import { Form } from './components/Form';
import resim from './resim/quick-sigorta.jpg';
import { Inform } from './components/Inform';
import { Info } from '@mui/icons-material';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import LocalHospital from '@mui/icons-material/LocalHospital';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import HomeIcon from '@mui/icons-material/Home';
import AddHomeIcon from '@mui/icons-material/AddHome';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ForwardSharpIcon from '@mui/icons-material/ForwardSharp';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link } from 'react-router-dom';
import { Motor } from './components/Motor';
import './Styles/Inform.css';
import { Kasko } from './components/Kasko';
import { Saglık } from './components/Saglık';
import Kefalet from './components/Kefalet';
import Footer from './components/Footer';
import BinaSig from './components/BinaSig';




function App() {
  return (
   
    <div className='App'>
       <Navbar/>
     
      <div>
       <Routes>
       <Route path='/' element={<Kasko/>}/>
       <Route path='/Motor' element={<Motor/>}/>
       <Route path='/Saglık' element={<Saglık/>}/>
       <Route path='/Kefalet' element={<Kefalet/>}/>
       <Route path='/Bina' element={<BinaSig/>}/>
      
       </Routes>
     <Footer/>
      
     

       </div>
      </div>
       );

  }
export default App;
