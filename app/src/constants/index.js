/**
 * Logger
 */
export const activateLogger = true;

/**
 * Redux Store
 */
export const C = {
  OPEN_USER_MODAL: 'OPEN_USER_MODAL',
  CLOSE_USER_MODAL: 'CLOSE_USER_MODAL',
  UPDATE_FIELD: 'UPDATE_FIELD',
  UPDATE_MEETINGS: 'UPDATE_MEETINGS',
  NOTIFY_DB_ERROR: 'NOTIFY_DB_ERROR',
  OPEN_LOGIN_MODAL: 'OPEN_LOGIN_MODAL',
  CLOSE_LOGIN_MODAL: 'CLOSE_LOGIN_MODAL',
  TAB_CHANGE: 'TAB_CHANGE',
  UPDATE_LOGIN_FIELD: 'UPDATE_LOGIN_FIELD',
  REMOVE_EVENT: 'REMOVE_EVENT',
  SUBMIT_LOGIN: 'SUBMIT_LOGIN',
  SUCCESS_LOGIN: 'SUCCESS_LOGIN',
  FAIL_LOGIN: 'FAIL_LOGIN',
  UPDATE_SIGNUP_FIELD: 'UPDATE_SIGNUP_FIELD',
  SUBMIT_SIGNUP: 'SUBMIT_SIGNUP',
  SUBMIT_CALENDAR: 'SUBMIT_CALENDAR',
  SUCCESS_SIGNUP: 'SUCCESS_SIGNUP',
  FAIL_SIGNUP: 'FAIL_SIGNUP',
  UPDATE_USER: 'UPDATE_USER',
  LOG_OUT: 'LOG_OUT',
};

/**
 * Reducer default values
 */
export const defaultTitle = 'Bunga-Bunga';

export const emptyLogin = {
  email: '',
  password: '',
};

export const emptySignup = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const roomNames = [
  'C1',
  'C2',
  'C3',
  'C4',
  'C5',
  'C6',
  'C7',
  'C8',
  'C9',
  'C10',
  'P1',
  'P2',
  'P3',
  'P4',
  'P5',
  'P6',
  'P7',
  'P8',
  'P9',
  'P10',
];
