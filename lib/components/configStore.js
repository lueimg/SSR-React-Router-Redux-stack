import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'components/reducers/index.js';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk, logger);

export default createStore(rootReducer, middleware);