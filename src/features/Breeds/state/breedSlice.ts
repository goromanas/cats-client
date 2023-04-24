import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { Breed } from '../Breeds.types'

export interface BreedState {
  searchPhrase: string
  searchParams: Array<keyof Breed>
}

const initialState: BreedState = {
  searchPhrase: '',
  searchParams: ['name']
}

export const breedSlice = createSlice({
  name: 'breed',
  initialState,
  reducers: {
    setSearchPhrase: (state, action: PayloadAction<string>) => {
      state.searchPhrase = action.payload
    },
    addSearchParam(state, action: PayloadAction<keyof Breed>) {
      state.searchParams.push(action.payload)
    },
    removeSearchParam(state, { payload }: PayloadAction<keyof Breed>) {
      const newSearchParams = state.searchParams.filter(item => item !== payload)
      state.searchParams = newSearchParams
    }
  }
})

// Actions
export const { setSearchPhrase, addSearchParam, removeSearchParam } = breedSlice.actions

// Selectors
export const getSearchPhrase = (state: RootState): string => state.breedReducer.searchPhrase
export const getSearchParams = (state: RootState): Array<keyof Breed> => state.breedReducer.searchParams

export const breedReducer = breedSlice.reducer
