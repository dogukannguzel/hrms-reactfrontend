import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Form, Input, Button, Header, Label, Icon } from 'semantic-ui-react'
import ImageService from '../../../services/cv/resumeImageService';
import * as Yup from "yup"
import { toast } from 'react-toastify';
const ResumeImageForm = ({ enable }) => {





    const handleClick = (file) => {

        let resumeImageService = new ImageService()
        resumeImageService.resumeImageAdd(file).then(result => successImage(result.data))

    }

    const successImage = (data) => {
        if (data.success) {
            toast.success(data.message)

        }

    }

    const { handleSubmit, values, errors, touched, setFieldValue } = useFormik({
        initialValues: {
            file: ''
        },
        onSubmit: (values, { setSubmitting, resetForm }) => {
            handleClick(values.file)
            setTimeout(() => {
                setSubmitting(false);

                resetForm();
            }, 2000);
        }
    })



    const enableTrue = () => {
        return (
            <div>
                <div className="resume-form">
                    <Header as="h3" icon="save" content="Resume Photo Add" />
                    <Form content-type="multipart/form-data" onSubmit={handleSubmit}  >
                        <Form.Field
                            id='form-input-control-last-name'
                            control={Input}
                            label='Resume Photo'
                            type="file"
                            name="file"
                            error={errors && touched && (
                                errors.file
                            )}
                            onChange={(e) => setFieldValue("file", e.target.files[0])}
                        />

                        <Button color="green" type="submit"   >+Image</Button>


                    </Form>
                </div>
            </div>
        )
    }



    return (
        <div>


            {enable ? enableTrue() : null}

        </div>
    );
}

export default ResumeImageForm;
