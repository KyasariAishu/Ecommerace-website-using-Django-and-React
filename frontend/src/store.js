// src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers,productDetailsReducers } from './reducers/productReducers'


const reducer = combineReducers({
  productList:productListReducers,
  productDeatils:productDetailsReducers,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
