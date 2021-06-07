import React from "react";
import Positions from "./Positions";

import { Grid } from "semantic-ui-react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import CandidateList from "../pages/CandidateList";
import CompanyList from "../pages/CompanyList";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <Positions />
          </Grid.Column>

          <Grid.Column width="12">
            <JobAdvertisementList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
