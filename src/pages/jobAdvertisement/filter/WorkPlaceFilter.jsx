import React, { useEffect } from 'react';
import JobAdvertisementFilterInput from "./JobAdvertisementFilterInput"
import { Select } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getWorkPlaceApi } from '../../../store/actions/workPlaceAction';
const WorkPlaceFilter = (props) => {

    const workPlaces = useSelector(state => state.workPlaces)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getWorkPlaceApi())
    }, [])




    const workPlaceFilterOptions = workPlaces.map((workPlace, id) => ({
        key: id,
        value: workPlace.id,
        text: workPlace.type
    }))

    return (
        <div>
            <JobAdvertisementFilterInput size="mini"
                control={Select}
                {...props}
                options={workPlaceFilterOptions}

                placeholder='Work Place Filter' />


        </div>
    );
}

export default WorkPlaceFilter;
