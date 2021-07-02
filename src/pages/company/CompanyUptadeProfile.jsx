import React from 'react';
import { useParams } from 'react-router';
import * as Yup from "yup"
import { Formik, Form } from 'formik';
import DGTextInput from './../toolBox/customFormControls/DGTextInput';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCompanyById, companyUptadeApi } from './../../store/actions/companyActions';
import { Button, Header } from 'semantic-ui-react';
const CompanyUptadeProfile = () => {

    const { id } = useParams()

    useEffect(() => {
        dispatch(getAllCompanyById(id))
    }, [])

    const dispatch = useDispatch()
    const companys = useSelector(state => state.companys)


    const handleSave = (company) => {
        company.id=68
        console.log(company)
        dispatch(companyUptadeApi(company))
    }

    const initialValues = {
        companyName: companys.companyName,
        webAddress: companys.webAddress,
        phoneNumber: companys.phoneNumber,
        email: companys.email,
        
    }










    return (
        <div className="company-uptade-form">
            <Header as="h3" icon="edit" content={companys.companyName + " Uptade Profile"} />
            {
                companys.companyName ? <Formik
                    initialValues={initialValues}

                    onSubmit={(values) => {
                        handleSave(values)
                    }}
                >
                    <Form className="ui form">
                        <DGTextInput label="Company Name" name="companyName" placeHolder="Company Name" />
                        <DGTextInput label="Web Address" name="webAddress" placeHolder="webAddress" />
                        <DGTextInput label="Phone Number" name="phoneNumber" placeHolder="phoneNumber" />
                        <DGTextInput label="Email" type="email" name="email" placeHolder="email" />
                        <Button color="green">Uptade</Button>
                    </Form>

                </Formik> : null
            }
        </div>
    );
}

export default CompanyUptadeProfile;
