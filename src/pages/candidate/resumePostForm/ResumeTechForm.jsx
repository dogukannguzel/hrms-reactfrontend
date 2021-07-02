import {  Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Input, Header, Button } from 'semantic-ui-react'
import * as Yup from "yup"

import DGTextInput from '../../toolBox/customFormControls/DGTextInput';
import { saveResumeTechonologyApi } from './../../../store/actions/techonologyAction';
const ResumeTechForm = ({ enable }) => {


    const dispatch = useDispatch()

    const handleSave=(techonology)=>{
        techonology.resumeId=81
        dispatch(saveResumeTechonologyApi(techonology))
    }


    const initialValues = {
        techonologyDescription: '',
        resumeId: 0
    }

    const schema = Yup.object({
        techonologyDescription:Yup.string().required("Boş bırakılamaz")
    })


    const enableTrue = () => {
        return (
            <div className="resume-form"  >
                <Header as="h3" icon="save" content="Techology Add" />
                <Formik 
                initialValues={initialValues}
                 validationSchema={schema}
                 onSubmit={(values)=>{
                     handleSave(values)
                 }}
                 >

                    <Form className="ui form" >

                       
                            <DGTextInput
                                id='form-input-control-language-name'
                                control={Input}
                                label='Techonlogy Name'
                                name="techonologyDescription"
                            />


                     



                        <Button color="green" type="submit" >+ Techonology </Button>


                    </Form>
                </Formik>

            </div>
        )
    }


    return (
        <div   >
            {enable ? enableTrue() : null}
        </div>
    );
}

export default ResumeTechForm;
