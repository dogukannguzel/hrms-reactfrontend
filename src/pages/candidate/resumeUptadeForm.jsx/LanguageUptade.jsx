import React from 'react';
import * as Yup from "yup"
import { Header, Button } from 'semantic-ui-react';
import { Formik, Form } from 'formik';
import DGTextInput from './../../toolBox/customFormControls/DGTextInput';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getResumeLanguageByİd, uptadeResumeLanguageApi } from '../../../store/actions/languageAction';
const LanguageUptade = () => {


    const { languageId } = useParams()


    const language = useSelector(state => state.language)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getResumeLanguageByİd(languageId))
    }, [])

    const initialValues = {
        language: language.language,
        langLevel: language.langLevel,
        id: languageId
    }

    const handleSave = (language) => {
        dispatch(uptadeResumeLanguageApi(language))
    }


    const schema = Yup.object({
        language: Yup.string().required("Yabancı Dil adı boş bırakılamaz"),
        langLevel: Yup.string().required("Dil seviyesi boş bırakılamaz")
    })

    return (
        <div>
            <div className="resume-form">
                <Header as="h3" icon="save" content="Language Uptade" />

                {
                    language.langLevel ? <Formik

                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            handleSave(values)
                        }}
                    >
                        <Form className="ui form" >


                            <DGTextInput
                                id='form-input-control-language-name'
                                label='Language'
                                name="language" />
                            <DGTextInput
                                id='form-input-control-language-deegre'
                                label='Deegre'
                                name="langLevel"
                            />
                            <Button color="green" type="submit" >Uptade</Button>
                        </Form>
                    </Formik> : null
                }


            </div>
        </div>
    );
}

export default LanguageUptade;
