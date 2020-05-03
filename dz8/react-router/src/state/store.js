import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer'

const persistConfig = {
  key: 'sofa private league',
  storage,
  whitelist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger)))

export const persistor = persistStore(store)