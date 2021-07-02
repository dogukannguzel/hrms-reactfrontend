import React,{useState} from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, Image ,Label} from 'semantic-ui-react'
import JobAdvertisementService from './../../services/jobAdvertisementService';

const JobAdvertisementCard = () => {

    const [jobAdvertisements, setjobAdvertisements] = useState([])

    useEffect(()=>{
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getAllCreatedDate().then(result=>setjobAdvertisements(result.data.data))
    },[])

    return (
        <div className="job-card">
             <Card.Group>
            {
                jobAdvertisements.map(jobAdvertisement=>(
                    <Card fluid key={jobAdvertisement.id}>

                    <Card.Content>
     
                      <Image
                        floated='right'
                        size='mini'
                        src='https://image.flaticon.com/icons/png/512/65/65053.png'
                      />
                      <Card.Header>{jobAdvertisement.jobPosition}</Card.Header>
                      <Card.Meta>{jobAdvertisement.companyName}</Card.Meta>
                      <Card.Description>
                      <Label color='red' horizontal>
                          {jobAdvertisement.workPlaceType}
                </Label>
                <Label color='blue' horizontal>
                          {jobAdvertisement.workType}
                </Label>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className='ui two buttons'>
                        <Button as={NavLink} to={`/company/${jobAdvertisement.companyİd}`} basic color='green'>
                    Company Detail
                        </Button>
                        <Button as={NavLink} to={`/jobAdvertisement/${jobAdvertisement.id}`} basic color='red'>
                         Job Advertisement Detail
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                ))
            }
  </Card.Group>
        </div>
    );
}

export default JobAdvertisementCard;
