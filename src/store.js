import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import RootReducer from './Reducer/RootReducer'
import createSagaMiddleware from 'redux-saga'
import { exampleSaga } from './Saga/Saga'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddeware = createSagaMiddleware()
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddeware))
)

sagaMiddeware.run(exampleSaga)
export default store
