import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Table, Header } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
const JobAdvertisementList = () => {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  //    
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisementTableDto()
      .then((result) => setJobAdvertisements(result.data.data));
  }, [jobAdvertisements]);

  return (

    <div>
      <Header as="h3" icon="clipboard list" content="Job Advertisement" />
      <Table responsive>

        <thead>
          <tr>

          <th>Company Name</th>
            <th>Job Position</th>
            <th>Open Position</th>
            <th>Created Date</th>
            <th>Application Deadline</th>

          </tr>
        </thead>
        <tbody>

          {
            jobAdvertisements.map(jobadvertisement => (
              <tr>

                <td>{jobadvertisement.companyName}</td>
                <td>{jobadvertisement.openPosition}</td>
                <td>{jobadvertisement.jobPosition}</td>
                <td>{jobadvertisement.createdDate}</td>
                <td>{jobadvertisement.applicationDeadline}</td>

              </tr>
            ))
          }

        </tbody>
      </Table>
    </div>

  );
};

export default JobAdvertisementList;
