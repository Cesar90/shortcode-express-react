import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  urlListReducer,
  urlDetailsReducer,
  ulrCreateReducer,
} from './reducers/urlReducers'

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'

export const reducer = combineReducers({
  urlList: urlListReducer,
  urlDetail: urlDetailsReducer,
  urlCreate: ulrCreateReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

export const reducerInitialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

export const middleware = [thunk]

const store = createStore(
  reducer,
  reducerInitialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
