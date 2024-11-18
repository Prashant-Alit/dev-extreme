import React, { useState, useCallback } from 'react';
import { Form, SimpleItem, GroupItem } from 'devextreme-react/form';
import notify from 'devextreme/ui/notify';

export const EmployeeLogin = () => {
  const [formInstance, setFormInstance] = useState(null);

  const employee = {
    name: '',
    email: '',
    officeID: null,
    hireDate: new Date(),
    password: '',
    confirmPassword: '',
    age: null,
  };

  const nameValidationRules = [
    { type: 'required', message: 'Name is required' },
    { type: 'pattern', pattern: /^[A-Z]/, message: 'Name must start with a capital letter' },
  ];

  const emailValidationRules = [
    { type: 'required', message: 'Email is required' },
    { type: 'email', message: 'Invalid email format' },
  ];

  const officeNumberValidationRules = [
    { type: 'required', message: 'Office Number is required' },
    { type: 'numeric', message: 'Must be a numeric value' },
  ];

  const ageValidationRules = [
    { type: 'required', message: 'Age is required' },
    { type: 'range', min: 18, max: 60, message: 'Age must be between 18 and 60' },
  ];

  const passwordValidationRules = [
    { type: 'required', message: 'Password is required' },
    { type: 'stringLength', min: 6, max: 20, message: 'Password must be 6-20 characters long' },
  ];

  const confirmPasswordValidationRules = [
    { type: 'compare', comparisonTarget: () => formInstance.option('formData').password, message: 'Passwords do not match' },
  ];

  const hireDateValidationRules = [
    { type: 'required', message: 'Hire date is required' },
    { 
      type: 'custom', 
      validationCallback: (e) => e.value <= new Date(),
      message: 'Hire date cannot be in the future',
    },
  ];

  const setFormRef = useCallback((form) => {
    if (form) {
      setFormInstance(form.instance);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInstance) {
      const validationResult = formInstance.validate();
      if (validationResult.isValid) {
        notify(`Form submitted: ${JSON.stringify(employee)}`, 'success', 2000);
      } else {
        notify('Please fix the errors before submitting.', 'error', 2000);
      }
    }
  };

  return (
    <div className="container">
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <Form ref={setFormRef} formData={employee} validationGroup="employeeForm">
          <SimpleItem dataField="name" validationRules={nameValidationRules} />
          <SimpleItem dataField="email" validationRules={emailValidationRules} />
          <SimpleItem dataField="officeID" validationRules={officeNumberValidationRules} />
          <SimpleItem dataField="age" validationRules={ageValidationRules} />
          <SimpleItem dataField="password" editorType="dxTextBox" editorOptions={{ mode: 'password' }} validationRules={passwordValidationRules} />
          <SimpleItem dataField="confirmPassword" editorType="dxTextBox" editorOptions={{ mode: 'password' }} validationRules={confirmPasswordValidationRules} />
          <SimpleItem dataField="hireDate" editorType="dxDateBox" validationRules={hireDateValidationRules} />
          <GroupItem>
            <SimpleItem>
              <button type="submit">Submit</button>
            </SimpleItem>
          </GroupItem>
        </Form>
      </form>
    </div>
  );
};


// export default EmployeeFo;
