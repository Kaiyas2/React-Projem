import React, { useEffect, useState } from 'react'
import { useCustomer } from './CustomerContext';
import '../Styles/Step5.css';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { Link } from '@mui/material';
import { Kasko } from './Kasko';
import resim from '../resim/credit-card.jpg';






function Step5({onNext}) {
  const { step4Data } = useCustomer();
  const { customerData } = useCustomer();
  const { saglikData } = useCustomer();
  const { selectedPaketData } = useCustomer();
  const { setActiveStep } = useCustomer();
  const [existingCustomerData, setExistingCustomerData] = useState(null);

  

  const initialValues =  {
    customerCardNo:"", 
    customerCardName: "",
    cardSkt: "",
    cardCvv:"",
    checkbox1:false,
    checkbox2:false,
    checkbox3:false,
    checkbox4:false,
  
    
  };
  const validationSchema = Yup.object({
    customerCardNo: Yup.number().required('Kart Numaranızı Giriniz.'),
    customerCardName: Yup.string().required('Kart Sahibinin Adı ve Soyadı Gereklidir'),
    customerNumber: Yup.number().required('Kart Güvenlik Kodu Gereklidir.'),
    customerBirth:Yup.date().required("Doğum Yılı Girmek Zorunludur."),
    checkbox1:Yup.boolean().oneOf([true],"Checkboxı İşaretleyiniz."),
    checkbox2:Yup.boolean().oneOf([true],"Checkboxı İşaretleyiniz."),
    checkbox3:Yup.boolean().oneOf([true],"Checkboxı İşaretleyiniz."),
    checkbox4:Yup.boolean().oneOf([true],"Checkboxı İşaretleyiniz."),
  });
  const formik = useFormik({
    initialValues,
    validationSchema
  });

  const mergedData = {
    ...saglikData, 
    ...formik.values,
    ...customerData 
  };
  console.log(mergedData)

  console.log("customerData.customerTc:", customerData.customerTc);

  const handleTcChange = async () => {
    try {
      const response = await axios.get(`http://localhost:32513/api/Policies/getbytc?customerTc=${customerData.customerTc}`);
      if (response.data) {
        setExistingCustomerData(response.data);

      
        const confirmation = window.confirm("Zaten bir poliçeniz bulunmaktadır. Görüntülemek İster misiniz?");
        if (confirmation) {
          onNext();
            setActiveStep(activeStep => activeStep + 1);
        } else {
          
        }
      } else {
        handleSubmit();
       
      }
    } catch (error) {
      console.error('Error fetching customer data:', error);
    }
  };
  const handleSubmit = async () => {
    try {
      alert("Tebrikler Artık Bir Poliçeniz Var.");
      console.log(formik.values);
      const response = await axios.post(`http://localhost:32513/api/Policies/add`, mergedData);
      console.log(response.data);
      onNext();
      setActiveStep(activeStep => activeStep + 1);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  useEffect(() => {
    if (existingCustomerData) {
      formik.setValues({
        customerCardNo: existingCustomerData.customerCardNo || "",
        customerCardName: existingCustomerData.customerCardName || "",
        cardSkt: existingCustomerData.cardSkt || "",
        cardCvv: existingCustomerData.cardCvv || "",
        checkbox1: formik.values.checkbox1,
        checkbox2: formik.values.checkbox2,
        checkbox3: formik.values.checkbox3,
        checkbox4: formik.values.checkbox4,
      });
    }
  }, [existingCustomerData]);



  return (
    <div>
       <div className='step5-bos'></div>
      <span className='step5-teklif'>Teklif Bilgileri</span>
  
      <table className='step5-table1'>
        <tr className='step5-table-pembe'>

       
        <td>
          <label>Kaiya Tamamlayıcı Sağlık Sigortası</label> 

        </td>
        <td>
        <label className='ic-network-ayrı'>{selectedPaketData.label}</label>
        </td>
         </tr>
        <tr>
          <td>

         
          <label >İşlem</label>  </td>
          <td>
          <label className='ic-network-ayrı'>Yeni Poliçe</label>
          </td>
        </tr>
        <tr>
          <td>
            <label>Teklif No</label>
          </td>
        </tr>
        <tr>
          <td>
             <label>Paket</label>
          </td>
          <td>
       <label> {selectedPaketData.label}</label>
        </td>
        </tr>
        <tr>
          <td>
            <label>Toplam Prim</label>
          </td>
          <td>
            {selectedPaketData.price}
          </td>
        </tr>
       
      </table>
      <div className='step5-bos'></div>
      <div className='step5-sigortalı'>
        <span>Sigortalı Bilgileri</span>
      </div>
      <table className='step5-table2'>
        <tbody>
        <tr className='step5-table2-ust'>
          <td width="25%"><label>Sigortalı</label></td>
          <td width="25%">  <label> Yakınlık Derecesi</label> </td>
          <td width="25%"> <label>Risk İli</label> </td>
          <td width="25%">  <label>Prim</label>  </td>
        </tr>
          <tr className='step5-table2-orta'>
         <td width="25%"><label>{customerData.customerName}</label></td> 
         <td width="25%"><label>{saglikData.customerFamilyMember}</label></td>
         <td width="25%"><label>{saglikData.customer_city}</label></td>
         <td width="25%"><label>{selectedPaketData.price}</label></td>
                
         </tr>      
       <td colSpan="4" className='step5-table2-ust'>
       <ul>
          <li>
         <label >
         Ömür Boyu Yenileme Garantisi, 20240416TSS etiket numaralı Özel Şartlar, “Poliçenin Yenilenmesi,
           Kazanılmış Haklar ve Ömür Boyu Yenileme Garantisi; Yürürlükteki Poliçeye Sigortalı Girişi”
           maddelerinde belirtilen koşulların karşılanması durumunda işbu poliçe dönemi dahil son üç poliçe dönemi
            sonunda değerlendirilecektir.
         </label>
          </li>
         </ul>
       </td>
      </tbody>
    
      </table>
      <div className='step5-bos'></div>
      <div className='step5-sigortalı'>
      <span>Sağlık Beyanı</span></div>
      <table className='step5-table2'>
      <tbody>
        <tr className='step5-table2-ust'>
          <td width="25%"><label>Sigortalı</label></td>
          <td width="25%">
          <label> Yakınlık Derecesi</label>
          </td>
          <td width="25%">
            <label>Sağlık Beyanı</label>
          </td>
          <td width="25%">
            <label>ÖBYG Değerlendirmesi</label>
          </td>
        </tr>
        <tr className='step5-table2-orta'>
          <td>
             <label>{customerData.customerName}</label>
          </td>
          <td>
         <label>{saglikData.customerFamilyMember} </label>
          </td>
          <td>
            <label>{Object.values(step4Data).every(value => !value) ? "Tamamen sağlıklı" : Object.values(step4Data).map(value => value ? value + "\n" : "\n")}</label>
          </td>
      
              
         
        </tr>
        </tbody>
      </table>
      <div className='step5-bos'></div>
      <div className='step5-sigortalı'>
         <span >Sigorta Ettiren Bilgileri</span>
      </div>
     
      <table className='step5-table2'>
        <tbody>
          <tr className='step5-table2-ust'>
            <td width="25%">
              <label>AD SOYAD</label>
            </td>
            <td width="25%"><label>T.C KİMLİK</label></td>
            <td width="25%"><label>E-POSTA ADRESİ</label></td>
            
          </tr>
          <tr className='step5-table2-orta'>
            <td height="40px"><label>{customerData.customerName}</label></td>
            <td><label>{customerData.customerTc}</label></td>
            <td><label>{customerData.customerMail}</label></td>
          </tr>
        </tbody>
      </table>
      <div className='step5-resim'>
        <img src={resim} style={{width:350,height:200}}/>
      </div>
 
      <div className='step5-sigortalı2'>
       
         <span >Kredi Kartı Bilgileri</span>
      </div>
      <form onSubmit={handleTcChange} className='step5-odeme'>
      <div className='step5-kartno'>
        <label>Kredi Kartı Numarası</label>
        <input type='number'
            value={existingCustomerData ? existingCustomerData.customerCardNo : formik.values.customerCardNo}
            id='customerCardNo' 
           onChange={formik.handleChange} className='step5-input' />
        {formik.errors.customerCardNo && formik.touched.customerCardNo && (
        <div><label className='error'>{formik.errors.customerCardNo}</label></div>
      )}
      </div>
      <div className='step5-kartsahip'>
        <label>Kart Sahibi Ad Soyad</label>
        <input type='text'
            value={existingCustomerData ? existingCustomerData.customerCardName : formik.values.customerCardName}
            id='customerCardName'
            onChange={formik.handleChange}className='step5-input' />
        {formik.errors.customerCardName && formik.touched.customerCardName && (
        <div><label className='error'>{formik.errors.customerCardName}</label></div>
      )}
      </div>
      <div className='step5-skt'>
        <label>Son Kullanma Tarihi</label>
        <input type='date'
            value={existingCustomerData ? existingCustomerData.cardSkt : formik.values.cardSkt}
            id='cardSkt'
          onChange={formik.handleChange} 
          className='step5-input'/>
        {formik.errors.cardSkt && formik.touched.cardSkt && (
        <div><label className='error'>{formik.errors.cardSkt}</label></div>
      )}

      </div>
      <div className='step5-cvv'>
        <label> Cvv (Güvenlik Kodu)</label>
        <input type='number'
            value={existingCustomerData ? existingCustomerData.cardCvv : formik.values.cardCvv}
            id='cardCvv' 
           onChange={formik.handleChange}
           className='step5-input' />
        {formik.errors.cardCvv && formik.touched.cardCvv && (
        <div><label className='error'>{formik.errors.cardCvv}</label></div>
      )}
      </div>
     
      </form>
      <div className='step5-sag-bar'>
              <div className='step2-sag-bar-ust'>
          <label><span>Kaiya Tamamlayıcı Sağlık</span> Sigortası</label></div>
          <div className='step5-sag-bar-alt'>
            <div className='step5-sag1'>
        <input type='checkbox'id='checkbox1' className='ic-input' value={formik.values.checkbox1} onChange={formik.handleChange}/><label>Belirtilen Sağlık Beyanı ve Diğer Sigorta Şirketi Beyanı'nın tarafımca verilmiş olup, doğruluğunu kabul ve beyan ederim.</label>
        </div>
        {formik.errors.checkbox1 && formik.touched.checkbox1 && (
        <div><label className='error3'>{formik.errors.checkbox1}</label></div>
      )}
        <div className='step5-sag2'>
        <input type='checkbox' id='checkbox2' className='ic-input' value={formik.values.checkbox2} onChange={formik.handleChange}/><label>KVKK Aydınlatma Metni'ni okudum ve kabul ediyorum.</label>
        </div>
        {formik.errors.checkbox2 && formik.touched.checkbox2 && (
        <div><label className='error3'>{formik.errors.checkbox2}</label></div>
      )}
        <div className='step5-sag3'>
          <input type='checkbox' id='checkbox3' className='ic-input' value={formik.values.checkbox3} onChange={formik.handleChange}/><label>Mesafeli Satış Sözleşmesi'ni okudum ve kabul ediyorum.</label>
        </div>
        {formik.errors.checkbox3 && formik.touched.checkbox3 && (
        <div><label className='error3'>{formik.errors.checkbox3}</label></div>
      )}
        <div className='step5-sag4'>
        
        <input type='checkbox' id='checkbox4' className='ic-input' value={formik.values.checkbox4} onChange={formik.handleChange}/><label>Açık Rıza Metni kapsamında kişisel verilerimin işlenmesine rıza gösteriyorum.</label>
        </div>
        {formik.errors.checkbox4 && formik.touched.checkbox4 && (
        <div><label className='error3'>{formik.errors.checkbox4}</label></div>
      )}
        <div className='step5-sag-bar-paket'>
         
         {selectedPaketData.label && (
         <div>
           <label>{selectedPaketData.label}</label>{'\n'}
           <label>{selectedPaketData.price}</label>
         </div>
       )}
      
         </div>
         <button type='button' className='step5-button' onClick={handleTcChange}>Ödemeyi Onaylıyorum</button>
         <label className='step5-btn-alt'>Beyanınızın hatalı olduğunu düşünüyorsanız ya da teklifi kabul etmek istemiyorsanız aşağıdaki butona tıklayın.</label>
       <a href='/'><button type='submit' className='step5-button2'>Onaylamıyorum</button></a>

          <div className='step5-sigortalı'>
         <span>Teklif onayı nasıl yapılır?</span>
         <ul>
          <li>
          Teklif bilgileri, sigortalı bilgileri ve sağlık beyanı bilgilerini gözden geçiriniz.
          </li>
          <li>
          Kredi kartı bilgilerinizi doldurun.
          </li>
          <li>
          Taksit seçeneği seçin.
          </li>
          <li>
          Ödemeyi Onaylıyorum butonuna basın.
          </li>
         </ul>
         </div>
          </div>
 
     
          <div className='step2-bos'>

        </div>
         </div>
         </div>

  )
}

export default Step5