import alertify from 'alertifyjs';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Table } from 'reactstrap';
import JobAdvertisementService from '../../services/jobAdvertisementService';

import { getAllEmployeeConfirmJobAdvertisementFalseApi, setJobAdvertisementConfirmTrueApi } from '../../store/actions/employeeAction';
const SetJobAdvertisement = () => {


    const confirmedFalseJobAdvertisement = useSelector(state =>state.employee.confirmedFalseJobAdvertisement)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllEmployeeConfirmJobAdvertisementFalseApi())
    },[])



    const setJobAdvertisementEnable = (id) => {
        dispatch(setJobAdvertisementConfirmTrueApi(id))
        toast.success("İş ilanı onaylandı")
    }

console.log(confirmedFalseJobAdvertisement)


    return (
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>İd</th>
                        <th>Company Name</th>
                        <th>Job Position</th>
                        <th>Open Position</th>
                        <th>Application Deadline</th>
                        <th>Onayla</th>
                        <th>Sil</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        confirmedFalseJobAdvertisement?.map(j => (
                            <tr>
                                <td>{j.jobAdvertisement.id}</td>
                                <td>{j.jobAdvertisement.company.companyName}</td>
                                <td>{j.jobAdvertisement.jobPosition.position}</td>
                                <td>{j.jobAdvertisement.openPosition}</td>
                                <td>{j.jobAdvertisement.applicationDeadline.dayOfWeek}</td>
                                <td><Button onClick={() => setJobAdvertisementEnable(j.id)} className="btn btn-success" type="submit"  >Onayla</Button></td>
                                <td><Button className="btn btn-danger" type="submit"  >Sil</Button></td>
                            </tr>
                        )) 
                    }


                </tbody>
            </Table>
        </div>
    );
}

export default SetJobAdvertisement;
