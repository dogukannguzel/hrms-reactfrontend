import React from 'react';
import { Card, Feed } from 'semantic-ui-react';

const CompanyContactInformation = ({company}) => {
    return (
        <div className="iletisim-bilgileri"  >
            <Card width="large" >
      <Card.Content>
        <Card.Header>İletişim Bilgileri</Card.Header>
      </Card.Content>
      <Card.Content>
      <Feed>
         
      
          <Feed.Event>
            <Feed.Label icon="mail" />
            <Feed.Content>
             
              <Feed.Summary>
              {company.email}
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
  
          <Feed.Event>
            <Feed.Label icon="phone" />
            <Feed.Content>
              
              <Feed.Summary>
            {company.phoneNumber}
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          <Feed.Event>
            <Feed.Label image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWh6InBuJ5Eqdm7mCgwmpwrZm37Jl_feQu5g&usqp=CAU" />
            <Feed.Content>
              
              <Feed.Summary>
            {company.webAddress}
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
       
        </Feed>
      </Card.Content>
    </Card>
        </div>
    );
}

export default CompanyContactInformation;
