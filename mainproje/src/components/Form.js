import React, { useState } from 'react'
import {useFormik} from 'formik';
import '../Styles/Form.css';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import HomeIcon from '@mui/icons-material/Home';
import AddHomeIcon from '@mui/icons-material/AddHome';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import LocalHospital from '@mui/icons-material/LocalHospital';
import "react-datepicker/dist/react-datepicker.css";
import { Link, Route, Router, Routes, useNavigate } from 'react-router-dom';



export const Form = () => {
    
    const {values,handleChange} = useFormik({
        initialValues:{
            tc:'',
            no:'',
        },
       
    });

    const navigate = useNavigate()

  return (
    <form>
      
        
        <div className='form'>
            
        <div className='ust-kasko'>
       <Link to=""> <DirectionsCar/>Kasko</Link>
        </div>
        <div className='ust-air'>
        <Link to="/"> <AirplanemodeActiveIcon/>Seyahat Sağlık</Link>
        </div>
            <div className='ust-host'>
            <Link to="/">    <LocalHospital/>Tanımlayıcı Sağlık Sigortası</Link>
            </div>
            <div className='ust-home'>
            <Link to="/">    <HomeIcon/>Konut Sigortası</Link> 
            </div>
            <div className='ust-dask'>
              <Link to="/">  <AddHomeIcon/>Dask</Link>
                </div>
                <div/>
           

        <div className='title'>
              <p>Seyahat Sağlık Sigortası Teklifi Al</p>
        </div>
      
       
        <div className='form-control2'>
             <label>Gidiş Tarihi </label>
            <input className='form-control2' type='date'/>
             </div>
            <div className='form-control2'>
                <label>Dönüş Tarihi</label>
            <input className='form-control2' type='date'/>
            </div>
           <div className='form-control'>
            <label>Ülke</label>
           <select
            name="Country"
             class="form-control">
              <option value="">Seçiniz</option>
               <option value="003">ABD</option>
                <option value="256">Abidjan</option>
                 <option value="185">Afganistan</option>
                  <option value="002">Almanya</option>
                   <option value="K01">Almanya'nın Baltık Limanları</option>
                    <option value="216">Andora</option>
                     <option value="004">Angola</option>
                      <option value="177">Antarktika</option>
                       <option value="178">Antigua Barbuda</option>
                        <option value="005">Arjantin</option>
                         <option value="006">Arnavutluk</option>
                          <option value="007">Avustralya</option>
                           <option value="008">Avusturya</option>
                            <option value="009">Azerbaycan</option>
                             <option value="019">Bae</option>
                              <option value="010">Bahamalar</option>
                               <option value="011">Bahreyn</option>
                                <option value="012">Bangladeş</option>
                                 <option value="013">Barbados</option>
                                  <option value="195">Batı Sahra</option>
                                  <option value="014">Belçika</option>
                                   <option value="015">Belize</option>
                                    <option value="016">Benin</option>
                                     <option value="181">Bermuda</option>
                                      <option value="017">Beyaz Rusya</option>
                                       <option value="018">Bhutan</option>
                                        <option value="020">Bolivya</option>
                                         <option value="021">Bosna-Hersek</option>
                                          <option value="190">Botsvana</option>
                                           <option value="022">Brezilya</option>
                                            <option value="024">Brunei</option>
                                             <option value="023">Bulgaristan</option>
                                              <option value="191">Burkina Faso</option>
                                               <option value="K02">Burma</option>
                                                <option value="025">Burundi</option>
                                                 <option value="197">Butan</option>
                                                  <option value="028">Çad</option> 
                                                  <option value="183">Cayman Adaları</option>
                                                   <option value="029">Çekya</option>
                                                    <option value="026">Cezayir</option>
                                                     <option value="027">Cibuti</option>
                                                      <option value="030">Çin</option> 
                                                      <option value="199">Cook Adaları</option>
                                                       <option value="031">Danimarka</option> 
                                                       <option value="033">Dominik Cumhuriyeti</option>
                                                        <option value="034">Ekvator</option>
                                                         <option value="035">Ekvator Ginesi</option>
                                                          <option value="036">El Salvador</option>
                                                           <option value="037">Endonezya</option> 
                                                           <option value="192">Eritre</option>
                                                            <option value="038">Ermenistan</option> 
                                                            <option value="039">Estonya</option>
                                                             <option value="040">Etiyopya</option>
                                                              <option value="186">Faroe Adaları</option>
                                                               <option value="041">Fas</option> 
                                                               <option value="K03">Fas'ın Atlantik Sahili</option>
                                                                <option value="042">Fiji</option>
                                                                 <option value="189">Fildişi Sahilleri</option>
                                                                  <option value="043">Filipinler</option>
                                                                   <option value="044">Finlandiya</option>
                                                                    <option value="045">Fransa</option>
                                                                     <option value="K04">Fransa'nın Atlantik Sahili Limanları</option>
                                                                      <option value="046">Gabon</option>
                                                                       <option value="047">Gambiya</option>
                                                                        <option value="048">Gana</option>
                                                                         <option value="184">Gibraltar</option>
                                                                          <option value="049">Gine</option> 
                                                                          <option value="194">Gine Bissau</option>
                                                                           <option value="050">Grenada</option>
                                                                            <option value="188">Grönland</option>
                                                                             <option value="200">Guam</option> 
                                                                             <option value="051">Guatemala</option>
                                                                              <option value="231">Guernsey</option>
                                                                               <option value="052">Güney Afrika</option>
                                                                                <option value="053">Güney Kıbrıs</option>
                                                                                 <option value="054">Güney Kore</option>
                                                                                  <option value="254">Güney Sudan</option>
                                                                                   <option value="055">Gürcistan</option> 
                                                                                   <option value="187">Guyana</option> 
                                                                                   <option value="056">Haiti</option>
                                                                                    <option value="057">Hindistan</option>
                                                                                     <option value="058">Hırvatistan</option>
                                                                                      <option value="059">Hollanda</option>
                                                                                       <option value="182">Hollanda Antili</option>
                                                                                        <option value="060">Honduras</option>
                                                                                         <option value="K05">Hong Kong</option>
                                                                                          <option value="062">İngiltere</option> 
                                                                                          <option value="063">Irak</option>
                                                                                           <option value="066">İrlanda</option> 
                                                                                           <option value="065">İskoçya</option>
                                                                                            <option value="067">İspanya</option> 
                                                                                            <option value="068">İsrail</option>
                                                                                             <option value="069">İsveç</option>
                                                                                              <option value="070">İsviçre</option>
                                                                                               <option value="071">İtalya</option>
                                                                                                <option value="072">İzlanda</option>
                                                                                                 <option value="073">Jamaika</option> 
                                                                                                 <option value="074">Japonya</option>
                                                                                                  <option value="233">Jersey</option>
                                                                                                   <option value="081">K.K.T.C.</option>
                                                                                                    <option value="075">Kamboçya</option>
                                                                                                     <option value="076">Kamerun</option>
                                                                                                      <option value="077">Kanada</option> 
                                                                                                      <option value="179">Kanarya Adaları</option>
                                                                                                       <option value="255">Karadağ</option>
                                                                                                        <option value="078">Katar</option>
                                                                                                         <option value="079">Kazakistan</option>
                                                                                                          <option value="080">Kenya</option>
                                                                                                           <option value="083">Kiribati</option>
                                                                                                            <option value="082">Kırgızistan</option>
                                                                                                             <option value="084">Kolombiya</option>
                                                                                                              <option value="085">Komor Adaları</option>
                                                                                                               <option value="086">Kongo</option>
                                                                                                                <option value="300">Kosova</option>
                                                                                                                 <option value="K06">Kosova</option>
                                                                                                                  <option value="087">Kosta Rika</option>
                                                                                                                   <option value="090">Küba</option>
                                                                                                                    <option value="089">Kuveyt</option>
                                                                                                                     <option value="K07">Kuzey İrlanda</option> 
                                                                                                                     <option value="088">Kuzey Kore</option>
                                                                                                                      <option value="091">Laos</option> 
                                                                                                                      <option value="092">Lesotho</option> 
                                                                                                                      <option value="093">Letonya</option>
                                                                                                                       <option value="094">Liberya</option>
                                                                                                                        <option value="095">Libya</option>
                                                                                                                         <option value="217">Lihtenştayn</option>
                                                                                                                          <option value="096">Litvanya</option>
                                                                                                                           <option value="097">Lübnan</option> 
                                                                                                                           <option value="098">Lüksemburg</option>
                                                                                                                            <option value="099">Macaristan</option>
                                                                                                                             <option value="100">Madagaskar</option>
                                                                                                                              <option value="101">Makedonya</option>
                                                                                                                               <option value="102">Malavi</option>
                                                                                                                                <option value="103">Maldiv Adaları</option>
                                                                                                                                 <option value="104">Malezya</option>
                                                                                                                                  <option value="105">Mali</option>
                                                                                                                                   <option value="106">Malta</option> 
                                                                                                                                   <option value="220">Man Adası</option>
                                                                                                                                    <option value="180">Marshall Adaları</option> 
                                                                                                                                    <option value="235">Martinik</option>
                                                                                                                                     <option value="107">Mauritus</option>
                                                                                                                                      <option value="108">Meksika</option>
                                                                                                                                       <option value="109">Mısır</option>
                                                                                                                                        <option value="110">Moğolistan</option>
                                                                                                                                         <option value="111">Moldovya</option>
                                                                                                                                          <option value="218">Monako</option>
                                                                                                                                           <option value="236">Montserrat</option>
                                                                                                                                            <option value="112">Moritanya</option>
                                                                                                                                             <option value="113">Mozambik</option>
                                                                                                                                              <option value="196">Myanmar</option>
                                                                                                                                               <option value="114">Namibya</option> 
                                                                                                                                               <option value="115">Nepal</option>
                                                                                                                                                <option value="116">Nijer</option>
                                                                                                                                                 <option value="117">Nijerya</option>
                                                                                                                                                  <option value="118">Nikaragua</option>
                                                                                                                                                   <option value="119">Norveç</option>
                                                                                                                                                    <option value="120">Orta Afrika Cumhuriyeti</option>
                                                                                                                                                     <option value="121">Özbekistan</option>
                                                                                                                                                      <option value="122">Pakistan</option>
                                                                                                                                                       <option value="202">Palau</option>
                                                                                                                                                        <option value="123">Panama</option>
                                                                                                                                                         <option value="124">Papua Yeni Gine</option>
                                                                                                                                                          <option value="125">Paraguay</option> 
                                                                                                                                                          <option value="126">Peru</option> 
                                                                                                                                                          <option value="127">Polonya</option>
                                                                                                                                                           <option value="128">Portekiz</option> 
                                                                                                                                                           <option value="209">Porto Riko</option>
                                                                                                                                                            <option value="198">Reunion</option>
                                                                                                                                                             <option value="129">Romanya</option>
                                                                                                                                                              <option value="130">Ruanda</option>
                                                                                                                                                               <option value="131">Rusya</option>
                                                                                                                                                                <option value="K08">Rusya Baltık Limanları</option>
                                                                                                                                                                 <option value="K09">S.arabistan Limanları</option>
                                                                                                                                                                  <option value="210">Saint Kitts Ve Nevis</option>
                                                                                                                                                                   <option value="211">Saint Lucia</option>
                                                                                                                                                                    <option value="175">Saint Vincent Ve Grenadinler</option>
                                                                                                                                                                     <option value="203">Samoa</option>
                                                                                                                                                                      <option value="K10">San Marino</option>
                                                                                                                                                                       <option value="132">Sao Tome Principe</option>
                                                                                                                                                                        <option value="133">Senegal</option> 
                                                                                                                                                                        <option value="134">Seyşel Adaları</option>
                                                                                                                                                                         <option value="135">Sierra Leone</option>
                                                                                                                                                                          <option value="147">Şili</option>
                                                                                                                                                                           <option value="136">Singapur</option> 
                                                                                                                                                                           <option value="168">Sırbistan</option>
                                                                                                                                                                            <option value="137">Slovakya</option> 
                                                                                                                                                                            <option value="138">Slovenya</option> 
                                                                                                                                                                            <option value="139">Solomon Adaları</option> 
                                                                                                                                                                            <option value="140">Somali</option> 
                                                                                                                                                                            <option value="141">Sri Lanka</option>
                                                                                                                                                                             <option value="142">Sudan</option> 
                                                                                                                                                                             <option value="143">Surinam</option> 
                                                                                                                                                                             <option value="144">Suriye</option> 
                                                                                                                                                                             <option value="145">Suudi Arabistan</option> 
                                                                                                                                                                             <option value="146">Svaziland</option> 
                                                                                                                                                                             <option value="148">Tacikistan</option> 
                                                                                                                                                                             <option value="301">Tahiti</option> 
                                                                                                                                                                             <option value="K11">Tahıtı</option> 
                                                                                                                                                                             <option value="149">Tanzanya</option> 
                                                                                                                                                                             <option value="150">Tayland</option> 
                                                                                                                                                                             <option value="151">Tayvan</option> 
                                                                                                                                                                             <option value="152">Togo</option> 
                                                                                                                                                                            <option value="204">Tokelau</option>
                                                                                                                                                                                 <option value="153">Tonga</option>
                                                                                                                                                                                  <option value="154">Trinidad Ve Tobago</option>
                                                                                                                                                                                   <option value="155">Tunus</option>
                                                                                                                                                                                    <option value="001">Türkiye</option>
                                                                                                                                                                                     <option value="157">Türkmenistan</option>
                                                                                                                                                                                      <option value="214">Turks Ve Caicos Adaları</option>
                                                                                                                                                                                       <option value="249">Tuvalu</option>
                                                                                                                                                                                        <option value="158">Uganda</option>
                                                                                                                                                                                         <option value="159">Ukrayna</option>
                                                                                                                                                                                          <option value="160">Umman</option>
                                                                                                                                                                                           <option value="162">Ürdün</option>
                                                                                                                                                                                            <option value="161">Uruguay</option>
                                                                                                                                                                                             <option value="163">Vanuatu</option>
                                                                                                                                                                                              <option value="219">Vatikan</option>
                                                                                                                                                                                               <option value="164">Venezüella</option>
                                                                                                                                                                                                <option value="165">Vietnam</option>
                                                                                                                                                                                                 <option value="215">Virgin Adaları</option>
                                                                                                                                                                                                  <option value="206">Wallis Ve Futuna</option>
                                                                                                                                                                                                   <option value="166">Yemen</option>
                                                                                                                                                                                                    <option value="201">Yeni Kaledonya</option>
                                                                                                                                                                                                     <option value="167">Yeni Zelanda</option>
                                                                                                                                                                                                      <option value="193">Yeşil Burun Adaları</option>
                                                                                                                                                                                                       <option value="999">Yok</option>
                                                                                                                                                                                                        <option value="K12">Yugoslavya</option>
                                                                                                                                                                                                         <option value="169">Yunanistan</option>
                                                                                                                                                                                                          <option value="000">Yurt İçi</option>
                                                                                                                                                                                                           <option value="170">Zambiya</option>
                                                                                                                                                                                                            <option value="174">Zimbabve</option>
            </select>
            </div>
            


            <div className='form-control'>
            <label>T.C Kimlik No</label>
            <input className='form-control' type='text' value={values.tc} id='tc' placeholder='T.C Kimlik No' onChange={handleChange} /></div>
            <div className='form-control'>
            <label>Cep Telefonu</label>
            <input className='form-control' type='text' value={values.no} id='no' placeholder='Cep Telefonu (5xxxxxxxx)' onChange={handleChange}/>
            </div>
            <div className='form-control2'>
            <label>Doğum Tarihi</label>
            <input className='form-control2' type='date' placeholder='Doğum Tarihi'/></div>
            <button onClick={()=>navigate("/Inform")} className='btn'>Teklif Al</button>
           </div>
    </form>
    
  )
}
