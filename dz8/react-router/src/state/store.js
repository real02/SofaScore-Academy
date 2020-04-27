import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './rootReducer'

const persistConfig = {
  key: 'sofa private league',
  storage,
  whitelist: ['login', 'signUp'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(logger))

export const persistor = persistStore(store)