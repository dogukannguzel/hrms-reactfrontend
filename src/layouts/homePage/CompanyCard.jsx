import React, { useEffect, useState } from 'react';
import { Card, Feed } from 'semantic-ui-react'
import CompanyService from '../../services/companyService';
import { Link } from 'react-router-dom';
const CompanyCard = () => {

  const [companys, setCompanys] = useState([]);

    useEffect(() => {
        let jobAdvertisementService = new CompanyService()
        jobAdvertisementService.getAllCreatedDate().then(result => setCompanys(result.data.data))

    }, [])



    return (
      <div className="home-card1"   >


      <Card>
          <Card.Content>

              <Card.Header>Yeni kayıt olan şirketlerimiz    </Card.Header>
          </Card.Content>
          <Card.Content>
              <Feed>

                  {
                      companys.map(company => (
                          <Feed.Event key={company.id}>
                              <Feed.Label image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYqliVnDOjTdDc91wixY0CEwNERjOP2YrMPQ&usqp=CAU"} />
                              <Feed.Content>
                              
                                  <Feed.Summary>
                                      <Link to={`/company/${company.id}`}  > {company.companyName}   </Link>
                                  </Feed.Summary>
                              </Feed.Content>
                          </Feed.Event>
                      ))
                  }
              </Feed>
          </Card.Content>
      </Card>




  </div>
    );
}

export default CompanyCard;
