import styles from './imageItem.module.css'
import { Image } from '../props_ImageItem'
import { convertToMB } from '../utils'

type ImageState = {
  image: Image
  onImageClick(imageId: string): void
  imageDetail: Image | undefined
}

const ImageItem: React.FC<ImageState> = ({
  onImageClick,
  image,
  imageDetail,
}) => {
  const { url, filename, uploadedBy, sizeInBytes, id } = image
  const sizeInMb = sizeInBytes && convertToMB(sizeInBytes)
  const imageStyles =
    imageDetail?.id === id
      ? `${styles.image} ${styles.selectedImage}`
      : `${styles.image}`
  return (
    <div className={styles.container}>
      <figure>
        <img
          className={imageStyles}
          src={url}
          alt={`uploaded by ${uploadedBy}`}
          onClick={() => onImageClick(id)}
        />
        <figcaption>
          <p className={styles.fileName}>{filename}</p>
          <p className={styles.fileSize}>{sizeInMb} MB</p>
        </figcaption>
      </figure>
    </div>
  )
}

export default ImageItem
