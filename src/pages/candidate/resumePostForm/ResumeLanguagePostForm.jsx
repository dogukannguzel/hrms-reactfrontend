import { useFormik, Formik, Form } from 'formik';
import React, { useState } from 'react';
import { Input, Button, Header } from 'semantic-ui-react'
import * as Yup from "yup"
import LanguageService from '../../../services/cv/languageService';
import { toast } from 'react-toastify'
import DGTextInput from '../../toolBox/customFormControls/DGTextInput';
import { useDispatch } from 'react-redux';
import { saveResumeLanguageApi } from './../../../store/actions/languageAction';

const ResumeLanguagePostForm = ({ enable }) => {

const dispatch = useDispatch()


   const handleSave=(language)=>{
       language.resumeId=81
       console.log(language)
        dispatch(saveResumeLanguageApi(language))
    }


    const initialValues = {
        language: '',
        langLevel: '',
        resumeId: 0,
    }

    const schema = Yup.object({
        language: Yup.string().required("Yabancı Dil adı boş bırakılamaz"),
        langLevel: Yup.string().required("Dil seviyesi boş bırakılamaz")
    })
    

    const enableTrue = () => {
        return (
            <div className="resume-form">
                <Header as="h3" icon="save" content="Language Add" />

                <Formik

            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values)=>{
                handleSave(values)
            }}
                >
                    <Form  className="ui form" >

                    
                            <DGTextInput
                                id='form-input-control-language-name'
                                label='Language'
                                name="language"/>
                            <DGTextInput
                                id='form-input-control-language-deegre'
                                label='Deegre'
                                name="langLevel"
                                />

                      



                        <Button color="green" type="submit" >+ Language </Button>
                    </Form>
                </Formik>


            </div>
        )
    }

    return (
        <div>
            {enable ? enableTrue() : null}
        </div>
    );
}

export default ResumeLanguagePostForm;
