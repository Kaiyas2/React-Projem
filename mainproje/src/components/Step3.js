import React, { useEffect, useState } from 'react'
import '../Styles/Step3.css';
import resim from '../resim/istockphoto-1300273646-1024x1024.jpg';
import { useCustomer } from './CustomerContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';




function Step3({onNext}) {
  const { setActiveStep } = useCustomer();
  const { customerData } = useCustomer();
  const { saglikData } = useCustomer();
  const [networks, setNetworks] = useState({});
  const [networks2, setNetworks2] = useState({});
  const [networks3, setNetworks3] = useState({});
  const [networks4, setNetworks4] = useState({});
  const [networks5, setNetworks5] = useState({});
  const [networks6, setNetworks6] = useState({});

  
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const { selectedPaketData, setSelectedPaketData } = useCustomer();

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

  useEffect(() => {
    const fetchNetworks = async () => {
      try {
        const response = await axios.get('http://localhost:32513/api/Networks/getall');
        setNetworks(response.data[0]);
        setNetworks2(response.data[1]);
        setNetworks3(response.data[2]);
        setNetworks4(response.data[3]);
        setNetworks5(response.data[4]);
        setNetworks6(response.data[5]);
      
      } catch (error) {
        console.error('Error fetching networks:', error);
      }
    };

    fetchNetworks();
  }, []);
  

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
    onChange={() => handleCheckboxChange('pembe', 'Pembe Network Ayakta Tedavi', '1997,22TL')}
    id='1'
  />
</div>
  
        
     <label>{networks.network_Name}</label>
            
         
           </div>
           <div className='pembe-alt-kutu-fiyat'>
            <label>{networks.bedel}</label>
            
           </div>
           <div className='pembe-alt-kutu'>
            <div className='cekbox'>
            <input
          type="checkbox"
          checked={selectedCheckbox === 'pembe2'}         
          onChange={networks2.network_Id}
          id='2'
          value={networks.Bedel}

         
          />
            </div>
            
           <label>{networks2.network_Name}</label>
            
            
           </div>
           <div className='pembe-alt-kutu-fiyat'>
            <label>{networks2.bedel}L</label>
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
          id='3'
          value={networks.Bedel}

      
          />
              
              
            </div>
            
           <label>{networks3.network_Name}</label>
            
            
           </div>
           <div className='pembe-alt-kutu-fiyat'>
            <label>{networks3.bedel}</label>
           </div>
           <div className='pembe-alt-kutu'>
            <div className='cekbox'>
            <input
          type="checkbox"
          checked={selectedCheckbox === 'yesil2'}         
          onChange={() => handleCheckboxChange('yesil2','Yeşil Network Yatarak Tedavi', '2500,22TL')}
          id='4'
          value={networks.Bedel}

        />
              
            </div>
            
           <label>{networks4.network_Name}</label>
            
            
           </div>
           <div className='pembe-alt-kutu-fiyat'>
            <label>{networks4.bedel}</label>
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
          id='5'
          value={networks.Bedel}
         />
              
            </div>
            
           <label>{networks5.network_Name}</label>
            
            
           </div>
           <div className='pembe-alt-kutu-fiyat'>
            <label>{networks5.bedel}</label>
           </div>
           <div className='pembe-alt-kutu'>
            <div className='cekbox'>
            <input
          type="checkbox"
       
          checked={selectedCheckbox === 'lacivert2'}         
          onChange={() => handleCheckboxChange('lacivert2','Lacivert Network Yatarak Tedavi', '2700,22TL')}
          id='6'
          value={networks5.bedel}
         />
              
            </div>
            
           <label>{networks6.network_Name}</label>
            
            
           </div>
           <div className='pembe-alt-kutu-fiyat'>
            <label>{networks6.bedel}</label>
           </div>
        </div>
        <div className='step3-sag-bar'>
              <div className='step2-sag-bar-ust'>
          <label><span>Kaiya Tamamlayıcı Sağlık Sigortası</span> </label></div>
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