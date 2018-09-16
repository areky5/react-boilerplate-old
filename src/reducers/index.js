import { combineReducers } from 'redux';
import dashboardReducer from './dashboard_reducer';

const appReducer = combineReducers({
  dashboard: dashboardReducer,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
}
export default rootReducer;
