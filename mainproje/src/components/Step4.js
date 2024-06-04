import React, { useContext, useState } from 'react'
import '../Styles/Step4.css';
import { useCustomer } from './CustomerContext';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { useFormik } from 'formik';



function Step4({onNext}) {

  const { setActiveStep } = useCustomer();
  const { customerData } = useCustomer();
  const { saglikData } = useCustomer();
  const { selectedPaketData } = useCustomer();
  const [smsChecked, setSmsChecked] = useState(false);
  const [mailChecked, setMailChecked] = useState(false);





  const { step4Data, setStep4Data } = useCustomer();

  const handleSaveAndContinue = () => {

    onNext(); 
    setActiveStep(activeStep => activeStep + 1)
    console.log("Seçilen checkboxlar:",checkboxStates);
  
    setStep4Data(formik.values);
  };

  const handleCheck = (e) => {
    const { id, checked } = e.target;
    if (id === 'sms') {
      setSmsChecked(checked);
      if (checked) {
        setMailChecked(false);
      }
    } else if (id === 'mail') {
      setMailChecked(checked);
      if (checked) {
        setSmsChecked(false);
      }
    }
  }
 

  

const initialValues={


  textfield1:"",
  textfield2:"",
  textfield3:"",
  textfield4:"",
  textfield5:"",
  textfield6:"",
  textfield7:"",
  textfield8:"",
  textfield9:"",
  textfield10:"",
  textfield11:"",
  textfield12:"",
  textfield13:""
  

}
const formik= useFormik({

  initialValues,

})




  const [tableOpen, setTableOpen] = useState(null);
  const [initialLoad, setInitialLoad] = useState(null);
  const [checkboxStates, setCheckboxStates] = useState({
    kanser: false,
    kalpDamar: false,
    metabolikEndokrin: false,
    karacigerAkciğer: false,
    omurgaKolon: false,
    romatizmaBagDoku: false,
    beyinSinir: false,
    dogumsalGenetik: false,
    kanHastaliklari: false,
    organNakiller: false,
    kasHastaliklari: false,
    alzheimerParkinson: false,
    digerHastalik: false
  });

  const handleButtonClick = () => {
    setTableOpen(load => !load);
    if (initialLoad) {
      setInitialLoad(false);
    } else {
      const updatedHealthIssues = Object.keys(checkboxStates).reduce((access, key) => {
        access[key] = null;
        return access;
      }, {});
      setCheckboxStates(updatedHealthIssues);

    }
  };
  const handleSelectAll = () => {
    const updatedHealthIssues = Object.keys(!checkboxStates).reduce((access, key) => {
      access[key] = true;
      return access;
    }, {});
    setCheckboxStates(updatedHealthIssues);
  };






  const handleCheckboxChange = (check) => {
    setCheckboxStates(load => ({
      ...load,
      [check]: !load[check]
    }));
  };




  return (
    <div>

       <div className='sa4'>
      <div className='step4-orta-yazi'>
      <span>Sağlık Beyan Soruları</span>
      <label>Her bir sigortalı için sağlık beyanı sorularını doldurunuz.</label>
      <label>"Var" olarak işaretleyeceğiniz sorular için açılacak açıklama alanlarına rahatsızlığınızın tıbbi tanısı,
         tedavi geçmişi gibi detayları yazarak epikriz raporları, test/patoloji sonuçları vb.
         tıbbi belgeleri ekleyiniz.</label>
      </div>
      <button onClick={handleButtonClick} className='step4-btn'>{customerData.customerName} ({saglikData.customerFamilyMember})<ArrowDownwardIcon style={{marginLeft:"40px"}}></ArrowDownwardIcon></button>
      {tableOpen && (
      
        <div className='buyuk-kutu'>
          <div className='ic-kutu'>
            <table className='step4-table'>
              <tr>

              
              <td>

              </td>
              <td>
              <label className='beyaz'>TÜMÜNÜ SEÇ</label>
              </td>
              <td>
              
              <input type='checkbox'className='ic-input'  checked={checkboxStates}  onChange={handleSelectAll}/>TÜMÜNÜ SEÇ
             
              </td>
              </tr>
               <tr>
                <td>
              <label>  Her türlü kanser, iyi huylu veya kötü huylu kitleler</label>
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={checkboxStates.kanser} onChange={() => handleCheckboxChange('kanser')}/>Var
                {checkboxStates.kanser && (
        <div>
          <input
            type="textarea"
            value={formik.values.textfield1}
            onChange={formik.handleChange}
            placeholder="Açıklayınız."
            id='textfield1'
            className='text-alan'
            
          />
        </div>
      )}
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={!checkboxStates.kanser} onChange={() => handleCheckboxChange('kanser')}/>Yok

                </td>
                
              </tr>
              <tr>
                <td>
               <label> Kalp ve damar hastalıkları (venöz yetmezlik dahil, kalp kapak hastalıkları, hipertansiyon, vb.)</label>
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={checkboxStates.kalpDamar} onChange={() => handleCheckboxChange('kalpDamar')}/>Var
                {checkboxStates.kalpDamar && (
        <div>
          <input
            type="text"
            value={formik.values.textfield2}
            onChange={formik.handleChange}
            placeholder="Açıklayınız."
            id='textfield2'
            className='text-alan'
          />
        
        </div>
      )}
                </td>
                <td>
                   <input type='checkbox' className='ic-input' checked={!checkboxStates.kalpDamar} onChange={() => handleCheckboxChange('kalpDamar')}/>Yok
                </td>
              </tr>
              <tr>
                <td>
              <label> Metabolik ve endokrin sistem hastalıkları (Diabetes mellitus (şeker), cushing, obezite, tiroid vb.)</label> 
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={checkboxStates.metabolikEndokrin} onChange={() => handleCheckboxChange('metabolikEndokrin')}/>Var
                {checkboxStates.metabolikEndokrin && (
        <div>
          <input
            type="text"
            value={formik.values.textfield3}
            onChange={formik.handleChange}
            placeholder="Açıklayınız."
            id='textfield3'
            className='text-alan'
          />
        </div>
      )}
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={!checkboxStates.metabolikEndokrin} onChange={() => handleCheckboxChange('metabolikEndokrin')}/>Yok
                </td>
              </tr>
               <tr>
                <td>
             <label> Kronik karaciğer (örn.kronik hepatitler) ve akciğer hastalıkları (KOAH , sarkoidoz vb.)</label>  
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={checkboxStates.karacigerAkciğer} onChange={() => handleCheckboxChange('karacigerAkciğer')}/>Var
                {checkboxStates.karacigerAkciğer && (
        <div>
          <input
            type="text"
            value={formik.values.textfield4}
            onChange={formik.handleChange}
            placeholder="Açıklayınız"
            id='textfield4'
            className='text-alan'
          />
        </div>
      )}
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={!checkboxStates.karacigerAkciğer} onChange={() => handleCheckboxChange('karacigerAkciğer')}/>Yok
                </td>
              </tr>
              <tr>
                <td>
             <label>  Omurga ve vertebral kolon hastalıkları (bel fıtığı, boyun fıtığı, skolyoz vb.)  </label> 
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={checkboxStates.omurgaKolon} onChange={() => handleCheckboxChange('omurgaKolon')}/>Var
                {checkboxStates.omurgaKolon && (
        <div>
          <input
            type="text"
            value={formik.values.textfield5}
            onChange={formik.handleChange}
            placeholder="Açıklayınız"
            id='textfield5'
            className='text-alan'
          />
         
        </div>
      )}
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={!checkboxStates.omurgaKolon} onChange={() => handleCheckboxChange('omurgaKolon')}/>Yok
                </td>
              </tr>
               <tr>
                <td>
             <label>  Romatizmal hastalıklar, sistemik bağ dokusu hastalıkları (romatoid artrit, ankolizan spondilit, sistemik lupus eritematozus (SLE), behçet, gut, psoriatik artrit vb.)</label> 
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={checkboxStates.romatizmaBagDoku} onChange={() => handleCheckboxChange('romatizmaBagDoku')}/>Var
                {checkboxStates.romatizmaBagDoku && (
        <div>
          <input
            type="text"
            value={formik.values.textfield6}
            onChange={formik.handleChange}
            placeholder="Açıklayınız"
            id='textfield6'
            className='text-alan'
          />
        </div>
      )}
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={!checkboxStates.romatizmaBagDoku} onChange={() => handleCheckboxChange('romatizmaBagDoku')}/>Yok
                </td>
              </tr>
              <tr>
                <td>
              <label> Beyin ve sinir sistemi hastalıkları (inme, serebral palsi, epilepsi, kitleler, demiyelinizan hastalıklar, multiple skleroz vb.)</label> 
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={checkboxStates.beyinSinir} onChange={() => handleCheckboxChange('beyinSinir')}/>Var
                {checkboxStates.beyinSinir && (
        <div>
          <input
            type="text"
            value={formik.values.textfield7}
            onChange={formik.handleChange}
            placeholder="Açıklayınız"
            id='textfield7'
            className='text-alan'

          />
        </div>
      )}
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={!checkboxStates.beyinSinir} onChange={() => handleCheckboxChange('beyinSinir')}/>
Yok
                </td>
              </tr>
              <tr>
                <td>
             <label>   Doğumsal ve genetik hastalıklar (ailevi akdeniz ateşi (FMF), kistik fibrozis, akdeniz anemisi, kromozon anomalileri)</label>
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={checkboxStates.dogumsalGenetik} onChange={() => handleCheckboxChange('dogumsalGenetik')}/>Var
                {checkboxStates.dogumsalGenetik && (
        <div>
          <input
            type="text"
            value={formik.values.textfield8}
            onChange={formik.handleChange}
            placeholder="Açıklayınız."
            id='textfield8'
            className='text-alan'
          />
 
        </div>
      )}
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={!checkboxStates.dogumsalGenetik} onChange={() => handleCheckboxChange('dogumsalGenetik')}/>Yok
                </td>
              </tr>
              <tr>
                <td>
             <label>  Kan hastalıkları (hemofili, polisitemi, ITP, aplastik anemi vb.)</label> 
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={checkboxStates.kanHastaliklari} onChange={() => handleCheckboxChange('kanHastaliklari')}/>Var
                {checkboxStates.kanHastaliklari && (
        <div>
          <input
            type="text"
            value={formik.values.textfield9}
            onChange={formik.handleChange}
            placeholder="Açıklayınız"
            id='textfield9'
            className='text-alan'
          />

        </div>
      )}
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={!checkboxStates.kanHastaliklari} onChange={() => handleCheckboxChange('kanHastaliklari')}/>Yok
                </td>
              </tr>
              <tr>
                <td>
              <label>  Organ nakiller, organ yetmezliliği, tek böbreklilik, tam işitme ve görme kaybı</label>
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={checkboxStates.organNakiller} onChange={() => handleCheckboxChange('organNakiller')}/>Var
                {checkboxStates.organNakiller && (
        <div>
          <input
            type="text"
            value={formik.values.textfield10}
            onChange={formik.handleChange}
            placeholder="Açıklayınız"
            id='textfield10'
            className='text-alan'
          />
        </div>
      )}
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={!checkboxStates.organNakiller} onChange={() => handleCheckboxChange('organNakiller')}/>Yok
                </td>
              </tr>
              <tr>
                <td>
              <label>  Kronik ilerleyici kas hastalıkları (myasteria, müsküler distrofileler vb.)</label>
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={checkboxStates.kasHastaliklari} onChange={() => handleCheckboxChange('kasHastaliklari')}/>Var
                {checkboxStates.kasHastaliklari && (
        <div>
          <input
            type="text"
            value={formik.values.textfield11}
            onChange={formik.handleChange}
            placeholder="Açıklayınız"
            id='textfield11'
            className='text-alan'
          />
        </div>
      )}
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={!checkboxStates.kasHastaliklari} onChange={() => handleCheckboxChange('kasHastaliklari')}/>Yok
                </td>
              </tr>
              <tr>
                <td>
              <label> Alzheimer ve parkinson</label> 
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={checkboxStates.alzheimerParkinson} onChange={() => handleCheckboxChange('alzheimerParkinson')}/>Var
                {checkboxStates.alzheimerParkinson && (
        <div>
          <input
            type="text"
            value={formik.values.textfield12}
            onChange={formik.handleChange}
            placeholder="Açıklayınız"
            id='textfield12'
            className='text-alan'
          />
          </div>
      )}
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={!checkboxStates.alzheimerParkinson} onChange={() => handleCheckboxChange('alzheimerParkinson')}/>Yok
                </td>
              </tr>
              <tr>
                <td>
              <label>  Yukarda sayılanların dışında tedavisi devam eden veya planlanan hastalığınız veya şikayetiniz var mı?</label>
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={checkboxStates.digerHastalik} onChange={() => handleCheckboxChange('digerHastalik')}/>Var
                {checkboxStates.digerHastalik && (
        <div>
          <input
            type="text"
            value={formik.values.textfield13}
            onChange={formik.handleChange}
            placeholder="Açıklayınız"
            id='textfield13'
            className='text-alan'
          />
        </div>
      )}
                </td>
                <td>
                <input type='checkbox' className='ic-input' checked={!checkboxStates.digerHastalik} onChange={() => handleCheckboxChange('digerHastalik')}/>Yok
                </td>
              </tr>  
             
            </table>
          </div>
            
           
         
        
        </div>
         )}
        {/* {/* <div className='step4-orta-yazi2'>
           <span>Diğer Sigorta Şirketi</span>
        </div>
       
        <div className='kutu-alt'>
          <label>Sigortalı adayımızın/adaylarımızın diğer sigorta şirketlerinde sağlık poliçesi var mı?</label>
          

         </div>
         
         <input className='ic-input' type='checkbox' checked={evetChecked} onChange={handleCheck} id='evet' />
          <input className='kutu-alt-check-sag' type='checkbox'checked={hayirChecked} onChange={handleCheck} id='hayır'/>Hayır 
        

      <div className='step4-orta-yazi3'>
          <span >Beyan Onay Yöntemi</span>
      </div>
  <div className='kutu-alt-2'>
      
         

        <div className='sms'>

       
        <label>Sms İle</label> <input className='ic-input' type='checkbox' checked={smsChecked} onChange={handleCheck} id='sms'/>
        {smsChecked && (
      <input type='number' className='sms-num'/> )}
   
    </div>
    <div className='mail'>
    <label>E-posta ile</label>  <input className='ic-input' type='checkbox' checked={mailChecked} onChange={handleCheck} id='mail' />
          {mailChecked && (
      <input type='email' className='mail-input'/>
    )}
    </div></div>  */}
          <div className='step3-sag-bar'>
              <div className='step2-sag-bar-ust'>
          <label><span>Kaiya Tamamlayıcı Sağlık</span> Sigortası</label></div>
          <div className='sa-sag-bar-alt'>
            <div className='step2-sigortali'>

           
         <span><label>Sigortalılar</label></span>
         <label>{customerData.customerName} {saglikData.customer_age} {saglikData.customerFamilyMember}</label> 
          </div>
          <div className='step2-adres'>
            <span><label >Adres</label></span>
              <label> {saglikData.customer_city} {customerData.customerAdress} </label>
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


export default Step4