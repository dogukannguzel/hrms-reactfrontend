import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import Education from './Education'
import JobExperience from './JobExperience'
import Language from './Language'
import Techonology from './Techonology'
import { useDispatch, useSelector } from 'react-redux'
import { getCandidateResumeApi } from '../../../store/actions/resumeActions'
import { resume } from '../../../store/initialValues/candidateValue'
import { Label, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function ResumeDetail() {

  let { id } = useParams()


  const dispatch = useDispatch()

  const resumes = useSelector(state => state.resume)

  useEffect(() => {
    dispatch(getCandidateResumeApi(id))
  }, [])



  const getCandidateResume=()=>{
    return (
      <div>
      {
        resumes.map((resume,id) => (
          <div key={id}  >
             
            <div className="card" style={{ maxWidth: "100%" }}>
        
              <img src={resume.photo} alt="Avatar" className="avatar" />
              <div className="card-body mh-30  "   >
              <Label className="resume-detail-icon" as={NavLink} to={`/resume/uptade/${resume.id}`} color='blue' horizontal>
                          <Icon  fitted name="edit" ></Icon>
                </Label>
                <h5 className="card-title">{resume.candidateFirstName}</h5>
                <p className="card-text">{resume.cvDescription}</p><br />
            <a className="btn btn-info mr-3 "  href={resume.githubLink} target="_blank" >Github</a>
            <a   className="btn btn-info" href={resume.linkedLink} target="_blank" >Linkedin</a>
              </div>
            </div>
            <Education educations={resume.educations} />
            <Language languages={resume.languages} />
            <JobExperience jobExperiences={resume.jobExperiences} />
            <Techonology techonologys={resume.technologies} />
          </div>


        ))
      }
    </div>

    )
  }



  return (

    <div>
      {resumes.length>0?getCandidateResume():null}
    </div>

  )

}
