import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root_saga';
import reducers from './root_reducer';
import About from './about/About';
import Maze from './mazegame/mazegame';
import history from './history';

//import Loadable from 'components/Loadable';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

const routes = (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Maze} />  
        <Route exact path='/about' component={About} />          
        
      </Switch>
    </Router>
);

export default routes;
