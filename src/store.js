import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history';
import {
    connectRouter,
    routerMiddleware
} from 'connected-react-router';
import { reducer as form } from 'redux-form';
import auth from './reducers/auth';
import message from './reducers/message';
import currentAlertReducer from './reducers/currentAlert';
import { apiSlice } from './feature/api/apiSlice';

const history = createBrowserHistory();
// const middleware = [thunk];

const store = configureStore({
    reducer: combineReducers({
        router: connectRouter(history),
        form,
        /* Add your reducers here */
        auth,
        message,
        currentAlertReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    }),
    middleware: [routerMiddleware(history), thunk, apiSlice.middleware]
});

export default store;