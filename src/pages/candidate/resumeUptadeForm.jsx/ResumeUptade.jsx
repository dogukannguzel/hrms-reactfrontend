import React from 'react';
import * as Yup from "yup"
import DGTextInput from './../../toolBox/customFormControls/DGTextInput';
import { Formik } from 'formik';
import { Header, Button } from 'semantic-ui-react';
import { Form } from 'formik';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getByResumeIdApi, uptadeResumeApi } from './../../../store/actions/resumeActions';
const ResumeUptade = () => {


  const { resumeId } = useParams()

  const dispatch = useDispatch()

  const resume = useSelector(state => state.resume)


  useEffect(() => {
    dispatch(getByResumeIdApi(resumeId))
  }, [])



  const handleSave=(resume)=>{
    dispatch(uptadeResumeApi(resume))
  }

  const initialValues = {
    cvDescription: resume.cvDescription,
    githubLink: resume.githubLink,
    linkedLink: resume.linkedLink,
    id: resumeId
  }


  const schema = Yup.object({
    cvDescription: Yup.string().required("Cv açıklama alanı zorunludur"),
    githubLink: Yup.string().url("Lütfen url formatında giriniz"),
    linkedLink: Yup.string().url("Lütfen url formatında giriniz")
  })

  return (
    <div className="resume-form" >
      <Header as="h3" icon="save" content="Resume Uptade" />

      {resume.githubLink ? <Formik
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


          <Button color="green" >Uptade</Button>
        </Form>



      </Formik> : null}



    </div>
  );
}

export default ResumeUptade;
