import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { Header, Button } from 'semantic-ui-react';
import DGTextInput from './../../toolBox/customFormControls/DGTextInput';
import DGSelectInput from './../../toolBox/customFormControls/DGSelectInput';
import * as Yup from "yup"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getGraduatesApi } from '../../../store/actions/graduateAction';
import { useParams } from 'react-router-dom';

import { getEducationByİd, uptadeResumeEducationApi } from './../../../store/actions/educationActions';
const EducationUptade = () => {




  const { educationId } = useParams()

  const education = useSelector(state => state.educations)
  const graduates = useSelector(state => state.graduates)
  const dispatch = useDispatch()


  



  useEffect(() => {
    dispatch(getEducationByİd(educationId))
    dispatch(getGraduatesApi())

  }, [])

  const handleSave = (education) => {

    dispatch(uptadeResumeEducationApi(education))

  }


  const graduateOptions = graduates.map((graduate, id) => ({
    key: id,
    value: graduate.id,
    text: graduate.graduateDescription
  }))


  const initialValues = {
    schoolDepartment: education.schoolDepartment,
    endedDate: education.endedDate,
    schoolName: education.schoolName,
    startedDate: education.startedDate,
    id: educationId,
    graduateId: education.graduateId
  }

  const schema = Yup.object({
    schoolDepartment: Yup.string().required("Okuduğunuz bölüm adı boş bırakılamaz"),
    schoolName: Yup.string().required("Okul adı boş bırakılamaz"),
    startedDate: Yup.date().required("Başlangıç tarihi boş bırakılamaz"),
  })













  return (
    <div className="resume-form"  >
      <Header as="h3" icon="edit" content="Education Uptade" />
      {
        education.schoolName ? <Formik
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
            <DGSelectInput options={graduateOptions} label="Graduate" name="graduateId" />
            <Button color="green" type="submit" >Uptade </Button>
          </Form>


        </Formik>
          : null
      }



    </div>
  );
}

export default EducationUptade;
