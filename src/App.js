
import React, { useCallback, useMemo, useState } from 'react';
import 'devextreme/dist/css/dx.light.css';
import { TextBox } from 'devextreme-react/text-box';
import { Button } from 'devextreme-react/button';
import Validator, { RequiredRule } from 'devextreme-react/validator';
import { SelectBox } from 'devextreme-react/select-box'
 import notify from 'devextreme/ui/notify';

import "./App.css"

// const handleClick = (e) => {
//   const buttonText = e.component.option('text');
//   notify(`The ${capitalize(buttonText)} button was clicked`);
// };
// function capitalize(text) {
//   return text.charAt(0).toUpperCase() + text.slice(1);
// }

export default function App() {
  const [inputValue, setInputValue] = useState();
  const [email, setEmailValue] = useState();
  const [password, setPassword] = useState()
  const [showData,setShowData] = useState(false)

  const handleInput = (e) => {
    setInputValue(e.value)
  }

  const handlePasswordInput = (args) => {
    setPassword(args.value)
  }

  const handleEmaiInput = (args) => {
    setEmailValue(args.value)
  }

  const handleSubmit = () => {
    console.log("submit is clickd")
    setShowData(true)
    if (inputValue && email && password){
       notify(`The Data is stored`);
    } else {
      notify('something wnet wrong')
    }
  }

  return (
    <div className="buttons-demo">
      <div className="buttons">
        <div>
          <div className="buttons-column">
            <div>
              <TextBox className='inputBox' name='name' label='Name' labelMode='floating' onValueChanged={(e) => handleInput(e)} validationMessagePosition="right">
                <Validator>
                  <RequiredRule message="Name is required" />
                </Validator>
              </TextBox>
              <TextBox className='inputBox' name='email' label='Email' labelMode='floating' onValueChanged={(e) => handleEmaiInput(e)} validationMessagePosition="right">
                <Validator>
                  <RequiredRule message="Email is required" />
                </Validator>
              </TextBox>
              <TextBox className='inputBox' name='password' label='Passwod' labelMode='floating' onValueChanged={(e) => handlePasswordInput(e)} validationMessagePosition="right">
                <Validator>
                  <RequiredRule message="Password is required" />
                </Validator>
              </TextBox>

              <SelectBox
                className='inputBox'
                searchEnabled={true}
                displayExpr={"Name"}
                valueExpr={"ID"}
                showDropDownButton={true}
                label="Select name"
                labelMode="floating"
              />
              <div className='btn-container'>
                <Button
                  className='btn'
                  type="success"
                   text="Submit"
                   useSubmitBehavior={true}
                  onClick={handleSubmit}
                />
              </div>
            {showData ?  <div className='showData'>
              <h1 className='showData-items'>{inputValue}</h1>
              <h1 className='showData-items'>{email}</h1>
              <h1 className='showData-items'>{password}</h1>
             </div> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}