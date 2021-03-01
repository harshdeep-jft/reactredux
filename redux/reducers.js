import homeReducer from './../components/Home/HomeReducer'
import infoReducer from './../components/Info/InfoReducer'
import { combineReducers } from 'redux';

export default combineReducers({
    homeReducer, infoReducer
});