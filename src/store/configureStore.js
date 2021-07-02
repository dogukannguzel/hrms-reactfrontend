import { createStore ,applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk"
import thunkMiddleware from 'redux-thunk'

export default function configureStore() {
    return createStore(rootReducer,applyMiddleware(thunk,thunkMiddleware))
}



