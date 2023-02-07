import imagePickerReducer, {
  saveImageId,
  deleteImageById,
  updateFavorites,
} from './imagePickerSlice'
import { Image as ArrOfImages } from '../../components/props_ImageItem'

type ImagesState = {
  images: ArrOfImages[]
  imageId: string | null
  loading: boolean
  error: string | null
}

const images = [
  {
    id: '74957345-6f5b-4d66-ae9d-5d0071b40279',
    url: 'https://agencyanalytics-api.vercel.app/images/0.jpg',
    filename: 'tennessee_female_rubber.jpg',
    description:
      'Laboriosam eligendi inventore officia nemo. Quisquam explicabo voluptatem. Illo laborum facilis.',
    uploadedBy: 'Ms. Jimmie Cole',
    createdAt: '2017-07-15T08:23:20.462Z',
    updatedAt: '2022-12-16T12:41:33.736Z',
    dimensions: {
      height: 4800,
      width: 3200,
    },
    resolution: {
      height: 72,
      width: 72,
    },
    sizeInBytes: 4812732,
    sharedWith: [],
    favorited: true,
  },
  {
    id: '10515362-54c9-4383-a675-7bf9790b2b7c',
    url: 'https://agencyanalytics-api.vercel.app/images/4.jpg',
    filename: 'female_cyan.jpg',
    description:
      'Magnam consequatur sequi modi qui nemo optio harum. Voluptate veritatis quos sunt quam commodi repellat. Voluptate omnis minima consequuntur aliquid aperiam aliquid maiores reprehenderit. Ab asperiores quam eligendi recusandae iusto voluptatibus. Dignissimos minus beatae omnis fugit voluptatum doloremque repudiandae praesentium optio.',
    uploadedBy: 'Edith Hermann DVM',
    createdAt: '2018-04-06T05:00:10.540Z',
    updatedAt: '2021-12-28T03:23:28.744Z',
    dimensions: {
      height: 2140,
      width: 3200,
    },
    resolution: {
      height: 72,
      width: 72,
    },
    sizeInBytes: 1502723,
    sharedWith: [],
    favorited: true,
  },
]
const id = '10515362-54c9-4383-a675-7bf9790b2b7c'

describe('counter reducer', () => {
  const initialState: ImagesState = {
    images: images,
    imageId: null,
    loading: false,
    error: null,
  }
  it('should handle initial state', () => {
    expect(imagePickerReducer(undefined, { type: 'unknown' })).toEqual({
      images: [],
      imageId: null,
      loading: false,
      error: null,
    })
  })

  it('should handle adding Image Id', () => {
    const actual = imagePickerReducer(initialState, saveImageId(id))
    expect(actual.imageId).toEqual(id)
  })

  it('should handle delete Image By Id', () => {
    const actual = imagePickerReducer(initialState, deleteImageById(id))
    expect(actual.images).toHaveLength(1)
  })

  it('should handle updating Favorites Images by Id', () => {
    const actual = imagePickerReducer(initialState, updateFavorites(id))
    expect(actual.images[0]).toEqual(
      expect.not.objectContaining({ favorited: false })
    )
  })
})
