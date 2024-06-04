import React, { useEffect, useState } from 'react'
import '../Styles/Step3.css';
import resim from '../resim/istockphoto-1300273646-1024x1024.jpg';
import { useCustomer } from './CustomerContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';



function Step3({onNext}) {
  const { setActiveStep } = useCustomer();
  const { customerData } = useCustomer();
  const { saglikData } = useCustomer();
  
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const { setSelectedPaketData, selectedPaketData } = useCustomer();

  const handleCheckboxChange = (id, label, price) => {
    if (selectedCheckbox === id) {
      setSelectedCheckbox(null);
      setSelectedPaketData({ label: null, price: null });
      
    } else {
      setSelectedCheckbox(id);
      setSelectedPaketData({ label, price });
    }
  };

  const handleSaveAndContinue = () => {
    if (!selectedCheckbox) {
      alert("Lütfen bir Network Seçiniz.");
      return;
    }
    onNext();
    setActiveStep(activeStep => activeStep + 1);
  };


  return (
    <div>

       <div className='sa4'> 
        <div className='step3-yazi'>
        <span>Ömür boyu yenileme garantisi</span>
      <p className='step3-p'>  Ömür Boyu Yenileme Garantisi (ÖBYG), sigortalının ilgili ürün için sahip olduğu plan,
         network ve Özel Şart tarifesinin yenileme dönemindeki güncel halleriyle ömür boyu yenilenmesi taahhüdüdür.</p>
        </div>

        <div className='step3-orta-yazi'>
            <label>Network Seçimi</label>
        </div>
        <div className='buyuk-kutular'>
          <label className='arkasi-pembe'>Pembe Network</label>
          <label className='buyuk-kutular-ist'>İstanbul</label>
          <label className='buyuk-kutular-krm'><span>120</span> Sağlık kurumu</label>
          <div className='step3-resim'>
          <img src={resim} style={{width:50,height:50}}/> <img src={resim} style={{width:50,height:50}}/> 

          </div>

          <label className='buyuk-kutular-ist'>Komşu İller</label>
          <label className='buyuk-kutular-krm'><span>32</span> Sağlık kurumu</label>
          <div className='step3-resim'>
          <img src={resim} style={{width:50,height:50}}/> <img src={resim} style={{width:50,height:50}}/> 

          </div>
           <label className='buyuk-kutular-ist'>Türkiye Geneli</label>
           <label className='buyuk-kutular-krm'><span>507</span> Sağlık kurumu</label>
           <div className='pembe-alt-kutu'>
            <div className='cekbox'>
            <input
                type="checkbox"
                checked={selectedCheckbox === 'pembe'}         
                 onChange={() => handleCheckboxChange('pembe','Pembe Network Ayakta Tedavi', '1,987,22TL')}
                 id='checkbox1'
            
              />
              
            </div>
            
            
           <label>Yatarak Tedavi</label>
            
            
           </div>
           <div className='pembe-alt-kutu-fiyat'>
            <label>1,987,22TL</label>
            
           </div>
           <div className='pembe-alt-kutu'>
            <div className='cekbox'>
            <input
          type="checkbox"
          checked={selectedCheckbox === 'pembe2'}         
          onChange={() => handleCheckboxChange('pembe2','Pembe Network Yatarak Tedavi', '2000,22TL')}
          id='checkbox2'
         
          />
            </div>
            
           <label>Ayakta Tedavi</label>
            
            
           </div>
           <div className='pembe-alt-kutu-fiyat'>
            <label>1,987,23TL</label>
           </div>
           
           
        </div>
        <div className='buyuk-kutular-yesil'>
          <label className='arkasi-yesil'>Yeşil Network</label>
          <label className='buyuk-kutular-ist-ysl'>İstanbul</label>
          <label className='buyuk-kutular-krm-ysl'><span>136</span> Sağlık kurumu</label>
          <label>Pembe Network'e dahil tüm kurumlar</label>

          <label className='buyuk-kutular-ist-ysl'>Komşu İller</label>
          <label className='buyuk-kutular-krm-ysl'><span>32</span> Sağlık kurumu</label>

          <label>Pembe Network'e dahil tüm kurumlar</label>

           <label className='buyuk-kutular-ist-ysl'>Türkiye Geneli</label>
           <label className='buyuk-kutular-krm-ysl'><span>541</span> Sağlık kurumu</label>
           <label>Pembe Network'e dahil tüm kurumlar</label>
           <div className='pembe-alt-kutu'>
            <div className='cekbox'>
            <input
          type="checkbox"
        
          checked={selectedCheckbox === 'yesil'}         
          onChange={() => handleCheckboxChange('yesil','Yeşil Network Ayakta Tedavi', '2000,22TL')}
          id='checkbox3'
      
          />
              
              
            </div>
            
           <label>Yatarak  Tedavi</label>
            
            
           </div>
           <div className='pembe-alt-kutu-fiyat'>
            <label>1,987,23TL</label>
           </div>
           <div className='pembe-alt-kutu'>
            <div className='cekbox'>
            <input
          type="checkbox"
          checked={selectedCheckbox === 'yesil2'}         
          onChange={() => handleCheckboxChange('yesil2','Yeşil Network Yatarak Tedavi', '2500,22TL')}
          id='checkbox4'
        />
              
            </div>
            
           <label>Ayakta Tedavi</label>
            
            
           </div>
           <div className='pembe-alt-kutu-fiyat'>
            <label>1,987,24TL</label>
           </div>
        </div>

        <div className='buyuk-kutular-lacivert'>
          <label className='arkasi-lacivert'>Lacivert Network</label>
          <label className='buyuk-kutular-ist-lcv'>İstanbul</label>
          <label className='buyuk-kutular-krm-lcv'><span>164</span> Sağlık kurumu</label>
          <label>Pembe Network'e dahil tüm kurumlar</label>

          <label className='buyuk-kutular-ist-lcv'>Komşu İller</label>
          <label className='buyuk-kutular-krm-lcv'><span>34</span> Sağlık kurumu</label>

          <label>Pembe Network'e dahil tüm kurumlar</label>

           <label className='buyuk-kutular-ist-lcv'>Türkiye Geneli</label>
           <label className='buyuk-kutular-krm-lcv'><span>601</span> Sağlık kurumu</label>
           <label>Pembe Network'e dahil tüm kurumlar</label>
           <div className='pembe-alt-kutu'>
            <div className='cekbox'>
            <input type='checkbox'   checked={selectedCheckbox === 'lacivert'}         
          onChange={() => handleCheckboxChange('lacivert','Lacivert Network Ayakta Tedavi', '2200,22TL')}
          id='checkbox5'
         />
              
            </div>
            
           <label>Yatarak Tedavi</label>
            
            
           </div>
           <div className='pembe-alt-kutu-fiyat'>
            <label>1,987,25TL</label>
           </div>
           <div className='pembe-alt-kutu'>
            <div className='cekbox'>
            <input
          type="checkbox"
       
          checked={selectedCheckbox === 'lacivert2'}         
          onChange={() => handleCheckboxChange('lacivert2','Lacivert Network Yatarak Tedavi', '2700,22TL')}
          id='checkbox6'
         />
              
            </div>
            
           <label>Ayakta Tedavi</label>
            
            
           </div>
           <div className='pembe-alt-kutu-fiyat'>
            <label>1,987,26TL</label>
           </div>
        </div>
        <div className='step3-sag-bar'>
              <div className='step2-sag-bar-ust'>
          <label><span>Kaiya Tamamlayıcı Sağlık</span> Sigortası</label></div>
          <div className='sa-sag-bar-alt'>
            <div className='step2-sigortali'>

           
         <span><label>Sigortalılar</label></span>
         <div className='sigortali-ic'>
                <label className='customer-name-bar'> {customerData.customerName}</label>  <label className='bar-kisi'>{saglikData.customerFamilyMember}</label> <label className='bar-age'>{saglikData.customer_age}</label> 
                </div>
          </div>
          <div className='step2-adres'>
            <span><label >Adres</label></span>
            <label className='step2-kimlik'> {saglikData.customer_city} {customerData.customerAdress} </label>
          </div>
          <div className='step3-sag-bar-paket'>
          
          {selectedPaketData.label && (
            <div className='network-secim'>
              <label>{selectedPaketData.label}</label><br/>
              <label>{selectedPaketData.price}</label>
            </div>
          )}
        </div>
             
         <button onClick={handleSaveAndContinue} className='step3-button'>Devam Et</button>
        <div className='step2-bos'>

        </div>
         </div>
         </div>
       
        </div>
      

    </div>
   
  )
}

export default Step3