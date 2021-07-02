import React from 'react';
import { useState } from 'react';

import ResumeEduPostForm from './ResumeEduPostForm';
import ResumeLanguagePostForm from './ResumeLanguagePostForm';
import ResumeJobExperiencePostForm from './ResumeJobExperiencePostForm';
import ResumeTechForm from './ResumeTechForm';
import CreateResumeForm from './CreateResumeForm';
import ResumeImageForm from './ResumeImageForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEducationByResumeId } from '../../../store/actions/educationActions';
import { useParams } from 'react-router-dom';
const ResumePostForm = () => {


const {id} = useParams()




  return (
    <div>


      <CreateResumeForm  />

      <ResumeEduPostForm    enable={true} />

      <ResumeLanguagePostForm enable={true} />

      <ResumeJobExperiencePostForm enable={true} />

      <ResumeTechForm enable={true} />
    <ResumeImageForm enable={true}  />
    </div>
  );
}

export default ResumePostForm;
