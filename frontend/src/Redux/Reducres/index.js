import {combineReducers} from "redux";
import {userReducer}from './UserReducres';
import {courReducer}from './courReducre';
import {libraryReducer} from "./libraryReducres";
import {postReducer}from './postReducer'
export const rootReducers=combineReducers({userReducer,courReducer,libraryReducer,postReducer})