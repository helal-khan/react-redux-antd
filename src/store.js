import {
    compose,
    createStore,
    applyMiddleware
} from 'redux';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from './reducers';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(promise(),thunk)
);

const store = createStore(rootReducer, enhancer);

export default store;



