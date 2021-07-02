import React from 'react'
import { NavLink } from 'react-router-dom';
import { Table, Label, Icon } from 'semantic-ui-react';
export default function JobExperience({ jobExperiences }) {


  function jobExperienceList() {
    return (
      <div className="mt-5" >
        <Table   >
          <Table.Header>
            <Table.HeaderCell textAlign="center" colSpan='7'>Job Experience</Table.HeaderCell>
            <Table.Row>
              <Table.HeaderCell>Corporat Name</Table.HeaderCell>
              <Table.HeaderCell>Position</Table.HeaderCell>
              <Table.HeaderCell>Started Date</Table.HeaderCell>
              <Table.HeaderCell>Ended Date</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            {
              jobExperiences.map((jobExp, id) => (
                <Table.Row key={jobExp.id}  >
                  <Table.Cell>{jobExp.corporatName}</Table.Cell>
                  <Table.Cell>{jobExp.position}</Table.Cell>
                  <Table.Cell>{jobExp.startedDate}</Table.Cell>
                  <Table.Cell>{jobExp.endedDate}</Table.Cell>
                  <Table.Cell>

<Label className="resume-language-icon" as={NavLink} to={`/jobExperience/uptade/${jobExp.id}`} color='blue' horizontal>
        <Icon fitted   flipped name="edit" ></Icon>
</Label>
</Table.Cell>
                </Table.Row>

              ))
            }
          </Table.Body>
        </Table>
      </div>
    )
  }



  return (
    <div>
      {jobExperiences.length > 0 ? jobExperienceList() : null}
    </div>
  );
}

