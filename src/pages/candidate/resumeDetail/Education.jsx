import React from 'react'
import { NavLink } from 'react-router-dom'
import { Label, Table ,Icon} from 'semantic-ui-react'

export default function Education({educations}) {


 function educationList(){
   return(
    <div  className="mt-5" >
          
    <Table   >
   <Table.Header>
<Table.HeaderCell textAlign="center"   colSpan='7'>Education</Table.HeaderCell>
<Table.Row>
<Table.HeaderCell>School Name</Table.HeaderCell>
<Table.HeaderCell>School Department</Table.HeaderCell>
<Table.HeaderCell>Started Date</Table.HeaderCell>
<Table.HeaderCell>Ended Date</Table.HeaderCell>
<Table.HeaderCell></Table.HeaderCell>
</Table.Row>
</Table.Header>

<Table.Body>

{
  educations.map((edu,id)=>(
    <Table.Row  key={edu.id}  >
    <Table.Cell>{edu.schoolName}</Table.Cell>
    <Table.Cell>{edu.schoolDepartment}</Table.Cell>
    <Table.Cell>{edu.startedDate}</Table.Cell>
    <Table.Cell>{edu.endedDate}</Table.Cell>
    <Table.Cell>     <Label as={NavLink} to={`/education/uptade/${edu.id}`} color='blue' horizontal>
                          <Icon  fitted name="edit" ></Icon>
                </Label></Table.Cell>
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
        
        {educations.length>0?educationList():null}

      </div>
   
    )
}
