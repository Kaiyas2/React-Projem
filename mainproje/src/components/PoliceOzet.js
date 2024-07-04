import React, { useContext, useEffect, useState } from 'react'
import '../Styles/PoliceOzet.css';
import { useCustomer } from './CustomerContext';
import axios from 'axios';


function PoliceOzet() {

    
    
    const [policies, setPolicies] = useState({});
    const { selectedPaketData } = useCustomer();
    const { step4Data } = useCustomer();
    const { customerData } = useCustomer();




    useEffect(() => {
      async function fetchData() {
          try {
              const response = await axios.get(`http://localhost:32513/api/Policies/getbytc?customerTc=${customerData.customerTc}`);
              if (response.data) {
                setPolicies(response.data);
                
              }
          } catch (error){

          }
        }  
        fetchData();
    }, []);
  

  return (
    

    <div>
          

       <span className='step5-teklif2'>Müşteri Bilgileri</span>
       <div className='police-bos'></div>
        <table className='police-ozet-table1'>
            <tr>
                <td>
                   
                </td>
                 </tr>
               

       
                    <tr>
          <td>
         <label>Müşteri Adı:</label>   
          </td>
          <td>
          <label className='police-ozet-ayrı'> {policies.customerName}</label> 
          </td>
          <td>
             <label>Müşteri Cinsiyeti:</label>
          </td>
          <td>
             <label className='police-ozet-ayrı'> {policies.customerGender}</label> 
          </td>
           </tr>
           <tr>
            <td>
                <label>Müşteri Tc:</label> 
            </td>
            <td>
           
    <label className='police-ozet-ayrı'>{policies.customerTc}</label>
            </td>
            <td>
              <label>Müşteri Doğum Tarihi:</label>
            </td>
            <td>
            <label className='police-ozet-ayrı'>{policies.customerBirth}</label>

            </td>
           </tr>
        
           <tr>
             <td>
          <label>Müşteri Yaşı:</label>
         </td>
         <td>
          <label> <label className='police-ozet-ayrı'>  {policies.customer_age}</label></label>

         </td>
         <td>
           <label>Aile Üyesi:</label>
         </td>
         <td>
          <label>{policies.customerFamilyMember}</label>

         </td>
           </tr>
        
            <tr>
                <td>
                  <label>Müşteri İletişim</label> 
                </td>
                <td>
                <label className='police-ozet-ayrı'>{policies.customerMail}</label> 
                </td>
                <td>
                  <label>Müşteri Numarası</label>
                </td>
                <td>
                <label className='police-ozet-ayrı'>{policies.customerNumber}</label>
                </td>
                </tr>
            <tr>
                <td>
                <label>Müşteri Adresi</label> 

                </td>
                <td>
                <label className='police-ozet-ayrı7'>{policies.customerAdress}</label>

                </td>
                <td>
                  <label>Müşteri Sağlık Durumu</label>
                </td>
                <td>
                <label className='police-ozet-ayrı7'>{Object.values(step4Data).every(value => !value) ? "Tamamen sağlıklı" : Object.values(step4Data).map(value => value ? value + "\n" : "\n")}</label>

                </td>
            </tr>
           <tr>
            <td>
               

            </td>
            <td>
            </td>
           </tr>
           <tr>
            <td>
            </td>
            <td>
            </td>
           </tr>
           <tr>
            <td>
              
            </td>
            <td>
            </td>
           </tr>
           <tr>
            <td>
            </td>
           <td>
          </td>
           </tr>
         

         

       

               
           
        </table>
         
      
        <span className='step5-teklif2'>Ödeme Bilgileri</span>
        <div className='police-bos'></div>
            <table className='police-ozet-table2'>
                <tr>
                    <td>

                    </td>
                </tr>
                
          
          <tr>
                <td>
                    <label>Kart Numarası:</label>
                </td>
                <td>
                    <label>{policies.customerCardNo}  </label>         
                </td>
             </tr>
             <tr>
                <td>
                    <label>Kart Sahibi Ad Soyad:</label>
                </td>
                <td>
                <label>{policies.customerCardName}  </label>         

                </td>
             </tr> 
             <tr>
                <td>
                    <label>Kart Güvenlik Numarası</label>
                </td>
                <td>
                <label>{policies.cardCvv}  </label>         
                </td>
            </tr> 
            <tr>
              <td>
                  <label>Kart Son Kullanım Tarihi</label>
              </td>
              <td>
              <label>{policies.cardSkt} </label>         

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

    
    </div>
  )
}

export default PoliceOzet