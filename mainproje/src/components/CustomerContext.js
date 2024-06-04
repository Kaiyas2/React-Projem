import React, { createContext, useContext, useState } from 'react';

const CustomerContext = createContext();

export const useCustomer = () => useContext(CustomerContext);

export const CustomerProvider = ({ children }) => {
  const [customerData, setCustomerData] = useState(null);
  const [step1Data, setStep1Data] = useState({});
  const [selectedPaketData, setSelectedPaketData] = useState({ label: null, price: null });
  const [ saglikData, setsaglikData] = useState();


  const [step4Data, setStep4Data] = useState({
    checkboxStates: {
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
    },
    textfieldValues: {
      textfield1: "",
      textfield2: "",
      textfield3: "",
      textfield4: "",
      textfield5: "",
      textfield6: "",
      textfield7: "",
      textfield8: "",
      textfield9: "",
      textfield10: "",
      textfield11: "",
      textfield12: "",
      textfield13: ""
    }
  });
  const [activeStep, setActiveStep] = useState(0);

  const setCustomer = (data) => {
    setCustomerData(data);
  };

  const saveDataToDatabase = () => {
    console.log("Müşteri verileri:", customerData);
    console.log("Step 1 verileri:", step1Data);
    console.log("Step 4 verileri:", step4Data);
    console.log("Sağlık verileri:", saglikData);
  };

  return (
    <CustomerContext.Provider value={{ customerData, setCustomer, saglikData, setsaglikData,step1Data,selectedPaketData, setSelectedPaketData ,setStep1Data, step4Data, setStep4Data, saveDataToDatabase, activeStep, setActiveStep, }}>
      {children}
    </CustomerContext.Provider>
  );
};
