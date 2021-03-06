// @flow
import { C } from '../constants';


export const updateUserEvents = (userEvents: Array<Object>, roomEvents: Object) => (
  {
    type: C.UPDATE_MEETINGS,
    payload: {
      userEvents,
      roomEvents,
    },
  });

export const updateUserData = (user: Object) => (
  {
    type: C.UPDATE_USER,
    payload: user,
  });

export const openLoginModal = () => (
  {
    type: C.OPEN_LOGIN_MODAL,
  });

export const closeLoginModal = () => (
  {
    type: C.CLOSE_LOGIN_MODAL,
  });

export const changeLoginTab = () => (
  {
    type: C.TAB_CHANGE,
  });

export const updateUserLoginField = (login: Object) => (
  {
    type: C.UPDATE_LOGIN_FIELD,
    payload: login,
  });

export const submitUserLogin = () => (
  {
    type: C.SUBMIT_LOGIN,
  });

export const successUserLogin = () => (
  {
    type: C.SUCCESS_LOGIN,
  });

export const failUserLogin = (errors: Object) => (
  {
    type: C.FAIL_LOGIN,
    payload: errors,
  });

export const updateUserSignupField = (signup: Object) => (
  {
    type: C.UPDATE_SIGNUP_FIELD,
    payload: signup,
  });

export const submitUserSignup = () => (
  {
    type: C.SUBMIT_SIGNUP,
  });

export const successUserSignup = (message: string) => (
  {
    type: C.SUCCESS_SIGNUP,
    payload: message,
  });

export const failUserSignup = (errors: Object) => (
  {
    type: C.FAIL_SIGNUP,
    payload: errors,
  });

export const logOutUser = () => (
  {
    type: C.LOG_OUT,
  });

export const openUserModal = (kind: boolean, event: Object) => (
  {
    type: C.OPEN_USER_MODAL,
    payload: {
      kind,
      event,
    },
  });

export const submitUserCalendar = () => (
  {
    type: C.SUBMIT_CALENDAR,
  });

export const closeUserModal = () => (
  {
    type: C.CLOSE_USER_MODAL,
  });

export const updateUserField = (field: string, value: string) => (
  {
    type: C.UPDATE_FIELD,
    payload: {
      field,
      value,
    },
  });
