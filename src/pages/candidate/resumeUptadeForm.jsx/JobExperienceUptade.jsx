import React from 'react';
import * as Yup from "yup"
import { Header, Button } from 'semantic-ui-react';
import { Formik,Form } from 'formik';
import DGTextInput from './../../toolBox/customFormControls/DGTextInput';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getResumeJobExperienceByİd, uptadeResumeJobExperienceApi } from '../../../store/actions/jobExperienceAction';
import { useParams } from 'react-router-dom';
const JobExperienceUptade = () => {

    const {jobExperienceId} = useParams()

    const jobExperience = useSelector(state => state.jobExperience)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getResumeJobExperienceByİd(jobExperienceId))
    },[])

    const initialValues = {
        corporatName: jobExperience.corporatName,
        position:jobExperience.position,
        startedDate: jobExperience.startedDate,
        endedDate:jobExperience.endedDate,
        id: parseInt(jobExperienceId)
    
    
    
    
      }
    
    const handleSave=(jobExperience)=>{
 
      dispatch(uptadeResumeJobExperienceApi(jobExperience))
    }
    
      const schema = Yup.object({
        corporatName: Yup.string().required("Şirket adı boş bırakılamaz"),
        position: Yup.string().required("Şirketteki Pozisyon adı boş bırakılamaz"),
        startedDate: Yup.string().required("Başlagıç tarihi boş bırakılamaz"),
    
    
      })
    


    return (
        <div>
             <div className="resume-form" >
        <Header as="h3" icon="save" content="Job Experience Uptade" />


      {
          jobExperience.corporatName?  <Formik
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
 
 
             <Button color="green" type="submit" >Uptade </Button>
           </Form>
         </Formik>:null
      }



      </div>
        </div>
    );
}

export default JobExperienceUptade;
