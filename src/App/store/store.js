import createSagaMiddleware from "@redux-saga/core";
import { createStore,applyMiddleware} from "redux";
import reducer from "./reducers";
import rootSaga from "./saga/index";
const sagaMiddleware = createSagaMiddleware()
const store= createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store