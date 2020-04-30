import { combineReducers } from 'redux';
import {
  sessionHasErrored,
  sessionIsAvailable,
  sessionIsLoading,
  token
  } from './session';
import { tabs, tabsHasErrored, tabsIsLoading } from './tabs';

export default combineReducers({
  token,
  tabs,
  tabsHasErrored,
  tabsIsLoading,
  sessionHasErrored,
  sessionIsLoading,
  sessionIsAvailable,
});
