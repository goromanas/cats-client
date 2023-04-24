import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store'

export interface BreedState {
  searchPhrase: string
}

const initialState: BreedState = {
  searchPhrase: ''
}

export const breedSlice = createSlice({
  name: 'breed',
  initialState,
  reducers: {
    setSearchPhrase: (state, action: PayloadAction<string>) => {
      state.searchPhrase = action.payload
    }
  }
})

// Actions
export const { setSearchPhrase } = breedSlice.actions

// Selectors
export const getSearchPhrase = (state: RootState): string => state.breedReducer.searchPhrase

export const breedReducer = breedSlice.reducer
