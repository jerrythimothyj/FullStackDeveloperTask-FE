import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = compose;

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, applyMiddleware(initialiseSagaMiddleware));
let persistor = persistStore(store);

// const store = createStore(
//     rootReducer,
//     storeEnhancers(
//         applyMiddleware(initialiseSagaMiddleware)
//     )
// );
initialiseSagaMiddleware.run(rootSaga);
export { store, persistor };