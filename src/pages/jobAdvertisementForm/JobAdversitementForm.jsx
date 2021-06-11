import React, { useEffect, useState } from 'react'
import { Formik, useFormik } from "formik"
import * as Yup from "yup"
import { Button, Checkbox, Form, Input, Select, Message, TextArea } from 'semantic-ui-react'
import JobAdvertisementService from '../../services/jobAdvertisementService'
import CityService from '../../services/cityService'
import PositionsService from '../../services/positionService'
import WorkTypeService from '../../services/workTypeService'
import WorkPlaceService from '../../services/workPlaceService'
import SelectInput from './SelectInput'
import NumberInput from "./NumberInput"
export default function JobAdversitementForm() {

    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([]);
    const [workPlaces, setWorkPlaces] = useState([]);
    const [workTypes, setWorkTypes] = useState([]);


    useEffect(() => {
        let cityService = new CityService()
        cityService.getCitys().then(result => setCities(result.data.data))
        let positionService = new PositionsService().getJobPositions().then(result => setJobPositions(result.data.data))
        let workTypeSerivce = new WorkTypeService()
        workTypeSerivce.getWorkType().then(result => setWorkTypes(result.data.data))
        let workPlaceService = new WorkPlaceService()
        workPlaceService.getWorkPlaces().then(result => setWorkPlaces(result.data.data))

    }, [])








    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            jobPositionId: '',
            cityId: '',
            jobDescription: "",
            minSalary: '',
            maxSalary: '',
            openPosition: '',
            workPlaceId: '',
            workTypeId: '',
            applicationDeadline: '',
            companyId: 16



        },
        validationSchema: Yup.object({
            jobPositionId: Yup.string().required("Pozisyon alanı boş olamaz "),
            cityId: Yup.number().required("City alanı boş geçilemez"),
            jobDescription: Yup.string().required("İş ilanı açıklaması boş geçilemez"),
            minSalary: Yup.string(),
            maxSalary: Yup.string(),
            openPosition: Yup.string().required("Pozisyon adedi alanı boş geçilemez"),
            workPlaceId: Yup.string().required("Work place alanı boş geçilemez"),
            workTypeId: Yup.string().required("Work type alanı boş geçilemez"),
            applicationDeadline: Yup.date().required("İş ilanı bitiş suresi boş geçilemez")
        }),
        onSubmit: (values, { setSubmitting, resetForm }) => {
            let jobAdvertisementService = new JobAdvertisementService()
            jobAdvertisementService.postJobAdvertisement(values)
            setTimeout(() => {
                setSubmitting(false);
                resetForm();
            }, 2000);
        }
    })






    return (
        <div>
            <Form onSubmit={handleSubmit}  >
                <SelectInput name="workTypeId" touched={touched.workTypeId} label="Work Type" value={values.workTypeId} handleChange={handleChange} defaultValue="Work Type" error={errors.workTypeId} options={workTypes.map(workType => ({
                    value: workType.id,
                    text: workType.type
                }))} />

                <SelectInput name="workPlaceId" touched={touched.workPlaceId} label="Work Place" value={values.workPlaceId} defaultValue="Work Place" handleChange={handleChange} error={errors.workPlaceId} options={workPlaces.map(workPlace => ({
                    value: workPlace.id,
                    text: workPlace.type
                }))} />

                <SelectInput value={values.jobPositionId} touched={touched.jobPositionId} name="jobPositionId" label="Job Position" defaultValue="Job Position" handleChange={handleChange} error={errors.jobPositionId} options={jobPositions.map(jobPosition => ({
                    value: jobPosition.id,
                    text: jobPosition.position
                }))} />


                <SelectInput value={values.cityId} touched={touched.cityId} name="cityId" label="City" handleChange={handleChange} defaultValue="City" error={errors.cityId} options={cities.map(city => ({
                    value: city.id,
                    text: city.name
                }))} />


                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    name="jobDescription"
                    onChange={handleChange}
                    label='Job Description'
                    value={values.jobDescription}
                    placeholder='Job Description'
                />
                {errors.jobDescription && touched.jobDescription && (
                    <Message color='red'>{errors.jobDescription}</Message>
                )}

                <NumberInput touched={touched.minSalary} error={errors.minSalary} value={values.minSalary} handleChange={handleChange} name="minSalary" label="Min Salary" />
                <NumberInput touched={touched.maxSalary} error={errors.maxSalary} value={values.maxSalary} handleChange={handleChange} name="maxSalary" label="Max Salary" />
                <NumberInput touched={touched.jobPositionId} error={errors.openPosition} value={values.openPosition} handleChange={handleChange} name="openPosition" label="Open Position Count" />
                <Form.Field control={Input} label="Application Deadline" type="date" onChange={handleChange} name="applicationDeadline" />
                {errors.applicationDeadline && touched.applicationDeadline && (
                    <Message color='red'>{errors.applicationDeadline}</Message>
                )}
                <Button type="submit" >İlan ekle </Button>
            </Form>
        </div>
    )
}
