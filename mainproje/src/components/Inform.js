import React from 'react'
import '../Styles/Inform.css'
import { useFormik } from 'formik';
import resim from '../resim/ES_website_slider_final_bos_8eaedc729d.jpg';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import LocalHospital from '@mui/icons-material/LocalHospital';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import HomeIcon from '@mui/icons-material/Home';
import AddHomeIcon from '@mui/icons-material/AddHome';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
export const Inform
 = () => {

    const {values,handleChange} = useFormik({
        initialValues:{
            ad:'',
            no:'',
        },
    });
  return (
    <div>
      

      <div className='orta'>
        <h1>Quick Trafik</h1>
        <label>Yaptırmak zorunlu,yüksek fiyat ödemek değil./</label>
        <div className='textler'>
        <input className='textler' type='text' placeholder='Plaka'/>
        <input className='textler2' type='number' placeholder='TCKN/YKN/VKN'/>
        <input className='textler3' type='text' placeholder='Email/Cep tel'/></div>
        <div className='yazılar-lol'>
        <input type='checkbox'/>Plakam yok</div>
        <div className='yazılar-lol'>
        <input type='checkbox'/><p>Gizlilik Politikasını, Kullanıcı Sözleşmesini, Poliçe Bilgilendirme Formunu okudum ve onaylıyorum.</p></div>
        <div className='yazılar-lol'>
        <input type='checkbox'/><p>KVKK Aydınlatma Metni ni okudum ve onaylıyorum.</p></div>
        <div className='yazılar-lol'>
        <input type='checkbox'/><p>Açık Rıza Metni kapsamında kişisel verilerimin işlenmesine rıza gösteriyorum.</p></div>
        <button className='orta-btn'>FİYATI GÖR</button>
      </div>

    </div>
   
  )
}
