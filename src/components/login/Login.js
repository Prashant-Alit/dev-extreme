import { useCallback, useState } from "react";
import { TextBox, Validator } from "devextreme-react"
import { RequiredRule } from "devextreme-react/cjs/validator"
import notify from 'devextreme/ui/notify';

import { CustomButton } from "../button";


export const Login = () => {
  const [inputValue, setInputValue] = useState();
  const [email, setEmailValue] = useState();
  const [password, setPassword] = useState()

  const handleInput = useCallback((e) => {
    setInputValue(e.value)
  }, [])

  const handlePasswordInput = useCallback((args) => {
    setPassword(args.value)
  }, [])

  const handleEmaiInput = useCallback((args) => {
    setEmailValue(args.value)
  }, [])

  const handleSubmit = () => {
    notify(`The Data is stored`);
  }

  return (
    <>
      <h1>Login  </h1>
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
      <div>
        <CustomButton handleSubmit={handleSubmit} />
      </div>
    </>
  )
}