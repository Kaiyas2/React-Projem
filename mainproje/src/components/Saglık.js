import React, { useContext, useState } from 'react'
import saglıkresim from '../resim/content-2343-ea7ea781-e31f-4adc-ae1d-537b0d37b95a_960x720.jpg';
import '../Styles/Saglık.css';
import Footer from './Footer';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useCustomer } from './CustomerContext';





export const Saglık = ({onNext}) => {
  const {setActiveStep}=useCustomer();
  const { saglikData, setsaglikData } = useCustomer();

  const validationSchema = Yup.object({
    customerGender: Yup.string().required('Cinsiyet Seçimi Zorunludur.'),
    customerFamilyMember: Yup.string().required('Kişi Seçimi Zorunludur.'),
    customer_city: Yup.string().required('Şehir Seçimi Zorunludur'),
    customer_age: Yup.number().required("Yaş girmek zorunludur!").integer("Lütfen Geçerli Bir Yaş giriniz!"),
  });




  const formik = useFormik({
    validationSchema,
    initialValues: {
      customerGender: '',
      customerFamilyMember: '',
      customer_city: '',
      customer_age: ''
    },
  });
  const handleSaveAndContinue = () => {
  
    if (
      !formik.values.customerGender ||
      !formik.values.customerFamilyMember ||
      !formik.values.customer_city ||
      !formik.values.customer_age
    ) {
      alert("Lütfen tüm alanları doldurun.");
      return; 
    }
  
    onNext();
    setActiveStep(activeStep => activeStep + 1);
    setsaglikData(formik.values);
    console.log(formik.values);
  };




  return (
    <div>

        <div className='genel-bos'>
        <div className='saglık-yazı'>
            <label><h1>Kaiya</h1></label>
            <label>Tamamlayıcı Sağlık Sigortası</label>
            <p className='saglık-yazı'>Şehrin en iyi hastanesi bana yeter</p>
            <p className='saglık-yazı'>Farkı Kaiya öder.</p>
            <div className='saglık-btn-genel'>
        <button className='saglık-btn'>Avantajlar</button>
        <button className='saglık-btn2'>Ek Hizmetler</button>
        <button className='saglık-btn3'>Teminatlar</button>
        <button className='saglık-btn4'>Merak Ettikleriniz</button>
        </div>
        </div>
        </div>
         <form className='saglık-lol2' onSubmit={formik.handleSubmit}>
            <div className='saglık-input'>
            <label className='saglık-lol'>Cinsiyet</label>
            <div className='saglık-family-lol'>
            <select
               id="customerGender"
              name="customerGender"
             onChange={formik.handleChange}
              onBlur={formik.handleBlur}
                   value={formik.values.customerGender}
                                                          >                           
                       <option value="">Seçiniz</option>
                        <option value="Kadın">Kadın</option>
                          <option value="Erkek">Erkek</option>


       </select>
       {formik.touched.customerGender && formik.errors.customerGender ? (
              <div>{formik.errors.customerGender}</div>
             
            ) : null}
             </div>

      
             
            <label className='saglık-lol3'>Aile Üyesi Ekleyiniz</label>
            <div className='saglık-family-lol'>
            
            <select
              id="customerFamilyMember"
              name="customerFamilyMember"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.customerFamilyMember}

              
            >
              <option value="">Seçiniz</option>
              <option value="Kendisi">Kendisi</option>
              <option value="Eşim">Eşim</option>
              <option value="Kızım">Kızım</option>
              <option value="Oğlum">Oğlum</option>
            </select>
            {formik.touched.customerFamilyMember && formik.errors.customerFamilyMember ? (
              <div>{formik.errors.customerFamilyMember}</div>
            ) : null}
            </div>

            <label className='saglık-lol'>Şehir</label>
            <div className='saglık-family-lol'> 
        <select
            id="customer_city"
            name="customer_city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.customer_city}>
        <option value="">Seçiniz</option>
                                        
                                        <option value="ADANA">ADANA</option>
                                    
                                    
                                        <option value="ADIYAMAN">ADIYAMAN</option>
                                    
                                    
                                        <option value="AFYONKARAHİSAR">AFYONKARAHİSAR</option>
                                    
                                    
                                        <option value="AĞRI">AĞRI</option>
                                    
                                    
                                        <option value="AMASYA">AMASYA</option>
                                    
                                    
                                        <option value="ANKARA">ANKARA</option>
                                    
                                    
                                        <option value="ANTALYA">ANTALYA</option>
                                    
                                    
                                        <option value="ARTVİN">ARTVİN</option>
                                    
                                    
                                        <option value="AYDIN">AYDIN</option>
                                    
                                    
                                        <option value="BALIKESİR">BALIKESİR</option>
                                    
                                    
                                        <option value="BİLECİK">BİLECİK</option>
                                    
                                    
                                        <option value="BİNGÖL">BİNGÖL</option>
                                    
                                    
                                        <option value="BİTLİS">BİTLİS</option>
                                    
                                    
                                        <option value="BOLU">BOLU</option>
                                    
                                    
                                        <option value="BURDUR">BURDUR</option>
                                    
                                    
                                        <option value="BURSA">BURSA</option>
                                    
                                    
                                        <option value="ÇANAKKALE">ÇANAKKALE</option>
                                    
                                    
                                        <option value="ÇANKIRI">ÇANKIRI</option>
                                    
                                    
                                        <option value="ÇORUM">ÇORUM</option>
                                    
                                    
                                        <option value="DENİZLİ">DENİZLİ</option>
                                    
                                    
                                        <option value="DİYARBAKIR">DİYARBAKIR</option>
                                    
                                    
                                        <option value="EDİRNE">EDİRNE</option>
                                    
                                    
                                        <option value="ELAZIĞ">ELAZIĞ</option>
                                    
                                    
                                        <option value="ERZİNCAN">ERZİNCAN</option>
                                    
                                    
                                        <option value="ERZURUM">ERZURUM</option>
                                    
                                    
                                        <option value="ESKİŞEHİR">ESKİŞEHİR</option>
                                    
                                    
                                        <option value="GAZİANTEP">GAZİANTEP</option>
                                    
                                    
                                        <option value="GİRESUN">GİRESUN</option>
                                    
                                    
                                        <option value="GÜMÜŞHANE">GÜMÜŞHANE</option>
                                    
                                    
                                        <option value="HAKKARİ">HAKKARİ</option>
                                    
                                    
                                        <option value="HATAY">HATAY</option>
                                    
                                    
                                        <option value="ISPARTA">ISPARTA</option>
                                    
                                    
                                        <option value="MERSİN">MERSİN</option>
                                    
                                    
                                        <option value="İSTANBUL">İSTANBUL</option>
                                    
                                    
                                        <option value="İZMİR">İZMİR</option>
                                    
                                    
                                        <option value="KARS">KARS</option>
                                    
                                    
                                        <option value="KASTAMONU">KASTAMONU</option>
                                    
                                    
                                        <option value="KAYSERİ">KAYSERİ</option>
                                    
                                    
                                        <option value="KIRKLARELİ">KIRKLARELİ</option>
                                    
                                    
                                        <option value="KIRŞEHİR">KIRŞEHİR</option>
                                    
                                    
                                        <option value="KOCAELİ">KOCAELİ</option>
                                    
                                    
                                        <option value="KONYA">KONYA</option>
                                    
                                    
                                        <option value="KÜTAHYA">KÜTAHYA</option>
                                    
                                    
                                        <option value="MALATYA">MALATYA</option>
                                    
                                    
                                        <option value="MANİSA">MANİSA</option>
                                    
                                    
                                        <option value="KAHRAMANMARAŞ">KAHRAMANMARAŞ</option>
                                    
                                    
                                        <option value="MARDİN">MARDİN</option>
                                    
                                    
                                        <option value="MUĞLA">MUĞLA</option>
                                    
                                    
                                        <option value="MUŞ">MUŞ</option>
                                    
                                    
                                        <option value="NEVŞEHİR">NEVŞEHİR</option>
                                    
                                    
                                        <option value="NİĞDE">NİĞDE</option>
                                    
                                    
                                        <option value="ORDU">ORDU</option>
                                    
                                    
                                        <option value="RİZE">RİZE</option>
                                    
                                    
                                        <option value="SAKARYA">SAKARYA</option>
                                    
                                    
                                        <option value="SAMSUN">SAMSUN</option>
                                    
                                    
                                        <option value="SİİRT">SİİRT</option>
                                    
                                    
                                        <option value="SİNOP">SİNOP</option>
                                    
                                    
                                        <option value="SİVAS">SİVAS</option>
                                    
                                    
                                        <option value="TEKİRDAĞ">TEKİRDAĞ</option>
                                    
                                    
                                        <option value="TOKAT">TOKAT</option>
                                    
                                    
                                        <option value="TRABZON">TRABZON</option>
                                    
                                    
                                        <option value="TUNCELİ">TUNCELİ</option>
                                    
                                    
                                        <option value="ŞANLIURFA">ŞANLIURFA</option>
                                    
                                    
                                        <option value="UŞAK">UŞAK</option>
                                    
                                    
                                        <option value="VAN">VAN</option>
                                    
                                    
                                        <option value="YOZGAT">YOZGAT</option>
                                    
                                    
                                        <option value="ZONGULDAK">ZONGULDAK</option>
                                    
                                    
                                        <option value="AKSARAY">AKSARAY</option>
                                    
                                    
                                        <option value="BAYBURT">BAYBURT</option>
                                    
                                    
                                        <option value="KARAMAN">KARAMAN</option>
                                    
                                    
                                        <option value="KIRIKKALE">KIRIKKALE</option>
                                    
                                    
                                        <option value="BATMAN">BATMAN</option>
                                    
                                    
                                        <option value="ŞIRNAK">ŞIRNAK</option>
                                    
                                    
                                        <option value="BARTIN">BARTIN</option>
                                    
                                    
                                        <option value="ARDAHAN">ARDAHAN</option>
                                    
                                    
                                        <option value="IĞDIR">IĞDIR</option>
                                    
                                    
                                        <option value="YALOVA">YALOVA</option>
                                    
                                    
                                        <option value="KARABÜK">KARABÜK</option>
                                    
                                    
                                        <option value="KİLİS">KİLİS</option>
                                    
                                    
                                        <option value="OSMANİYE">OSMANİYE</option>
                                    
                                    
                                        <option value="DÜZCE">DÜZCE</option>
                                    
                           
        </select>
        {formik.touched.customer_city && formik.errors.customer_city ? (
              <div>{formik.errors.customer_city}</div>
            ) : null}
            </div>
                    <label className='saglık-lol'>Yaşınız</label>
            <div className='saglık-input'>
            
            <div className='saglık-family-lol'>
            <input
              type="number"
              id="customer_age"
              name="customer_age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.customer_age}
              className='saglık-lol-input'
            />
            {formik.touched.customer_age && formik.errors.customer_age ? (
              <div>{formik.errors.customer_age}</div>
            ) : null}
            </div>
    <button  onClick={handleSaveAndContinue}  className='saglık-fiyat-btn'> Sonraki İşlem </button>
               
       
            </div> 
           
            </div>
    

      
        </form> 
      
       
     
      
      

         
        
       
       
        <div className='kücük-yan-resim'>
            <img src={saglıkresim} style={{width:450,height:420}}/>
            
        </div>
        <Footer/>
       
    </div>
  )
  
}

