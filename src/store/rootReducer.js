import { combineReducers } from "redux";
import candidateReducer from "./reducers/candidateReducer";


import companyReducer from "./reducers/companyReducer";
import jobAdvertisementReducer from "./reducers/jobAdvertisementReducer";
import workTypeReducer from './reducers/workTypeReducer';
import workPlaceReducer from './reducers/workPlaceReducer';
import jobPositionReducer from './reducers/jobPositionReducer';
import cityReducer from './reducers/cityReducer';
import graduateReducer from "./reducers/graduateReducer"
import educationReducer from './reducers/educationReducer';
import employeeReducer from './reducers/employeeReducer';
import resumeReducer from './reducers/resumeReducer';
import languageReducer from './reducers/languageReducer';
import techolongyReducer from './reducers/techonologyReducer';
import jobExperienceReducer from './reducers/jobExperienceReducer';
import jobAdvertisementFavoriteReducer from './reducers/jobAdvertisementFavoriteReducer';


 const rootReducer = combineReducers({
    jobAdvertisements:jobAdvertisementReducer,
   resume:resumeReducer,
   candidates:candidateReducer,
   companys:companyReducer,
   workTypes:workTypeReducer,
   workPlaces:workPlaceReducer,
   jobPositions:jobPositionReducer,
   cities:cityReducer,
   graduates:graduateReducer,
   educations:educationReducer,
   employee:employeeReducer,
   language:languageReducer,
   techonology:techolongyReducer,
   jobExperience:jobExperienceReducer,
   jobAdvertisementFavorite:jobAdvertisementFavoriteReducer
  
  
  
 })


 export default rootReducer;