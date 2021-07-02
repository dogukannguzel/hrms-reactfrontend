import React from "react";
import NavMenu from "./Menu";
import { Grid } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import JobAdversitementForm from "../pages/jobAdvertisement/JobAdversitementForm";
import CandidateList from "../pages/candidate/CandidateList"
import ResumeDetail from "../pages/candidate/resumeDetail/ResumeDetail"
import CompanyList from "../pages/company/CompanyList"
import JobAdvertisementList from "../pages/jobAdvertisement/JobAdvertisementList"
import JobAdvertisementDetail from "../pages/jobAdvertisement/JobAdvertisementDetail"
import SetJobAdvertisement from "../pages/Employee/SetJobAdvertisement";
import CompanyDetail from "../pages/company/CompanyDetail";
import { ToastContainer } from "react-toastify";

import RegisterForm from "../pages/auth/RegisterForm";
import Login from "../pages/auth/Login";
import Home from "./homePage/Home"
import ResumePostForm from "../pages/candidate/resumePostForm/ResumePostForm";
import CompanyUptadeProfile from './../pages/company/CompanyUptadeProfile';
import SetCompanyUptadeList from './../pages/Employee/SetCompanyUptadeList';

import CompanyJobAdvertisementList from './../pages/company/CompanyJobAdvertisementList';
import EducationUptade from './../pages/candidate/resumeUptadeForm.jsx/EducationUptade';
import LanguageUptade from './../pages/candidate/resumeUptadeForm.jsx/LanguageUptade';
import TechonologyUptade from './../pages/candidate/resumeUptadeForm.jsx/TechonologyUptade';
import JobExperienceUptade from './../pages/candidate/resumeUptadeForm.jsx/JobExperienceUptade';
import ResumeUptade from './../pages/candidate/resumeUptadeForm.jsx/ResumeUptade';

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <ToastContainer position="bottom-right" />
        <Grid.Row>


          <Grid.Column width="14">
            <Switch>
              <Route component={Home} exact path="/"/>
              <Route path="/candidateList" exact component={CandidateList} />
              <Route exact path="/companyList" component={CompanyList} />
              <Route exact path="/company/:id" component={CompanyDetail} />
              <Route path="/jobAdvertisementList" exact component={JobAdvertisementList} />
              <Route path="/jobAdvertisement/:id" exact component={JobAdvertisementDetail} />
              <Route path="/resume/:id" exact component={ResumeDetail} />
              <Route path="/jobadvertisementpost" component={JobAdversitementForm} />
           
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={Login} />
              <Route path="/resumePost" exact component={ResumePostForm}/>
              <Route path="/resumePost/:id" exact component={ResumePostForm}/>
              <Route path="/company/uptade/:id" exact component={CompanyUptadeProfile}/>
              <Route path="/employee/confirms/companyProfile" exact component={SetCompanyUptadeList}/>
              <Route path="/employee/confirms/jobAdvertisement" exact component={SetJobAdvertisement}/>
              <Route path="/company/jobAdvertisements/:id" exact component={CompanyJobAdvertisementList}/>


              <Route path="/education/uptade/:educationId" exact component={EducationUptade}/>
              <Route path="/language/uptade/:languageId" exact component={LanguageUptade}/>
              <Route path="/techonology/uptade/:techonologyId" exact component={TechonologyUptade}/>
              <Route path="/jobExperience/uptade/:jobExperienceId" exact component={JobExperienceUptade}/>
              <Route path="/resume/uptade/:resumeId" exact component={ResumeUptade}/>



            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
