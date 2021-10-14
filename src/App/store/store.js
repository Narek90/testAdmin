import createSagaMiddleware from "@redux-saga/core";
import { createStore,applyMiddleware} from "redux";
import reducer from "./reducers";
import saga from "./saga/Auth";
const sagaMiddleware = createSagaMiddleware()
const store= createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)
export default store