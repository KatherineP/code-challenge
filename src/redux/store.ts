import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import imagePickerReducer from './slices/imagePickerSlice'

export const store = configureStore({
  reducer: {
    imagePicker: imagePickerReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
