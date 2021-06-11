import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import JobAdvertisementService from '../services/jobAdvertisementService';
import {Button} from 'reactstrap';
export default function JobAdvertisementDetail() {

    let {id} = useParams();

    const [jobAdvertisement, setJobAdvertisement] = useState({})


    useEffect(()=>{
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisementById(id).then(result=>setJobAdvertisement(result.data.data))
    },[])

    return (
        <div class="card" style={{maxWidth:"100%"}}>
        
        <div class="card-body">
          <h5 class="card-title badge bg-dark " ><h3>{jobAdvertisement.jobPosition}</h3></h5>
          <p class="card-text  ">{jobAdvertisement.jobDescription} </p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Company Name : {jobAdvertisement.companyName} <br/>City : {jobAdvertisement.cityName}</li>
          <li class="list-group-item">{`Min-Max Salary : ${jobAdvertisement.minSalary+" - "+jobAdvertisement.maxSalary}`}</li> 
          <li class="list-group-item">Open Position : {jobAdvertisement.openPosition}</li>
     
        </ul>
        <div class="card-body">
            <p>Created Date : {jobAdvertisement.createdDate}</p>
            <p>Application Deadline : {jobAdvertisement.applicationDeadline}</p>
        </div>
        <div class="card-body">
        <Button className="btn btn-danger">Başvur</Button>
        </div>
      </div>
    )
}
