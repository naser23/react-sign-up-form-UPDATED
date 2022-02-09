import React from 'react';
import FirstName from './forms/FirstName';
import LastName from './forms/LastName';
import Email from './forms/Email';
import PhoneNumber from './forms/PhoneNumber';
import PassWord from './forms/PassWord';
import ConfirmPassWord from './forms/ConfirmPassWord';

function FormArea() {
  return <div className="form-area">
     <h3>Let's Do This!</h3>
     <div className="form-space">
        <FirstName />
        <LastName />
        <Email />
        <PhoneNumber />
        <PassWord />
        <ConfirmPassWord />
     </div>
  </div>;
}

export default FormArea;
