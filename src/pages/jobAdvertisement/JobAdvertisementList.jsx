import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getJobAdvertisementsApi } from "../../store/actions/jobAdvertisementAction";
import JobList from "./JobList";


const JobAdvertisementList = () => {


  const dispatch = useDispatch()
  const jobAdvertisements = useSelector(state => state.jobAdvertisements)



  useEffect(() => {
    dispatch(getJobAdvertisementsApi())
  }, [])

    return (

    <div>
      <JobList header="Job Advertisements" data={jobAdvertisements}
      />
    </div>

  );
};

export default JobAdvertisementList;
