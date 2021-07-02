import React, { useEffect, useState } from 'react'
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextArea, Button } from 'semantic-ui-react'
import JobAdvertisementService from '../../services/jobAdvertisementService'

import WorkTypeService from '../../services/workTypeService'
import WorkPlaceService from '../../services/workPlaceService'

import { toast } from 'react-toastify'
import DGTextInput from './../toolBox/customFormControls/DGTextInput';
import DGSelectInput from './../toolBox/customFormControls/DGSelectInput';
import { useDispatch, useSelector } from 'react-redux'
import { getJobPositionApi } from '../../store/actions/jobPositionAction'
import { getCityApi } from '../../store/actions/cittyAction'

export default function JobAdversitementForm() {

    const dispatch = useDispatch()

    const cities = useSelector(state => state.cities)
   const jobPositions = useSelector(state => state.jobPositions)
    const [workPlaces, setWorkPlaces] = useState([]);
    const [workTypes, setWorkTypes] = useState([]);


    useEffect(() => {
        dispatch(getCityApi())
        
        dispatch(getJobPositionApi())

        let workTypeSerivce = new WorkTypeService()
        workTypeSerivce.getWorkType().then(result => setWorkTypes(result.data.data))
        let workPlaceService = new WorkPlaceService()
        workPlaceService.getWorkPlaces().then(result => setWorkPlaces(result.data.data))

    }, [])


    const handleSave = (value) => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.postJobAdvertisement(value)
        toast.success("İş ilanı eklendi yayına alınması için yöneticilerin onayı gerekir...")
    }


    const schema = Yup.object({
        jobPositionId: Yup.string().required("Pozisyon alanı boş olamaz "),
        cityId: Yup.number().required("City alanı boş geçilemez"),
        jobDescription: Yup.string().required("İş ilanı açıklaması boş geçilemez"),
        minSalary: Yup.string(),
        maxSalary: Yup.string(),
        openPosition: Yup.string().required("Pozisyon adedi alanı boş geçilemez"),
        workPlaceId: Yup.string().required("Work place alanı boş geçilemez"),
        workTypeId: Yup.string().required("Work type alanı boş geçilemez"),
        applicationDeadline: Yup.date().required("İş ilanı bitiş suresi boş geçilemez")
    })


    const initialValues = {
        jobPositionId: '',
        cityId: '',
        jobDescription: "",
        minSalary: '',
        maxSalary: '',
        openPosition: '',
        workPlaceId: '',
        workTypeId: '',
        applicationDeadline: '',
        companyId: 22
    }



    const jobPositionOptions = jobPositions.map((position, id) => ({
        key: id,
        value: position.id,
        text: position.position

    }))


    const cityOptions = cities.map((city, id) => ({
        key: id,
        value: city.id,
        text: city.name

    }))
    const workPlaceOptions = workPlaces.map((workPlace, id) => ({
        key: id,
        value: workPlace.id,
        text: workPlace.type

    }))

    const workTypeOptions = workTypes.map((workType, id) => ({
        key: id,
        value: workType.id,
        text: workType.type

    }))

    return (
        <div>
            <div className="job-advertisement-form">
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                       handleSave(values)
                    }}
                >

                    <Form className="ui form">
                        <DGSelectInput label="Job Position" search name="jobPositionId" options={jobPositionOptions} />
                        <DGSelectInput label = "City" search  name="cityId" options={cityOptions} />
                        <DGSelectInput search label="Work Place" name="workPlaceId" options={workPlaceOptions} />
                        <DGSelectInput search label="Work Type" name="workTypeId" options={workTypeOptions} />
                        <DGTextInput label="Min salary" type="number" name="minSalary" placeHolder="Min salary" />
                        <DGTextInput label="Max salary"  type="number" name="maxSalary" placeHolder="Max Salary" />
                        <DGTextInput label="Open Position"  type="number" name="openPosition" placeHolder="Open Position Count" />
                        <DGTextInput label="Application Deadline"  type="date" name="applicationDeadline" placeHolder="Application Deadline" />
                        <DGTextInput label="Job Description"  name="jobDescription" control={TextArea} placeHolder="Job Advertisement Description" />
                        <Button type="submit" color="green">Add</Button>
                    </Form>



                </Formik>
            </div>
        </div>

    )
}
