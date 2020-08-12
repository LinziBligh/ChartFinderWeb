import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

const chartsReducer = (state=[], action) => {
  switch (action.type) {
    case 'GET_CHARTS_SUCCESS':
      return action.charts;
      default:
        return state;
  }
}

let chart = chartsReducer(null, {type:'@@INIT'});

const reducers = combineReducers({
  charts:chartsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
)

export default store