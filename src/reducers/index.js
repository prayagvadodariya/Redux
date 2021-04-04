import { combineReducers } from 'redux';
import subjectsReducer from './subjectsReducer'

const rootReducer = combineReducers({
    subjectsReducer,
});

export default rootReducer

