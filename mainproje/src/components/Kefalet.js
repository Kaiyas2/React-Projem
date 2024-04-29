import React from 'react'
import resim from '../resim/quick-kefalet-senedi.jpg';
import '../Styles/Kefalet.css';

function Kefalet() {
  return (
    <div className='resim'>
        <div className='kefalet-yazi'> </div>
        <div className='kefalet-yazi2'>
        <h1>Quick Sigorta
</h1>
        <h1>Kefalet Sigortası</h1>
    <p>Quick Sigorta, özellikle Kamu ihale süreçlerinde özel sektörün teminat ihtiyaçlarını karşılayabilmek,
         </p>
           <p> bankalar tarafından düzenlenen teminat mektuplarına alternatif yaratmak,
          bu şekilde kredi limitlerinin başka
           alanlarda </p>
           <p> kullanılmasını sağlamak üzere reel sektörün elini rahatlatmak adına özel sektöre
           önemli bir enstrüman kazandırdı.</p>
           <p>Türkiye’de bir ilk olarak firmalar ihalelere katılırken teminat mektubu yerine
             Quick Sigorta Kefalet Sigortası kapsamında</p>
             <p> düzenlenen kefalet senetlerini sunabiliyorlar.</p>
            </div>
             <div className='sag-bar'>
                <h3>Quick Sigorta'dan Bir İlk!</h3>
                <label>Banka teminat mektubu yerine geçecek kefalet sigortası uygulaması başladı.</label>
                <button className='sag-bar-btn1'>Hemen Başvur</button>
                <label>Quick Sigorta kefalet senetlerini online olarak teyit edebilirsiniz.</label>
                <button className='sag-bar-btn2'>Quick Sigorta Üzerinden Kayıt</button>
                <button className='sag-bar-btn2'>SBM Üzerinden Kayıt</button>
             </div>
    </div>
  )
}

export default Kefalet