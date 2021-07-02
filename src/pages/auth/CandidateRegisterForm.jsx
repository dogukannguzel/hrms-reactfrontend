import { Formik,Form } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'


import * as Yup from "yup"
import { useHistory } from 'react-router-dom';
import { candidateRegisterApi } from '../../store/actions/candidateAction';
import DGTextInput from './../toolBox/customFormControls/DGTextInput';
import { Button } from 'semantic-ui-react';
const CandidateRegisterForm = () => {




  const dispatch = useDispatch()
  const history = useHistory()

  const candidateRegister = (candidate) => {
    console.log("candidate")
    dispatch(candidateRegisterApi(candidate))
  }


  const candidateRegisterSuccess = (result) => {
    if (result.data?.success) {
      toast.success(result.data.message)
      history.push("/login")
    }
  }

  const initialValues={
    firstName: '',
    lastName: '',
    email: "",
    identificationNumber: '',
    birthDate: '',
    password: '',
    confirmPassword: ''
  }


   
   const  validationSchema= Yup.object({
      firstName: Yup.string().required("İsim Alanı Zorunlu"),
      lastName: Yup.string().required("Soyad Alanı Zorunlu"),
      email: Yup.string().email("E mail dorğu formatte giriniz"),
      identificationNumber: Yup.number().required("İdentity Number alanı boş geçilemez"),
      password: Yup.string().required("Password alanı boş geçilemez"),
      confirmPassword: Yup.string().required("Password alanı boş geçilemez"),
      birthDate: Yup.date().required("Doğum tarihi alanı boş geçilemez")
    })
  





  return (
    <div>



      <div className="registration-form" >
        <Formik
         initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values)=>{
            candidateRegister(values)
          }}
          >

          <Form className="ui form" >

          <DGTextInput name="firstName" label="First Name"   />
          <DGTextInput  name="lastName" label="Last Name" />
          <DGTextInput name="email"  label="Email" />
          <DGTextInput name="birthDate" label="Birth Date" type="date"/>
          <DGTextInput name="identificationNumber" label="İdentification Number" />
          <DGTextInput  name="password" type="password" label="password" />
          <DGTextInput  name="confirmPassword" type="password"  label="Confirm Password" />
          <Button color="blue" type="submit" >Kayıt Ol</Button>
          </Form>


        </Formik>

      </div>
      </div>








  );
}

export default CandidateRegisterForm;
