import axios from 'axios'
import {
  URL_LIST_REQUEST,
  URL_LIST_SUCCESS,
  URL_LIST_FAIL,
  URL_DETAILS_REQUEST,
  URL_DETAILS_SUCCESS,
  URL_DETAILS_FAIL,
  URL_CREATE_REQUEST,
  URL_CREATE_SUCCESS,
  URL_CREATE_FAIL,
} from '../constants/urlConstants'
import { logout } from './userActions'

export const listUrls =
  (pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: URL_LIST_REQUEST })

      const { data } = await axios.get(`/api/urls?pageNumber=${pageNumber}`)

      dispatch({
        type: URL_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: URL_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const urlDetails = (code) => async (dispatch) => {
  try {
    dispatch({ type: URL_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/urls/${code}`)

    dispatch({
      type: URL_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: URL_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createProduct = (url) => async (dispatch, getState) => {
  try {
    dispatch({
      type: URL_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/urls`, url, config)

    dispatch({
      type: URL_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: URL_CREATE_FAIL,
      payload: message,
    })
  }
}
