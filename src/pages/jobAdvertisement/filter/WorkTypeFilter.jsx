import React, { useState } from 'react';
import JobAdvertisementFilterInput from "./JobAdvertisementFilterInput";
import { Select } from 'semantic-ui-react';
import WorkTypeService from '../../../services/workTypeService';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWorkTypesApi } from '../../../store/actions/workTypeActions';
const WorkTypeFilter = (props) => {

    const workTypes = useSelector(state => state.workTypes)

    const dispatch = useDispatch()
    
    useEffect(() => {

        dispatch(getWorkTypesApi())
        

    }, [])

    const workTypeFilterOptions = workTypes.map((workType, id) => ({
        key: id,
        value: workType.id,
        text: workType.type
    }))


    return (
        <div>
            <JobAdvertisementFilterInput size="mini"
                control={Select}
                options={workTypeFilterOptions}
                {...props}
                placeholder='Work Type Filter' />
        </div>
    );
}

export default WorkTypeFilter;
