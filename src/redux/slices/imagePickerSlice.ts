import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit'

import { Image as ArrOfImages } from '../../components/props_ImageItem'

type ImagesState = {
  images: ArrOfImages[]
  imageId: string | null
  loading: boolean
  error: string | null
}

export const fetchImages = createAsyncThunk<
  ArrOfImages[],
  undefined,
  { rejectValue: string }
>('imagePicker/fetchImages', async function (_, { rejectWithValue }) {
  try {
    const response = await fetch(
      'https://agencyanalytics-api.vercel.app/images.json'
    )
    const data = await response.json()
    return data
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(
        `Ooops! ${error.message} 😔. Please try again later.`
      )
    }
    return String(error)
  }
})

const initialState: ImagesState = {
  images: [],
  imageId: null,
  loading: false,
  error: null,
}

const imagePickerSlice = createSlice({
  name: 'imagePicker',
  initialState,
  reducers: {
    saveImageId: (state, action: PayloadAction<string>) => {
      state.imageId = action.payload
    },
    deleteImageById: (state, action: PayloadAction<string>) => {
      const imageId = action.payload
      state.images = state.images.filter((item) => item.id !== imageId)
      if (state.images.length > 1) {
        const sortedImagesByDate = state.images.sort(
          (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
        )
        state.imageId = sortedImagesByDate[0].id
      }
    },
    updateFavorites: (state, action: PayloadAction<string>) => {
      const imageId = action.payload
      const updatedArr = state.images.map((item) =>
        item.id === imageId ? { ...item, favorited: !item.favorited } : item
      )
      state.images = updatedArr
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        const sortedImagesByDate = action.payload.sort(
          (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
        )
        state.images = sortedImagesByDate
        state.imageId = sortedImagesByDate[0].id
        state.loading = false
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload
        state.loading = false
      })
  },
})

export const { saveImageId, deleteImageById, updateFavorites } =
  imagePickerSlice.actions

export default imagePickerSlice.reducer

function isError(action: AnyAction) {
  return action.type.endsWith('rejected')
}
