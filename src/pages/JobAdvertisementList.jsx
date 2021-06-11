import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Table, Header } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
const JobAdvertisementList = () => {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, [jobAdvertisements]);

  return (
    <div>
      <Header as="h3" icon="clipboard list"  content="Job Advertisements" />
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Adeti</Table.HeaderCell>
            <Table.HeaderCell>Oluşturulma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Son başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((j) => (
            <Table.Row>
              <Table.Cell as={NavLink} to={`/jobAdvertisement/${j.id}`} >{j.companyName}</Table.Cell>
              <Table.Cell>{j.jobPosition}</Table.Cell>
              <Table.Cell>{j.openPosition}</Table.Cell>
              <Table.Cell>{j.createdDate}</Table.Cell>
              <Table.Cell>{j.applicationDeadline}</Table.Cell>
              <Table.Cell>
                <Button color="instagram">Başvur</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default JobAdvertisementList;
