import React from 'react'
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
import '../App.css';
import resim from '../resim/quick-sigorta.jpg'
import { Route } from 'react-router-dom';
import Kefalet from './Kefalet';

export const Kasko = () => {
 
  return (
    <div className='mainPage'>
         <div className='bar'>
        <div className='bar-yazı'>  <span><h2>Quick Sigorta Finansal Sigorta Ürünleri</h2></span>

<p>Banka teminat mektubu yerine geçecek kefalet senedi ve KOBİ'lere alacak sigortası</p></div>
      
<div className='bar-btn' >
   <a href='/Kefalet'> <button className='bar-btn1'>Kefalet Sigortası</button></a>
   <a href='/Bina'> <button className='bar-btn2'>Bina tamamlama Sigortası</button></a>
    <button className='bar-btn3'>Quick Finanscım</button>
    <button className='bar-btn4'>Alacak Sigortası</button>
    <button className='bar-btn5'>Fatura Koruma Sigortası</button>
    </div>
      </div>
         <form>
          <div className='side-bar'>
            
            <div className='side-bar-kasko'>

            <DirectionsCar fontSize='large'/>Kasko
            </div> 
            <div className='side-bar-motor'>
           {/* <Link to="/Motor"> <TwoWheelerIcon fontSize='large'/>MotorSiklet Trafik Sigortası</Link> */}
           <a href="/Motor"><TwoWheelerIcon fontSize='large' style={{marginRight:12,marginLeft:19}}/> Motorsiklet Trafik Sigortası</a>
          </div>
            <div className='side-bar-saglık'>
        <a  href='/Saglık'><LocalHospital fontSize='large'  style={{marginRight:8,marginLeft:19}}/>Tamamlayıcı Sağlık Sigortası</a> 
          </div>
          <div className='side-bar-dask'>
            <AddHomeIcon fontSize='large'style={{marginRight:8}} /><span>Dask Koruma Sigortası</span>
          </div>
          <div className='side-bar-seyahat'>
          <AirplanemodeActiveIcon fontSize='large' style={{marginRight:8}}/>Seyahat Sağlık Sigortası
          </div>
          <div className='side-bar-hekim'>
          <HeartBrokenIcon fontSize='large'/>Zorunlu Hekim Sorumluluk
          </div>
          <div className='side-bar-kimlik'>
            <PermIdentityIcon fontSize='large'/>Q Kimlik Okuma Sigortası
          </div>
         
          </div>
        </form>
         <div className='orta'>
        <h1>Quick Trafik</h1>
        <label><h3>Yaptırmak zorunlu,yüksek fiyat ödemek değil.</h3></label>
        <div className='textler'>
        <input className='textler' type='text' placeholder='Plaka'/>
        <input className='textler2' type='number' placeholder='TCKN/YKN/VKN'/>
        <input className='textler3' type='text' placeholder='Email/Cep tel'/></div>
        <div className='yazılar-lol'>
        <input type='checkbox'/><p>Plakam yok</p></div>
        <div className='yazılar-lol2'>
        <input type='checkbox'/><p>Gizlilik Politikasını, Kullanıcı Sözleşmesini, Poliçe Bilgilendirme Formunu okudum ve onaylıyorum.</p></div>
        <div className='yazılar-lol3'>
        <input type='checkbox'/><p>KVKK Aydınlatma Metni ni okudum ve onaylıyorum.</p></div>
        <div className='yazılar-lol4'>
        <input type='checkbox'/><p>Açık Rıza Metni kapsamında kişisel verilerimin işlenmesine rıza gösteriyorum.</p></div>
        <button className='orta-btn'>FİYATI GÖR</button>
        
        </div>
       
      </div>
  )
}
