import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Header, } from 'semantic-ui-react'
import * as Yup from "yup"
import { saveResumeApi } from '../../../store/actions/resumeActions';
import DGTextInput from './../../toolBox/customFormControls/DGTextInput';
const CreateResumeForm = ({ onClick }) => {

  const dispatch = useDispatch()

  const handleSave = (resume) => {
    console.log(resume)
    dispatch(saveResumeApi(resume).then(result => console.log(result)))
  }

  const initialValues = {
    cvDescription: '',
    githubLink: '',
    linkedLink: '',
    candidateId: 33
  }


  const schema = Yup.object({
    cvDescription: Yup.string().required("Cv açıklama alanı zorunludur"),
    githubLink: Yup.string().url("Lütfen url formatında giriniz"),
    linkedLink: Yup.string().url("Lütfen url formatında giriniz")
  })




  return (
    <div className="resume-form" >
      <Header as="h3" icon="save" content="Resume Add" />

      <Formik
        initialValues={initialValues}
        validationSchema={schema}

        onSubmit={(values) => {
          handleSave(values)

        }}
      >
        <Form className="ui form"   >

          <DGTextInput
            name="githubLink"
            label="Github Link"
            
            id='form-input-control' />
          <DGTextInput
            name="linkedLink"
            label="Linkedin Link"
            id='form-input-control' />
          <DGTextInput
            name="cvDescription"
            label="Cv Description"
            id='form-input-control' />


          <Button color="green" >Create Resume</Button>
        </Form>



      </Formik>



    </div>
  );
}

export default CreateResumeForm;
