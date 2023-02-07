import { createSelector } from 'reselect'
import { RootState } from '../store'

export const stateSelector = (state: RootState) => state.imagePicker
export const imageIDSelector = (state: RootState) => state.imagePicker.imageId
export const imagesSelector = (state: RootState) => state.imagePicker.images

export const selectFavorited = createSelector(imagesSelector, (images) =>
  images.filter((image) => image.favorited === true)
)

export const selectImageDetail = createSelector(
  imagesSelector,
  imageIDSelector,
  (images, id) => images.find((image) => image.id === id)
)
