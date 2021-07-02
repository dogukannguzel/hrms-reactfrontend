import { Formik,Form } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import * as Yup from "yup"
import { companyRegisterApi } from '../../store/actions/companyActions';
import DGTextInput from './../toolBox/customFormControls/DGTextInput';

const CompanyRegister = () => {
    const dispatch = useDispatch()


    const companyRegister = (company) => {
        dispatch(companyRegisterApi(company))


    }

    const initialValues={
        companyName: '',
        webAddress: '',
        phoneNumber: "",
        email: '',
        password: '',
        confirmPassword: ''
    }



    const validationSchema= Yup.object({
        companyName: Yup.string().required("Şirket Adı Alanı Zorunlu"),
        webAddress: Yup.string().required("Web Adresi Alanı Zorunlu").url("Web sitenizi url formatında giriniz"),
        email: Yup.string().email("E mail dorğu formatte giriniz"),
        phoneNumber: Yup.number().required("Telefon Numarası Alanı Zorunludur"),
        password: Yup.string().required("Password alanı boş geçilemez"),
        confirmPassword: Yup.string().required("Password alanı boş geçilemez"),

    })





    return (

        <div className="registration-form" >
         <Formik
         initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values)=>{
            companyRegister(values)
          }}
          >

          <Form className="ui form" >

          <DGTextInput name="companyName" label="Company Name"   />
          <DGTextInput  name="webAddress" type="url" label="Web Address" />
          <DGTextInput name="email"  label="Email" />
          <DGTextInput name="phoneNumber" label="Phone Number" />
          <DGTextInput  name="password" type="password" label="password" />
          <DGTextInput  name="confirmPassword" type="password"  label="Confirm Password" />
          <Button color="blue" type="submit" >Kayıt Ol</Button>
          </Form>


        </Formik>

            

        </div>







    );
}

export default CompanyRegister;
