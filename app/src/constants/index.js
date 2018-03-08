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
  SUBMIT_MEETING: 'SUBMIT_MEETING',
  OPEN_LOGIN_MODAL: 'OPEN_LOGIN_MODAL',
  CLOSE_LOGIN_MODAL: 'CLOSE_LOGIN_MODAL',
  TAB_CHANGE: 'TAB_CHANGE',
  UPDATE_LOGIN_FIELD: 'UPDATE_LOGIN_FIELD',
  SUBMIT_LOGIN: 'SUBMIT_LOGIN',
  SUCCESS_LOGIN: 'SUCCESS_LOGIN',
  FAIL_LOGIN: 'FAIL_LOGIN',
  UPDATE_SIGNUP_FIELD: 'UPDATE_SIGNUP_FIELD',
  SUBMIT_SIGNUP: 'SUBMIT_SIGNUP',
  SUCCESS_SIGNUP: 'SUCCESS_SIGNUP',
  FAIL_SIGNUP: 'FAIL_SIGNUP',
  UPDATE_USER: 'UPDATE_USER',
  TOGGLE_DAPP: 'TOGGLE_DAPP',
  ONBOARDING_DONE: 'ONBOARDING_DONE',
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
