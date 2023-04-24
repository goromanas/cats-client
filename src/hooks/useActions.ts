import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'store'

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = <A, M extends ActionCreatorsMapObject<A>>(actions: M) => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch, actions])
}
