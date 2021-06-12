import React from "react";
import Positions from "./Positions";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import JobAdversitementForm from "../pages/jobAdvertisement/JobAdversitementForm";
import CandidateList from "../pages/candidate/CandidateList"
import ResumeDetail from "../pages/candidate/ResumeDetail"
import CompanyList from "../pages/company/CompanyList"
import JobAdvertisementList from "../pages/jobAdvertisement/JobAdvertisementList"
import JobAdvertisementDetail from "../pages/jobAdvertisement/JobAdvertisementDetail"
import SetJobAdvertisement from "../pages/Employee/SetJobAdvertisement";
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
            <Route path="/setJobAdvertisement" component={SetJobAdvertisement}   />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
