import { combineReducers } from 'redux';
import tasks from './tasks';
import Auth from './Auth';
import { alerts } from './alerts';

export default combineReducers({ tasks, Auth,alerts })
