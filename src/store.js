import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {categoryListReducer} from './reducers/categoryReducer'

const reducer = combineReducers({
    categoryList: categoryListReducer,
});

const middleware = [thunk]

const initialState = {
    categoryList: {}
}
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;