export interface Dimensions {
  height: number
  width: number
}

export interface Resolution {
  height: number
  width: number
}

export interface ImageListProps {
  images: Image[]
  onImageClick(imageId: string): void
  imageDetail: Image | undefined
}

export interface Image {
  id: string
  url: string
  filename: string
  description: string
  uploadedBy: string
  createdAt: any
  updatedAt: any
  dimensions: Dimensions
  resolution: Resolution
  sizeInBytes: number
  sharedWith: any[]
  favorited: boolean
}
