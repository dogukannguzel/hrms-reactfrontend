import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Header } from "semantic-ui-react";
import { getAllCandidatesApi } from "../../store/actions/candidateAction";

const CandidateList = () => {


  const dispatch = useDispatch()

  const candidates = useSelector(state => state.candidates)

  console.log(candidates)

  useEffect(() => {
    dispatch(getAllCandidatesApi())
  }, []);

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

          {candidates
          
          .map((candidate,id) => (
            <Table.Row key={id} >
              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.birthDate}</Table.Cell>
              <Table.Cell>{candidate.email}</Table.Cell>
              <Table.Cell>
                <Link className="btn btn-danger" to={`/resume/${candidate.id}`} >GET</Link>
              </Table.Cell>
            </Table.Row>
          ))}


        </Table.Body>
      </Table>
    </div>
  );
};

export default CandidateList;
