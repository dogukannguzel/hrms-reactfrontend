import React, { useState } from 'react';

import JobAdvertisementCard from './JobAdvertisementCard';
import CandidateCard from './CandidateCard';
import CompanyCard from './CompanyCard';
const Home = () => {

        return (
        <div >
       
            <JobAdvertisementCard/>
            <CandidateCard />
            <CompanyCard />
        </div>
    );
}

export default Home;
