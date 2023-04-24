import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store'

export const useAppDispatch: () => AppDispatch = useDispatch

export const useActions = <A, M extends ActionCreatorsMapObject<A>>(actions: M) => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch, actions])
}
