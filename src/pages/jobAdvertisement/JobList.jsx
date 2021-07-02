import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Header, Pagination } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react';
import WorkTypeFilter from './filter/WorkTypeFilter';
import WorkPlaceFilter from './filter/WorkPlaceFilter';
import { useDispatch } from "react-redux";
import { getJobAdvertisementsApi } from "../../store/actions/jobAdvertisementAction";


import { getJobAdvertisementFilter } from './../../store/actions/jobAdvertisementAction';
import CityFilter from './filter/CityFilter';

const JobList = ({ header, data }) => {



  const dispatch = useDispatch()
  const [value, setValue] = useState(20)
  const [page, setPage] = useState(1)
  const [selectWorkType, setSelectWorkType] = useState()
  const [selectWorkPlace, setSelectWorkPlace] = useState()
  const [selectCity, setSelectCity] = useState()

  useEffect(() => {
    dispatch(getJobAdvertisementsApi(1, 10))

  }, [])

  const handleChangeWorkPlace = (e, data) => {
    setSelectWorkPlace(data.value)
  }
  const handleChangeWorkType = (e, data) => {
    setSelectWorkType(data.value)
  }

  const handleChangeCity = (e, data) => {
    setSelectCity(data.value)
  }

  const handleClickPagination = () => {
    setPage(page => page + 1)
    setValue(value => value + 10)
    dispatch(getJobAdvertisementsApi(page, value))
  }

  const handleFilterClick = () => {
    dispatch(getJobAdvertisementFilter(selectWorkType, selectWorkPlace, selectCity, page, value))
  }

  return (

    <div>

      <Header as="h3" icon="clipboard list" content={header} />

      <div>
        <div className="filterform" >

          <WorkPlaceFilter
          style={{ bottom: "10px" }} 
          size="mini"
          value={selectWorkPlace}
          onChange={handleChangeWorkPlace}
          />
          <WorkTypeFilter
          value={selectWorkType} 
          placeholder='Work Type Filter'
          onChange={handleChangeWorkType}
             />
          <CityFilter
          value={selectCity}
          onChange={handleChangeCity}
          placeholder="City Filter"
          style={{ top: "10px" }}
               />
          <Button className="filter-button" onClick={() => handleFilterClick()}  >Filtrele</Button>

        </div>
      </div>

      <Table celled>

        <Table.Header>

          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>Open Position</Table.HeaderCell>
            <Table.HeaderCell>Created Date</Table.HeaderCell>
            <Table.HeaderCell>Application Deadline</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>


          {
            data.map((d, id) => (
              <Table.Row key={id} >
                <Table.Cell>{d.companyName}</Table.Cell>
                <Table.Cell>{d.jobPosition}</Table.Cell>
                <Table.Cell>{d.openPosition}</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell><Link className="btn btn-danger" to={`/jobAdvertisement/${d.id}`}  >GET</Link></Table.Cell>
              </Table.Row>

            ))
          }



        </Table.Body>

        <Pagination

          onPageChange={handleClickPagination}
          key="Pagination"
          totalPages={5}
        />
      </Table>
    </div>


  );
};

export default JobList;
