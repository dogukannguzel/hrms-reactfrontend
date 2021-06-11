import React from "react";
import Positions from "./Positions";

import { Grid } from "semantic-ui-react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail"
import CandidateList from "../pages/CandidateList";
import CompanyList from "../pages/CompanyList";
import { Route } from "react-router";
import ResumeDetail from "../pages/ResumeDetail";
import JobAdversitementForm from "../pages/jobAdvertisementForm/JobAdversitementForm";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <Positions />
          </Grid.Column>

          <Grid.Column width="12">
            <Route path="/candidateList" component={CandidateList} />
            <Route path="/companyList" component={CompanyList} />
            <Route path="/jobAdvertisementList" exact component={JobAdvertisementList} />
            <Route path="/jobAdvertisement/:id" exact component={JobAdvertisementDetail}/>
            <Route path="/resume/:id" component={ResumeDetail}/>
            <Route path="/jobadvertisementpost" component={JobAdversitementForm}   />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
