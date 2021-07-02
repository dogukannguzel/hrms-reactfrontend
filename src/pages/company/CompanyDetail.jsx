import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import CompanyService from '../../services/companyService';
import JobAdvertisementService from '../../services/jobAdvertisementService';
import JobList from '../jobAdvertisement/JobList';
import { Card, Feed, Label } from 'semantic-ui-react';
import CompanyContactInformation from './CompanyContactInformation';

const CompanyDetail = () => {


  const { id } = useParams()
  const [company, setCompany] = useState({})

  useEffect(() => {
    let companyService = new CompanyService();
    companyService.getByCompanyId(id).then(result => setCompany(result.data.data))

  }, [])


   
  console.log(company)

  return (


    <div style={{top:"5em",position:"relative",left:"6em"}} >
  
     
      <div className="company-detail">
      {company.uptadeStatus?<Label color="red" size="mini" style={{"position":"absolute",right:"0px",top:"0px"}}   >{company.uptadeStatus}</Label>:null}
      <div >
    
        <article>
      <div >
            <h5 >{company.companyName}</h5>
            <p>{company.webAddress}</p>
            <br/>
            <Label as={NavLink} to={"/company/jobAdvertisements/"+company.id} color='blue' horizontal>
              Şirketin iş ilanları
              </Label>
            
          </div>
        </article>
        <CompanyContactInformation company={company} />
      </div>

    



    </div>
 
    </div>




  );
}

export default CompanyDetail;
