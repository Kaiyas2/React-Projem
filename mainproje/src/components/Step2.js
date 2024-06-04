import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCustomer } from './CustomerContext';
import '../Styles/Step2.css';
import { useFormik } from 'formik';

function Step2({ onNext }) {
  const [data, setData] = useState(null);
  const { customerData } = useCustomer();
  const { setActiveStep } = useCustomer();
  const { saglikData } = useCustomer();
  

  const [addNew, setaddNew] = useState(false);
  const [newPerson, setNewPerson] = useState({
    customerName: '',
    customerTc: '',
    customerFamilyMember: '',
    customerNumber: '',
    customerBirth: ''
  });

  useEffect(() => {
    if (customerData) {
      setNewPerson({
        customerName: "",
        customerNumber: "",
        customerTc: "",
        riskCity: ""
      });
    }
  }, [customerData]);

  const handleAddPerson =async () => {
    try {
      const response = await axios.post(`http://localhost:32513/api/Customers/add`, newPerson);
      console.log(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const initialValues =  {
    customerTc: "",
    customerNumber: "",
    customerBirth:"",
    customerFamilyMember:""
    
  };
  const formik = useFormik({
    initialValues,
  });

  return (
    <div>
      <div className='sa4'>
        <div className='bos'></div>
        <label className='step2-aile'>Aile Üyeleri</label>
        <form className='step2-form'>
          <div className='step2-orta-div'>
            <label>ADI SOYADI</label>
            <label className='step2-kimlik'>KİMLİK NO</label>
            <label >YAKINLIK DERECESİ</label>
            <label>TELEFON</label>
            <label>RİSK İLİ</label>
            
            {customerData && (
              <div className='step2-orta-div-müsteri'>
                <label className='customer-name'> {customerData.customerName}</label> 
                <label className='step2-kimlik2'>  {customerData.customerTc}</label>
                <label className='step2-kimlik3'>  {saglikData.customerFamilyMember}</label>
                <label className='step2-kimlik4'> {customerData.customerNumber}</label> 
                <label className='step2-kimlik5'> {saglikData.customer_city} </label>
                <label className='step2-kimlik6'> {formik.values.customerTc} </label>
               
                
                
              </div>
            )}
            
            {addNew && (
              <div className="yeniekle">
                <div className="yeniekle-ici">
                  <div className='yeniekle-kimlik'> 
                    <label>Kimlik No:</label>
                    <input type="text" value={formik.values.customerTc} onChange={formik.handleChange} id='customerTc' />
                  </div>
                  <div className='yeniekle-kimlik'>
                    <label>Yakınlık Derecesi:</label>
                    <select
                    id='customerFamilyMember'
                    name="customerFamilyMember"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                     value={formik.values.customerFamilyMember}
                    >
                      <option value="">Seçiniz</option>
                      <option value="Eşi">Eşi</option>
                      <option value="Oğlu">Oğlu</option>
                      <option value="Kızı">Kızı</option>
                    </select>
                  </div>
                  <div className='yeniekle-kimlik'>
                    <label>Telefon:</label>
                    <input type="text" className='yeniekle-kimlik' id='customerNumber' value={formik.values.customerNumber} onChange={formik.handleChange} />
                  </div>
                  <div className='yeniekle-kimlik'>
                    <label>Doğum Yılı:</label>
                    <input type="date" className='yeniekle-kimlik' id='customerBirth' value={formik.values.customerBirth} onChange={formik.handleChange} />
                  </div>
                  <button type='button' className='ekle-btn' onClick={handleAddPerson}>Ekle</button>
                  <button className='sil-btn' onClick={() => setaddNew(false)}>Sil</button>
                </div>
              </div>
            )}
          </div>
          <div className='step2-sag-bar'>
            <div className='step2-sag-bar-ust'>
              <label><span>Quick Tamamlayıcı Sağlık</span> Sigortası</label>
            </div>
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
              <button onClick={onNext} className='step2-button'>Devam Et</button>
              <div className='step2-bos'></div>
            </div>
          </div>
        </form>
        <button className='step2-btn' onClick={() => setaddNew(true)}>+ Yeni Kişi Ekle</button>
      </div>
    </div>
  );
}

export default Step2;
