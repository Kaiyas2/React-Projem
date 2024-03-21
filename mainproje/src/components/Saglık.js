import React from 'react'
import saglıkresim from '../resim/content-2343-ea7ea781-e31f-4adc-ae1d-537b0d37b95a_960x720.jpg';
import '../Styles/Saglık.css';

export const Saglık = () => {
  return (
    <div>
        <div className='genel-bos'>
        <div className='saglık-yazı'>
            <label><h1>Quick</h1></label>
            <label>Tamamlayıcı Sağlık Sigortası</label>
            <p>Şehrin en iyi hastanesi bana yeter</p>
            <p>Farkı Quick öder.</p>
        <div className='saglık-btn-genel'>
        <button className='saglık-btn'>Avantajlar</button>
        <button className='saglık-btn2'>Ek Hizmetler</button>
        <button className='saglık-btn3'>Teminatlar</button>
        <button className='saglık-btn4'>Merak Ettikleriniz</button>
        </div>
        </div>
        </div>
        <div className='saglık-input'>
             <select >
            <option value="">Seçiniz</option>
            <option value="01">Erkek</option>
            <option value="02">Kadın</option>
            
        </select>
        <select>
            <option value="">Seçiniz</option>
            <option value="01"> <input type='checkbox'/><label>Kendim</label></option>
           
        </select>
        </div>
       
        <div className='kücük-yan-resim'>
            <img src={saglıkresim}/>
            
        </div>
    </div>
  )
}
