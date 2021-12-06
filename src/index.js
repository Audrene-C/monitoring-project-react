// client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// Import your reducers and routes here
// import AlerteRoutes from './routes/alerte.js';
import MyRoutes from './routes/myroutes.js';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import Footer from './components/Footer';

const history = createBrowserHistory();
// const store = createStore(
//   combineReducers({
//     router: connectRouter(history),
//     form,
//     /* Add your reducers here */
//     Auth,
//     Message
//   }),
//   applyMiddleware(routerMiddleware(history), thunk)
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          {MyRoutes}
        </Switch>
      </ConnectedRouter>
      <Footer />
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
