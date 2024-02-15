// src/redux/actions/authActions.js
import React from 'react'

import axios from 'axios';
import { BASE_URL } from '../../config';

export const login = (credentials) => async (dispatch) => {
  try {
    console.warn("********", credentials)
    const response = await axios.post(`${BASE_URL}/api/v1/sign_in`, credentials);
    console.warn("********", response.data)
    if (response.data.status == 401) {
      dispatch({ type: 'LOGIN_FAILURE', payload: response.data.message });
    }
    else{
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    }
    
  } catch (error) {
    console.warn("********", error)
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};


