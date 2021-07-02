import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'semantic-ui-react';
import { useEffect } from 'react';
import { companyUptadeSuccessApi, getAllEmployeeConfirmCompanyProfileApi } from './../../store/actions/employeeAction';


const SetCompanyUptadeList = () => {

    const confirmedFalseCompanys = useSelector(state => state.employee.confirmedFalseCompanys)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllEmployeeConfirmCompanyProfileApi())
    }, [])



    const handleSave = (id, companyJson) => {
        dispatch(companyUptadeSuccessApi(id, companyJson))
    }



    return (
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>İd</th>
                        <th>Company Name</th>
                        <th>Web Address</th>
                        <th>Email</th>
                        <th>Confirmed</th>
                        <th>Enable</th>
                        <th>Onayla</th>
                        <th>Sil</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        confirmedFalseCompanys?.map(c => (

                            <tr>

                                <td>{c.company.id}</td>
                                <td>{c.company.companyName}</td>
                                <td>{c.company.webAddress}</td>
                                <td>{c.company.email}</td>
                                <td>{c.confirmed}</td>
                                <td>{c.enable}</td>
                                <td><Button onClick={() => handleSave(c.company.id, c.company.updateCompanyJson)} className="btn btn-success" type="submit"  >Onayla</Button></td>
                                <td><Button className="btn btn-danger" type="submit"  >Sil</Button></td>
                            </tr>
                        ))
                    }



                </tbody>
            </Table>
        </div>
    );
}

export default SetCompanyUptadeList;
