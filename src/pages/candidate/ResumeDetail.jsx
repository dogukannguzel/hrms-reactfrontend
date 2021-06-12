import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ResumeService from '../../services/cv/resumeService'
import Education from './Education'
import JobExperience from './JobExperience'

export default function ResumeDetail() {

    let { id } = useParams()

    const [resumes, setResumes] = useState([])

    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.getResumeCandidateId(id).then(result => setResumes(result.data.data))
    }, [])








    return (
      <div></div>
    )



}
