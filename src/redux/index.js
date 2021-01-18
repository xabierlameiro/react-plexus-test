import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { initialAppState, appReducer, appSagas } from './ducks/app'
import { parse, stringify } from 'flatted'
import { all } from 'redux-saga/effects'

let persistedStore = {
    app: initialAppState,
}

if (typeof localStorage !== 'undefined') {
    const store = localStorage.getItem('store')
    if (store != null) {
        persistedStore = parse(localStorage.getItem('store'))
    }
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
    actionsBlacklist: ['LOADING_REQUEST'],
})

const store = createStore(
    combineReducers({
        app: appReducer,
    }),
    persistedStore,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

store.subscribe(() => {
    if (typeof localStorage !== 'undefined')
        localStorage.setItem('store', stringify(store.getState()))
})

function* rootSaga() {
    yield all([appSagas()])
}

sagaMiddleware.run(rootSaga)

export default store
