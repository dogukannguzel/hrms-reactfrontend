import React from 'react';
import { NavLink } from 'react-router-dom';
import { Table, Label, Icon } from 'semantic-ui-react';
const Techonology = ({ techonologys }) => {


  const techonologyList=()=>{
    return (
<div className="mt-5" >
        <Table   >
          <Table.Header>
            <Table.HeaderCell textAlign="center" colSpan='7'>Techonology</Table.HeaderCell>
            <Table.Row>
              <Table.HeaderCell>Techonology</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            {
              techonologys.map(tec => (
                <Table.Row key={tec.id} >
                  <Table.Cell textAlign="center">{tec.techonologyDescription}</Table.Cell>
                  <Table.Cell>

<Label className="resume-language-icon" as={NavLink} to={`/techonology/uptade/${tec.id}`} color='blue' horizontal>
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
      {techonologys.length>0?techonologyList():null}
    </div>
  );
}

export default Techonology;
