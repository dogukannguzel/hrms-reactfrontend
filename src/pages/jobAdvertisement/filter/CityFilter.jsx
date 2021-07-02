import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityApi } from '../../../store/actions/cittyAction';
import { Select } from 'semantic-ui-react';
import JobAdvertisementFilterInput from "./JobAdvertisementFilterInput"
const CityFilter = (props) => {

    const cities = useSelector(state => state.cities)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCityApi())
    },[])



    const citiesFilterOptions = cities.map((city, id) => ({
        key: id,
        value: city.id,
        text: city.name
    }))


    return (
        <div>
              <JobAdvertisementFilterInput size="mini"
                control={Select}
                {...props}
                options={citiesFilterOptions}

                 />
        </div>
    );
}

export default CityFilter;
