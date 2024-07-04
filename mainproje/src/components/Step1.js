import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import '../Styles/Step1.css';
import * as Yup from 'yup';
import { useCustomer } from './CustomerContext';
import axios from 'axios';

function Step1({ onNext }) {
  const { setCustomer } = useCustomer();
  const { setActiveStep } = useCustomer();
  const { saglikData } = useCustomer();
  const [existingCustomerData, setExistingCustomerData] = useState(null);



  const initialValues =  {
    customerTc: "",
    customerName: "",
    customerMail: "",
    customerAdress: "",
    customerNumber: "",
    customerBirth:"",
    checkbox1:false,
    checkbox2:false,
    checkbox3:false,
    
  };

  const validationSchema = Yup.object({
    customerTc: Yup.number().required('T.C. veya Yabancı Kimlik No gereklidir'),
    customerName: Yup.string().required('Ad Soyad gereklidir'),
    customerAdress: Yup.string().required('Adres gereklidir'),
    customerMail: Yup.string().email('Geçerli bir e-posta giriniz').required('E-Posta Adresi gereklidir'),
    customerNumber: Yup.number().required('Cep Telefonu Numarası gereklidir'),
    customerBirth:Yup.date().required("Doğum Yılı Girmek Zorunludur."),
    checkbox1:Yup.boolean().oneOf([true],"Checkboxı İşaretleyiniz."),
    checkbox2:Yup.boolean().oneOf([true],"Checkboxı İşaretleyiniz."),
    checkbox3:Yup.boolean().oneOf([true],"Checkboxı İşaretleyiniz."),
  });


  const handleTcChange = async (e) => {
    const customerTc = e.target.value;
    formik.setFieldValue('customerTc', customerTc);
    try {
      const response = await axios.get(`http://localhost:32513/api/Customers/getbytc?customerTc=${customerTc}`);
      if (response.data) {
        setExistingCustomerData(response.data);
        formik.setValues({
          ...formik.values,
          ...response.data
        });
      }
    } catch (error) {
      console.error('Error fetching customer data:', error);
    }
  };
  const handleSubmit = async () => {
    try {
      if (!existingCustomerData) {
        console.log(formik.values);
        const addresponse = await axios.post(`http://localhost:32513/api/Customers/add`, mergedData);
        console.log(addresponse.data);
        setCustomer(mergedData);
        onNext();
        setActiveStep(activeStep => activeStep + 1);
      }
      else{
        console.log(formik.values);
        setCustomer(mergedData);
        onNext();
        setActiveStep(activeStep => activeStep + 1);
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  
  const formik = useFormik({
    initialValues: existingCustomerData || initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('customerTc');
    if (id) {
      handleTcChange({ target: { value: id } });
    }
  }, [existingCustomerData, formik.values.customerTc]);



  const mergedData = {
    ...saglikData, 
    ...formik.values,
  };

  const handleFormSubmit = () => {
    if (!existingCustomerData) {
        formik.handleSubmit();
    } else {
        const confirmation = window.confirm("Müşteri Kayıtlı Devam Ediyor musunuz?");
        if (confirmation) {
            formik.handleSubmit();
        } else {
          
        }
    }
};


  return (
    <div className='sa'>
      <label className='sigorta-h3'>Sigortalı Bilgileri</label>
      <form onSubmit={handleFormSubmit} className='sa-form'>
        <label>T.C. veya Yabancı Kimlik No</label>
        <label className='soldan'>Doğum Yılı</label>
        <div className='lol1'>
          <input
            type='number'
            className={formik.errors.customerTc ? 'input-error' : ''}
            value={formik.values.customerTc}
            onChange={handleTcChange}
            id='customerTc'
          />
          <div className='bos'></div>
          <input
            type='date'
            className={formik.errors.customerBirth ? 'input-error' : ''}
            value={existingCustomerData ? existingCustomerData.customerBirth : formik.values.customerBirth}
            onChange={formik.handleChange}
            id='customerBirth'
           
          />
        </div>
        <div className='erol1'>
        {formik.errors.customerTc && formik.touched.customerTc && (
        <label className='error'>{formik.errors.customerTc}</label>
      )}

          
          {formik.errors.customerBirth && formik.touched.customerBirth && (
        <label className='error2'>{formik.errors.customerBirth}</label>
      )}

        </div>
        <label>Ad Soyad</label>
        <label className='soldan3'>Adres</label>
        <div className='orta-ad'>
          <input
            type='text'
            id='customerName'
            className={formik.errors.customerName? 'input-error' : ''}
            value={existingCustomerData ? existingCustomerData.customerName : formik.values.customerName}
            onChange={formik.handleChange}
          />
          <div className='bos'></div>
          <input
            type='text'
            className={formik.errors.customerAdress ? 'input-error' : ''}
            value={existingCustomerData ? existingCustomerData.customerAdress : formik.values.customerAdress}
            onChange={formik.handleChange}
            id='customerAdress'
          />
        </div>
        <div className='erol1'>
        {formik.errors.customerName && formik.touched.customerName && (
        <label className='error'>{formik.errors.customerName}</label>
      )}
              {formik.errors.customerAdress && formik.touched.customerAdress && (
        <label className='error2'>{formik.errors.customerAdress}</label>
      )}
        </div>
        <div className='orta-div'>
          <label>İletişim Bilgileri</label>
        </div>
        <label>E-Posta Adresi</label>
        <label className='soldan2'>Cep Telefonu Numarası</label>
        <div className='lol1'>
          <input
            type='email'
            className={formik.errors.customerMail ? 'input-error' : ''}
            value={existingCustomerData ? existingCustomerData.customerMail : formik.values.customerMail}
            onChange={formik.handleChange}
            id='customerMail'
          />
          <div className='bos'></div>
          <input
            type='number'
            className={formik.errors.customerNumber ? 'input-error' : ''}
            value={existingCustomerData ? existingCustomerData.customerNumber : formik.values.customerNumber}
            onChange={formik.handleChange}
            id='customerNumber'
          />
        </div>
        <div className='erol1'>
        {formik.errors.customerMail && formik.touched.customerMail && (
        <label className='error'>{formik.errors.customerMail}</label>
      )}
      {formik.errors.customerNumber && formik.touched.customerNumber && (
        <label className='error2'>{formik.errors.customerNumber}</label>
      )} 
       </div>
      </form>
      <div className='sa-alt-yazi'>
        <label>Bu poliçeyi SGK’sı olan sigortalılar kullanabilir.</label>
      </div>
      <div className='sa-alt'>
        <div className='sa-alt-checkbox1'>
          <input type='checkbox' value={formik.values.checkbox1} onChange={formik.handleChange} id='checkbox1' />
          <label><span className='sa-span'>Gizlilik Politikası , Kullanıcı Sözleşmesi</span> ve <span> Poliçe Bilgilendirme Formu'nu</span> okudum ve kabul ediyorum.</label>
        </div>
        {formik.errors.checkbox1 && formik.touched.checkbox1 && (
        <div><label className='error3'>{formik.errors.checkbox1}</label></div>
      )}
        <div className='sa-alt-checkbox1'>
          <input type='checkbox' value={formik.values.checkbox2} onChange={formik.handleChange}  id='checkbox2' />
          <label><span className='sa-span' >KVKK Aydınlatma Metni'ni</span> okudum ve kabul ediyorum.</label>
        </div>
        {formik.errors.checkbox2 && formik.touched.checkbox2 && (
        <div><label className='error3'>{formik.errors.checkbox2}</label></div>
      )}
        <div className='sa-alt-checkbox1'>
          <input type='checkbox' value={formik.values.checkbox3} onChange={formik.handleChange}  id='checkbox3' />
          <label><span className='sa-span'>Açık Rıza Metni</span> kapsamında kişisel verilerimin işlenmesine rıza gösteriyorum.</label>
        </div>
        {formik.errors.checkbox3 && formik.touched.checkbox3 && (
        <div><label className='error3'>{formik.errors.checkbox3}</label></div>
      )}
      </div>
      <div className='sa-sag-bar'>
        <div className='sa-sag-bar-ust'>
         <span>Kaiya Tamamlayıcı Sağlık Sigortası</span>
        </div>
        <div className='sa-sag-bar-alt'>
          <label >Kaiya Tamamlayıcı Sağlık Sigortası nasıl alınır?</label>
          <ul>
            <li>Sigortalı bilgileri girilir.</li>
            <li>İletişim bilgileri girilir.</li>
            <li>Aile üyeleri eklenebilir.</li>
            <li>Bireyler sağlıklı varsayılarak teklif verilir. Sağlık beyanı alınır.</li>
            <li>Mevcut sigorta şirketi beyanı alınır.</li>
            <li>Ödeme yöntemi seçilir.</li>
            <li>Müşteri onayıyla poliçe düzenlenir.</li>
            <li>E-posta ile poliçe seti iletilir.</li>
            </ul>
            <button onClick={handleFormSubmit} className='step1-button' type='submit'>Devam Et</button>
          <div className='step1-yan-boos'></div>
       

        </div>
      </div>
    </div>
  );
}

export default Step1;
