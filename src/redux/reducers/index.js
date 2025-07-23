import { combineReducers } from '@reduxjs/toolkit';
import portfolioReducer from './portfolioReducer';

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
});

export default rootReducer;