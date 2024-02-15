import React from 'react'

import axios from 'axios';
import { BASE_URL } from '../../config';

export const post = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    console.warn("********", response.data)
    dispatch({ type: 'POST_LIST', payload: response.data });
  } catch (error) {
    console.warn("********", error)
    dispatch({ type: 'POST_FAILURE', payload: error.message });
  }
};