import React, { useEffect, useState } from "react";
import { Table, Header } from "semantic-ui-react";
import CompanyService from "../../services/companyService";
const CompanyList = () => {
  const [companys, setCompanys] = useState([]);

  useEffect(() => {
    let companyService = new CompanyService();
    companyService
      .getCompanys()
      .then((result) => setCompanys(result.data.data));
  }, [companys]);

  return (
    <div>
      <Header as="h3" icon="clipboard list" content="Companys" />
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Email Adress</Table.HeaderCell>
            <Table.HeaderCell>Web Adress</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {companys.map((company) => (
            <Table.Row>
              <Table.Cell>{company.companyName}</Table.Cell>
              <Table.Cell>{company.email}</Table.Cell>
              <Table.Cell>{company.webAddress}</Table.Cell>
              <Table.Cell>{company.phoneNumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CompanyList;
