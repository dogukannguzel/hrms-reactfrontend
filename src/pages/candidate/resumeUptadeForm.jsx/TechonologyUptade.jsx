import React from 'react';
import * as Yup from "yup"
import { Header, Button,Modal } from 'semantic-ui-react';
import { Formik,Form } from 'formik';
import DGTextInput from './../../toolBox/customFormControls/DGTextInput';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTecholongyByResumeId, uptadeResumeTechonologyApi } from '../../../store/actions/techonologyAction';
import { useParams } from 'react-router-dom';
const TechonologyUptade = () => {


    const {techonologyId}=useParams()

    const techonology = useSelector(state => state.techonology)

    const dispatch = useDispatch()

    console.log(techonology)
    useEffect(()=>{
        dispatch(getTecholongyByResumeId(techonologyId))
    },[])


    const handleSave=(techonology)=>{
        dispatch(uptadeResumeTechonologyApi(techonology))
    }



    const initialValues = {
        techonologyDescription: techonology.techonologyDescription,
        id: techonologyId
    }

    const schema = Yup.object({
        techonologyDescription:Yup.string().required("Boş bırakılamaz")
    })


    return (
        <div>
            <div className="resume-form"  >
                <Header as="h3" icon="edit" content="Techology Uptade" />
              {
                  techonology.id?  <Formik 
                  initialValues={initialValues}
                   validationSchema={schema}
                   onSubmit={(values)=>{
                        handleSave(values)
                   }}
                   >
  
                      <Form className="ui form" >
  
                         
                              <DGTextInput
                                  id='form-input-control-language-name'
                                    label='Techonlogy Name'
                                  name="techonologyDescription"
                              />
  
  
                       
  
  
  
                          <Button color="green" type="submit" >Uptade </Button>
  
  
                      </Form>
                  </Formik>:null
              }

            </div>
     
        </div>
    );
}

export default TechonologyUptade;
