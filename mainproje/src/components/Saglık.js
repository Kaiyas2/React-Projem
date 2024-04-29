import React from 'react'
import saglıkresim from '../resim/content-2343-ea7ea781-e31f-4adc-ae1d-537b0d37b95a_960x720.jpg';
import '../Styles/Saglık.css';

export const Saglık = () => {
  return (
    <div>
        <div className='genel-bos'>
        <div className='saglık-yazı'>
            <label><h1>Quick</h1></label>
            <label>Tamamlayıcı Sağlık Sigortası</label>
            <p className='saglık-yazı'>Şehrin en iyi hastanesi bana yeter</p>
            <p className='saglık-yazı'>Farkı Quick öder.</p>
            
        <div className='saglık-btn-genel'>
        <button className='saglık-btn'>Avantajlar</button>
        <button className='saglık-btn2'>Ek Hizmetler</button>
        <button className='saglık-btn3'>Teminatlar</button>
        <button className='saglık-btn4'>Merak Ettikleriniz</button>
        </div>
        </div>
        </div>
        <div className='saglık-input'>
            <label className='saglık-lol'>Cinsiyet</label>
             <select >
            <option value="">Seçiniz</option>
            <option value="01">Erkek</option>
            <option value="02">Kadın</option>
            
        </select>
        <label className='saglık-lol'>Aile Üyesi Ekleyiniz</label>
        <select>
            <option value="">Seçiniz</option>
            <option value="01"> <label>Kendim</label></option>
            <option value="02"> <label>Eşim</label></option>
            <option value="03"> <label>Kızım</label></option>
            <option value="04"> <label>Oğlum</label></option>
           
        </select>
        <label className='saglık-lol'>Yaşınız</label>
        <input className='saglık-lol-yas' type='number'/>
        <label className='saglık-lol'>Şehir</label>
        <select>
        <option value="">Seçiniz</option>
                                        
                                        <option value="1">ADANA</option>
                                    
                                    
                                        <option value="2">ADIYAMAN</option>
                                    
                                    
                                        <option value="3">AFYONKARAHİSAR</option>
                                    
                                    
                                        <option value="4">AĞRI</option>
                                    
                                    
                                        <option value="5">AMASYA</option>
                                    
                                    
                                        <option value="6">ANKARA</option>
                                    
                                    
                                        <option value="7">ANTALYA</option>
                                    
                                    
                                        <option value="8">ARTVİN</option>
                                    
                                    
                                        <option value="9">AYDIN</option>
                                    
                                    
                                        <option value="10">BALIKESİR</option>
                                    
                                    
                                        <option value="11">BİLECİK</option>
                                    
                                    
                                        <option value="12">BİNGÖL</option>
                                    
                                    
                                        <option value="13">BİTLİS</option>
                                    
                                    
                                        <option value="14">BOLU</option>
                                    
                                    
                                        <option value="15">BURDUR</option>
                                    
                                    
                                        <option value="16">BURSA</option>
                                    
                                    
                                        <option value="17">ÇANAKKALE</option>
                                    
                                    
                                        <option value="18">ÇANKIRI</option>
                                    
                                    
                                        <option value="19">ÇORUM</option>
                                    
                                    
                                        <option value="20">DENİZLİ</option>
                                    
                                    
                                        <option value="21">DİYARBAKIR</option>
                                    
                                    
                                        <option value="22">EDİRNE</option>
                                    
                                    
                                        <option value="23">ELAZIĞ</option>
                                    
                                    
                                        <option value="24">ERZİNCAN</option>
                                    
                                    
                                        <option value="25">ERZURUM</option>
                                    
                                    
                                        <option value="26">ESKİŞEHİR</option>
                                    
                                    
                                        <option value="27">GAZİANTEP</option>
                                    
                                    
                                        <option value="28">GİRESUN</option>
                                    
                                    
                                        <option value="29">GÜMÜŞHANE</option>
                                    
                                    
                                        <option value="30">HAKKARİ</option>
                                    
                                    
                                        <option value="31">HATAY</option>
                                    
                                    
                                        <option value="32">ISPARTA</option>
                                    
                                    
                                        <option value="33">MERSİN</option>
                                    
                                    
                                        <option value="34">İSTANBUL</option>
                                    
                                    
                                        <option value="35">İZMİR</option>
                                    
                                    
                                        <option value="36">KARS</option>
                                    
                                    
                                        <option value="37">KASTAMONU</option>
                                    
                                    
                                        <option value="38">KAYSERİ</option>
                                    
                                    
                                        <option value="39">KIRKLARELİ</option>
                                    
                                    
                                        <option value="40">KIRŞEHİR</option>
                                    
                                    
                                        <option value="41">KOCAELİ</option>
                                    
                                    
                                        <option value="42">KONYA</option>
                                    
                                    
                                        <option value="43">KÜTAHYA</option>
                                    
                                    
                                        <option value="44">MALATYA</option>
                                    
                                    
                                        <option value="45">MANİSA</option>
                                    
                                    
                                        <option value="46">KAHRAMANMARAŞ</option>
                                    
                                    
                                        <option value="47">MARDİN</option>
                                    
                                    
                                        <option value="48">MUĞLA</option>
                                    
                                    
                                        <option value="49">MUŞ</option>
                                    
                                    
                                        <option value="50">NEVŞEHİR</option>
                                    
                                    
                                        <option value="51">NİĞDE</option>
                                    
                                    
                                        <option value="52">ORDU</option>
                                    
                                    
                                        <option value="53">RİZE</option>
                                    
                                    
                                        <option value="54">SAKARYA</option>
                                    
                                    
                                        <option value="55">SAMSUN</option>
                                    
                                    
                                        <option value="56">SİİRT</option>
                                    
                                    
                                        <option value="57">SİNOP</option>
                                    
                                    
                                        <option value="58">SİVAS</option>
                                    
                                    
                                        <option value="59">TEKİRDAĞ</option>
                                    
                                    
                                        <option value="60">TOKAT</option>
                                    
                                    
                                        <option value="61">TRABZON</option>
                                    
                                    
                                        <option value="62">TUNCELİ</option>
                                    
                                    
                                        <option value="63">ŞANLIURFA</option>
                                    
                                    
                                        <option value="64">UŞAK</option>
                                    
                                    
                                        <option value="65">VAN</option>
                                    
                                    
                                        <option value="66">YOZGAT</option>
                                    
                                    
                                        <option value="67">ZONGULDAK</option>
                                    
                                    
                                        <option value="68">AKSARAY</option>
                                    
                                    
                                        <option value="69">BAYBURT</option>
                                    
                                    
                                        <option value="70">KARAMAN</option>
                                    
                                    
                                        <option value="71">KIRIKKALE</option>
                                    
                                    
                                        <option value="72">BATMAN</option>
                                    
                                    
                                        <option value="73">ŞIRNAK</option>
                                    
                                    
                                        <option value="74">BARTIN</option>
                                    
                                    
                                        <option value="75">ARDAHAN</option>
                                    
                                    
                                        <option value="76">IĞDIR</option>
                                    
                                    
                                        <option value="77">YALOVA</option>
                                    
                                    
                                        <option value="78">KARABÜK</option>
                                    
                                    
                                        <option value="79">KİLİS</option>
                                    
                                    
                                        <option value="80">OSMANİYE</option>
                                    
                                    
                                        <option value="81">DÜZCE</option>
                                    
                           
        </select>
        <button className='saglık-fiyat-btn'>Fiyatı Gör</button>
         </div>
        
       
       
        <div className='kücük-yan-resim'>
            <img src={saglıkresim} style={{width:450,height:450}}/>
            
        </div>
    </div>
  )
}
