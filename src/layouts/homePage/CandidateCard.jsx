import React, { useState } from 'react';
import { Card, Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import CanditateService from '../../services/candidateService';

const CandidateCard = () => {


    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        let candidateService = new CanditateService()
        candidateService.getAllCreatedDate().then(result => console.log(result.data.data))
    }, [])



    return (
        <div className="candidate-card"  >



            <Card>
                <Card.Content>

                    <Card.Header>Yeni Kayıt Olan Adaylarımız</Card.Header>
                </Card.Content>
                <Card.Content>
                    {
                        candidates.map(candidate => (
                            <Feed key={candidate.id}>

                                <Feed.Event>
                                    <Feed.Label image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnmuoJQf8Y_YpAxs4xZjY32Fin_thgK1Drg&usqp=CAU"} />
                                    <Feed.Content>
                                   
                                        <Feed.Summary>
                                            <Link to={`/resume/${candidate.id}`}  >{`${candidate.firstName + " " + candidate.lastName}`}    </Link>
                                        </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>

                            </Feed>

                        ))
                    }
                </Card.Content>
            </Card>





        </div>
    );
}

export default CandidateCard;
