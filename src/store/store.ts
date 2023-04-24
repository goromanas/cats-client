import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { breedReducer } from 'features/Breeds/state'

const rootReducer = combineReducers({
  breedReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
