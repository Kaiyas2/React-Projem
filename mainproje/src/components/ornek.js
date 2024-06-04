import React, { useState } from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import { Stepper } from 'react-form-stepper';
import { Saglık } from './Saglık';
import PoliceOzet from './PoliceOzet';

function Ornek() {


    const [activeStep, setactiveStep] = useState(0);

    const stepartir= (e) =>{
      
      setactiveStep(activeStep => activeStep + 1);
      
    }

  return (
   
    <div >
      <Stepper
        steps={[{ label: 'Sağlık' },{ label: 'Sigortalı Bilgileri' }, { label: 'Aile Üyeleri' }, 
        { label: 'Teklif' }, { label: 'Beyan' }, 
        { label: 'Ödeme' }, 
        { label: 'Police Görüntüleme'}]}
        activeStep={activeStep}  
      />
      {activeStep === 0 && <Saglık onNext={stepartir} />}
      {activeStep === 1 && <Step1 onNext={stepartir} />}
      {activeStep === 2 && <Step2 onNext={stepartir} />}
      {activeStep === 3 && <Step3 onNext={stepartir} />}
      {activeStep === 4 && <Step4 onNext={stepartir} />}
      {activeStep === 5 && <Step5 onNext={stepartir} />}
      {activeStep === 6 && <PoliceOzet onNext={stepartir} />}
    
      
    </div>
  )
}

export default Ornek;