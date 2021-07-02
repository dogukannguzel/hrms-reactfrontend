import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import { Label } from 'semantic-ui-react';
import JobAdvertisementFavoriteButton from './JobAdvertisementFavoriteButton';
import { useDispatch, useSelector } from 'react-redux';
import { getJobAdvertisementByIdApi, postJobAdvertisementFavoriteApi } from '../../store/actions/jobAdvertisementAction';
import { getJobAdvertisementFavoritesById } from '../../store/actions/jobAdvertisementFavoriteAction';
export default function JobAdvertisementDetail() {

  let { id } = useParams();
  const dispatch = useDispatch()
  const jobAdvertisementFavorite = useSelector(state => state.jobAdvertisementFavorite)
  const jobAdvertisement = useSelector(state => state.jobAdvertisements)
  console.log(jobAdvertisementFavorite)
  useEffect(() => {
    dispatch(getJobAdvertisementFavoritesById(69,id))
    dispatch(getJobAdvertisementByIdApi(id))
  }, [])


  const handleSaveFavorites = (candidateId, jobAdvertisementId) => {
 
    //düzenlecek
 
    dispatch(postJobAdvertisementFavoriteApi(candidateId,jobAdvertisementId))
  }



  return (
    <div>

      <div className="max-h-screen flex items-center justify-center px-4">

        <div className="max-w-4xl  bg-white w-full rounded-lg shadow-xl">

          <JobAdvertisementFavoriteButton onClick={() => handleSaveFavorites(69, jobAdvertisement.id)} />
          
          <div className="p-4 border-b">
            <h2 className="text-2xl ">
              {jobAdvertisement.jobPosition}
            </h2>
            <p className="text-sm text-gray-500">
              <Label color='red' horizontal>
                {jobAdvertisement.workPlaceType}
              </Label>
              <Label color='blue' horizontal>
                {jobAdvertisement.workType}
              </Label>
            </p>
          </div>
          <div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">
                Company Name
              </p>
              <p>
                {jobAdvertisement.companyName}
              </p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">
                Open Position
              </p>
              <p>
                {jobAdvertisement.openPosition}
              </p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">
                Min Salary
              </p>
              <p>
                $ {jobAdvertisement.minSalary}
              </p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">
                Max Salary
              </p>
              <p>
                $ {jobAdvertisement.maxSalary}
              </p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">
                Job Description
              </p>
              <p>
                {jobAdvertisement.jobDescription}
              </p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">
                Created Date - Application Deadline
              </p>
              <p>
                {`${jobAdvertisement.createdDate} / ${ jobAdvertisement.applicationDeadline }`}
              </p>
            </div>

          </div>
        </div>






      </div>
    </div>
  )
}
