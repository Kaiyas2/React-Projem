import React, { useContext, useEffect, useState } from 'react'
import '../Styles/PoliceOzet.css';
import { useCustomer } from './CustomerContext';


function PoliceOzet() {

    
    
    const [policies, setPolicies] = useState([]);
    const { selectedPaketData } = useCustomer();
    const { step4Data } = useCustomer();



    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('http://localhost:32513/api/Policies/getall');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setPolicies(data);
        } catch (error) {
          console.error('Error fetching data:', error);
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
               

        {policies.map(policy => (
              <>
                    <tr>
          <td>
         <label>Müşteri Adı:</label>   
          </td>
          <td>
          <label className='police-ozet-ayrı'> {policies.customerName}{policy.customerName}</label> 
          </td>
          <td>
             <label>Müşteri Cinsiyeti:</label>
          </td>
          <td>
             <label className='police-ozet-ayrı'> {policies.customerGender}{policy.customerGender}</label> 
          </td>
           </tr>
           <tr>
            <td>
                <label>Müşteri Tc:</label> 
            </td>
            <td>
           
    <label className='police-ozet-ayrı'>{policies.customerTc}{policy.customerTc}</label>
            </td>
            <td>
              <label>Müşteri Doğum Tarihi:</label>
            </td>
            <td>
            <label className='police-ozet-ayrı'>{policies.customerBirth}{policy.customerBirth}</label>

            </td>
           </tr>
        
           <tr>
             <td>
          <label>Müşteri Yaşı:</label>
         </td>
         <td>
          <label> <label className='police-ozet-ayrı'>  {policies.customer_age}{policy.customer_age}</label></label>

         </td>
         <td>
           <label>Aile Üyesi:</label>
         </td>
         <td>
          <label>{policies.customerFamilyMember}{policy.customerFamilyMember}</label>

         </td>
           </tr>
        
            <tr>
                <td>
                  <label>Müşteri İletişim</label> 
                </td>
                <td>
                <label className='police-ozet-ayrı'>{policies.customerMail}{policy.customerMail}</label> 
                </td>
                <td>
                  <label>Müşteri Numarası</label>
                </td>
                <td>
                <label className='police-ozet-ayrı'>{policies.customerNumber}{policy.customerNumber}</label>
                </td>
                </tr>
            <tr>
                <td>
                <label>Müşteri Adresi</label> 

                </td>
                <td>
                <label className='police-ozet-ayrı7'>{policies.customerAdress}{policy.customerAdress}</label>

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
         

           </>

        ))}

               
           
        </table>
         
      
        <span className='step5-teklif2'>Ödeme Bilgileri</span>
        <div className='police-bos'></div>
            <table className='police-ozet-table2'>
                <tr>
                    <td>

                    </td>
                </tr>
                {policies.map(policy => (
          <>
          <tr>
                <td>
                    <label>Kart Numarası:</label>
                </td>
                <td>
                    <label>{policies.customerCardNo}{policy.customerCardNo}  </label>         
                </td>
             </tr>
             <tr>
                <td>
                    <label>Kart Sahibi Ad Soyad:</label>
                </td>
                <td>
                <label>{policies.customerCardName}{policy.customerCardName}  </label>         

                </td>
             </tr> 
             <tr>
                <td>
                    <label>Kart Güvenlik Numarası</label>
                </td>
                <td>
                <label>{policies.cardCvv}{policy.cardCvv}  </label>         
                </td>
            </tr> 
            <tr>
              <td>
                  <label>Kart Son Kullanım Tarihi</label>
              </td>
              <td>
              <label>{policies.cardSkt}{policy.cardSkt} </label>         

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
          </>
        ))}
               
            </table>

    
    </div>
  )
}

export default PoliceOzet