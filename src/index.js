// client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
// On verra plus tard le service worker
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// Import your reducers and routes here
import AlerteRoutes from './routes/alerte.js';
import LoginRoute from './routes/login.js';
import Create from './reducers/alerte/create.js';
import Delete from './reducers/alerte/delete.js';
import Index from './reducers/alerte/index.js';
import List from './reducers/alerte/list.js';
import Show from './reducers/alerte/show.js';
import Update from './reducers/alerte/update.js';
// test fetch api
import axios from 'axios';

async function getAlertes() {
  const result = await axios.get("http://monitoring-project-api.test/api/alertes");
  console.log(result.data['hydra:member'][0]);
}
getAlertes();

const history = createBrowserHistory();
const store = createStore(
  combineReducers({
    router: connectRouter(history),
    form,
    /* Add your reducers here */
    Create,
    Delete,
    Index,
    List,
    Show,
    Update
  }),
  applyMiddleware(routerMiddleware(history), thunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          {LoginRoute}
          {/* {AlerteRoutes} */}
        </Switch>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
