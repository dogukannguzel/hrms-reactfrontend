import React, { useEffect, useState } from "react";
import { Table, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanysApi } from "../../store/actions/companyActions";

const CompanyList = () => {
  
  const [searchQuery, setSearchQuery] = useState('');

  const companys = useSelector(state => state.companys)

  const dispatch = useDispatch()


  useEffect(() => {
  dispatch(getAllCompanysApi())
  }, []);


  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }



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
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {companys.filter(c=>{
          return  c.companyName.toLowerCase().indexOf(searchQuery.toLowerCase()) !==-1
          }).map((company,id) => (
            <Table.Row  key={id} >
              <Table.Cell>{company.companyName}</Table.Cell>
              <Table.Cell>{company.email}</Table.Cell>
              <Table.Cell>{company.webAddress}</Table.Cell>
              <Table.Cell>{company.phoneNumber}</Table.Cell>
              <Table.Cell><Link className="btn btn-danger"  to={`/company/${company.id}`}  >GET</Link></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CompanyList;
