import {LOGIN_URL, REGISTER_URL, CREATEBOARD_URL, GETALLBOARDS_URL} from '../constants/constants';
import {httpRequest} from '../Utils/httpRequest/httpRequest';
import { getToken } from './helper';

const TOKEN = getToken();
export const LOGIN_CONFIG = async (emailid, password) => {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '*/*' },
      body: JSON.stringify({
        email: emailid,
        password: password,
      }),
    };
    try {
      return httpRequest(LOGIN_URL, config);
    } catch (error) {
      console.log('error', error);
    }
  };


  export const REGISTER_CONFIG = async (firstName, lastName, email, password, confirmPassword) => {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '*/*'  },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }),
    };
    try {
      return httpRequest(REGISTER_URL, config);
    } catch (error) {
      console.log('error', error);
    }
  };

  export const CREATEBOARD_CONFIG = async (boardname) => {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '*/*',Authorization: `Bearer ${TOKEN}` },
      body: JSON.stringify({
       name: boardname,
      }),
    };
    try {
      return httpRequest(CREATEBOARD_URL, config);
    } catch (error) {
      console.log('error', error);
    }
  };

  export const getAllBoards_config = async () => {
    const config = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', Authorization: `Bearer ${TOKEN}` },
    };
    try {
      return httpRequest(GETALLBOARDS_URL, config);
    } catch (error) {
      console.log('error', error);
    }
  };
