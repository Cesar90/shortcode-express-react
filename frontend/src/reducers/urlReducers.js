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
  URL_CREATE_RESET,
} from '../constants/urlConstants'

export const urlListReducer = (state = { urls: [] }, action) => {
  switch (action.type) {
    case URL_LIST_REQUEST:
      return { loading: true, products: [] }
    case URL_LIST_SUCCESS:
      return {
        loading: false,
        urls: action.payload.urls,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case URL_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const urlDetailsReducer = (state = { url: { longUlr: '' } }, action) => {
  switch (action.type) {
    case URL_DETAILS_REQUEST:
      return { ...state, loading: true }
    case URL_DETAILS_SUCCESS:
      return { loading: false, url: action.payload }
    case URL_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const ulrCreateReducer = (state = { url: {} }, action) => {
  switch (action.type) {
    case URL_CREATE_REQUEST:
      return { loading: true }
    case URL_CREATE_SUCCESS:
      return { loading: false, success: true, url: action.payload }
    case URL_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case URL_CREATE_RESET:
      return { url: {} }
    default:
      return state
  }
}
