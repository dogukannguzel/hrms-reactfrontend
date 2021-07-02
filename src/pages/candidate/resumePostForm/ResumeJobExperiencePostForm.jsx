import { useFormik, Formik, Form } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Input, Header, Button } from 'semantic-ui-react'
import * as Yup from "yup"
import JobExperience from '../../../services/cv/jobExperience';

import DGTextInput from '../../toolBox/customFormControls/DGTextInput';
import { saveResumeJobExperienceApi } from './../../../store/actions/jobExperienceAction';
const ResumeJobExperiencePostForm = ({ enable }) => {

  const dispatch = useDispatch()

  const handleSave = (jobExperience) => {
    jobExperience.resumeId = 81
  dispatch(saveResumeJobExperienceApi(jobExperience))
  }

  


  const initialValues = {
    corporatName: '',
    position: "",
    startedDate: '',
    resumeId: 23




  }



  const schema = Yup.object({
    corporatName: Yup.string().required("Şirket adı boş bırakılamaz"),
    position: Yup.string().required("Şirketteki Pozisyon adı boş bırakılamaz"),
    startedDate: Yup.string().required("Başlagıç tarihi boş bırakılamaz"),


  })




  const enableTrue = () => {
    return (
      <div className="resume-form" >
        <Header as="h3" icon="save" content="Job Experience Add" />


        <Formik
         initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values)=>{
            handleSave(values)
          }}
          >
          <Form className="ui form"  >


            <DGTextInput
              id='form-input-control'
              label='Corporat Name'
              name="corporatName"
            />
            <DGTextInput
              id='form-input-control'
              label='Position'
              name="position"
            />

            <DGTextInput
              id='form-textarea-control'
              type="date"
              label='Started Date'
              placeholder='Resume description .......'
              name="startedDate" />
            <DGTextInput
              id='form-textarea-control'
              type="date"
              label='Ended Date'
              placeholder='Resume description .......'
              name="endedDate"
            />


            <Button color="green" type="submit" >+ Job Experience </Button>
          </Form>
        </Formik>



      </div>
    )
  }


  return (
    <div >
      {enable ? enableTrue() : null}
    </div>
  );
}

export default ResumeJobExperiencePostForm;
