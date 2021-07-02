import { Formik, useFormik, Form } from 'formik';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Input, Button, Header } from 'semantic-ui-react'
import * as Yup from "yup"
import { saveResumeEducationApi } from '../../../store/actions/educationActions';

import { getGraduatesApi } from '../../../store/actions/graduateAction';
import DGSelectInput from '../../toolBox/customFormControls/DGSelectInput';
import DGTextInput from '../../toolBox/customFormControls/DGTextInput';

const ResumeEduPostForm = ({ enable, educations }) => {

  const graduates = useSelector(state => state.graduates)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGraduatesApi())
  }, [])


  const handleSave = (education) => {

    education.resumeId = 81
    dispatch(saveResumeEducationApi(education))
  }


  console.log(graduates)



  const initialValues = {
    schoolDepartment: '',
    endedDate: '',
    schoolName: '',
    startedDate: "",
    resumeId: 81,
    graduateId: 0
  }

  const schema = Yup.object({
    schoolDepartment: Yup.string().required("Okuduğunuz bölüm adı boş bırakılamaz"),
    schoolName: Yup.string().required("Okul adı boş bırakılamaz"),
    startedDate: Yup.date().required("Başlangıç tarihi boş bırakılamaz"),
  })






  const graduateOptions = graduates.map((graduate, id) => ({
    key: id,
    value: graduate.id,
    text: graduate.graduateDescription
  }))



  const enableTrue = () => {


    return (
      <div className="resume-form"  >
        <Header as="h3" icon="save" content="Education Add" />
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => {
            handleSave(values)
          }}

        >

          <Form className="ui form"  >

            <DGTextInput name="schoolName" label="School Name" />
            <DGTextInput name="schoolDepartment" label="School Department" />
            <DGTextInput type="date" name="startedDate" label="Start Date" />
            <DGTextInput type="date" name="endedDate" label="End Date" />
            <DGSelectInput label="Graduate" options={graduateOptions} name="graduateId" />
            <Button color="green" type="submit" >+ Education </Button>
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

export default ResumeEduPostForm;
