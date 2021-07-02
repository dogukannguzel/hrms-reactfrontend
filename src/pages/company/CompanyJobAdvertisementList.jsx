import React from 'react';
import JobList from './../jobAdvertisement/JobList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getJobAdvertisementByCompanyId } from './../../store/actions/jobAdvertisementAction';
import { useParams } from 'react-router-dom';

const CompanyJobAdvertisementList = () => {

    const {id} = useParams()

    const jobAdvertisements = useSelector(state => state.jobAdvertisements)
    const dispatch = useDispatch()
    useEffect(()=>{
            dispatch(getJobAdvertisementByCompanyId(id))
    },[])
    
    return (
        <div>
            <JobList header="Job Advertisements" data={jobAdvertisements}  />
        </div>
    );
}

export default CompanyJobAdvertisementList;
