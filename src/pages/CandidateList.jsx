import React, { useEffect, useState } from "react";
import { Table, Header } from "semantic-ui-react";
import CandidateService from "../services/candidateService";
const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  }, [candidates]);

  return (
    <div>
      <Header as="h3" icon="clipboard list" content="Candidates" />
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı </Table.HeaderCell>
            <Table.HeaderCell>Doğum yılı</Table.HeaderCell>
            <Table.HeaderCell>E-mail adresi</Table.HeaderCell>
            <Table.HeaderCell>Cv Bilgisi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row>
              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.birthDate}</Table.Cell>
              <Table.Cell>{candidate.email}</Table.Cell>
              <Table.Cell>
                <a>Cv detayı</a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CandidateList;
