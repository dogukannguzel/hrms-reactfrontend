import React from 'react';
import { NavLink } from 'react-router-dom';
import { Table, Label, Icon } from 'semantic-ui-react';
const Language = ({ languages }) => {



  const languageList = () => {
    return (
      <div className="mt-5" >
        <Table   >

          <Table.Header>
            <Table.HeaderCell textAlign="center" colSpan='7'>Language</Table.HeaderCell>
            <Table.Row>
              <Table.HeaderCell>Language</Table.HeaderCell>
              <Table.HeaderCell>Deegre</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            {
              languages.map((lang, id) => (
                <Table.Row key={id}  >
                  <Table.Cell >{lang.language}</Table.Cell>
                  <Table.Cell>{lang.langLevel}</Table.Cell>
                  <Table.Cell>

                  <Label className="resume-language-icon" as={NavLink} to={`/language/uptade/${lang.id}`} color='blue' horizontal>
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
      {languages.length > 0 ? languageList() : null}
    </div>
  );
}

export default Language;
