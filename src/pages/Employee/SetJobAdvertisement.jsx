import alertify from 'alertifyjs';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'reactstrap';
import JobAdvertisementService from '../../services/jobAdvertisementService';
const SetJobAdvertisement = () => {


    const [jobAdvertisements, setjobAdvertisements] = useState([]);

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisementsEnableFalse().then(result => setjobAdvertisements(result.data.data))
    }, []
    )



    const setJobAdvertisementEnable = (id) => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.putJobAdvertisementEnable(id)
        alertify.success("İş ilanı onaylandı")
    }




    return (
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>İd</th>
                        <th>Company Name</th>
                        <th>Job Position</th>
                        <th>Open Position</th>
                        <th>Created Date</th>
                        <th>Application Deadline</th>
                        <th>Onayla</th>
                        <th>Sil</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        jobAdvertisements.map(jobadvertisement => (
                            <tr>
                                <td>{jobadvertisement.id}</td>
                                <td>{jobadvertisement.companyName}</td>
                                <td>{jobadvertisement.openPosition}</td>
                                <td>{jobadvertisement.jobPosition}</td>
                                <td>{jobadvertisement.createdDate}</td>
                                <td>{jobadvertisement.applicationDeadline}</td>
                                <td><Button onClick={() => setJobAdvertisementEnable(jobadvertisement.id)} className="btn btn-success" type="submit"  >Onayla</Button></td>
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
