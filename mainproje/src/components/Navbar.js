import React from 'react'
import kücükresim from '../resim/quick.png';
import {Link} from 'react-router-dom';
import '../Styles/Navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { WhatsApp } from '@mui/icons-material';
export const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
      
       <div className='topnav'>
        <img src={kücükresim}/>
      <ul>
        <div className='links'>
        <li><a className='pink' href='#'>Anında Satın Al</a>
          </li>
          
          <li>
            <a className='links1' href='#'>Hasar</a>
          </li>
          <li>
            <a className='links2' href='#'>Online İşlemler</a>
          </li>
          <li>
            <a className='links3' href='#'>Acente</a>
          </li>
          <li>
            <a className='links4' href='#'>Dünyası</a>
          </li>
          </div>
      </ul>
      </div>
      
   
    <div className='topnavbos'>
    <span className='yazı'>Hoşgeldiniz.</span>
       <div className='buton'>
      <button className='btn-kırmızı'>Bireysel Giriş</button>
      <button className='btn-siyah'>Acente Girişi</button>
       </div>      
    </div>  
    </div>
    </div>
  )
}
