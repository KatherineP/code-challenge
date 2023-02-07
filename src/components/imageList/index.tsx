import React from 'react'

import styles from './imageList.module.css'
import ImageItem from '../imageItem'
import { ImageListProps } from '../props_ImageItem'

export const ImageList: React.FC<ImageListProps> = ({
  onImageClick,
  images,
  imageDetail,
}) => {
  return (
    <div data-testid='list-wrapper' className={styles.container}>
      {!images.length && (
        <p className={styles.noImagesTitle}> It's time to add new photos!</p>
      )}
      {images.length > 0 &&
        images.map((image) => (
          <ImageItem
            image={image}
            key={image.id}
            onImageClick={onImageClick}
            imageDetail={imageDetail}
          />
        ))}
    </div>
  )
}

export default ImageList
