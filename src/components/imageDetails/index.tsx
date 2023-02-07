import React from 'react'
import styles from './imageDetails.module.css'

import { Image } from '../props_ImageItem'
import { BsHeart } from 'react-icons/bs'
import { BsHeartFill } from 'react-icons/bs'
import { convertToMB, formatter } from '../utils'

interface ImageDetailsState {
  image: Image | undefined
  onDeleteClick(imageId: string): void
  onFavoritedHandle(imageId: string): void
}

const ImageDetails: React.FC<ImageDetailsState> = ({
  image,
  onDeleteClick,
  onFavoritedHandle,
}) => {
  const {
    url,
    filename,
    uploadedBy,
    sizeInBytes,
    createdAt,
    updatedAt,
    dimensions,
    resolution,
    description,
    id = '',
    favorited,
  } = image || {}
  const sizeInMb = sizeInBytes && convertToMB(sizeInBytes)
  let createdAtDate
  let updatedAtDate

  if (createdAt && updatedAt) {
    createdAtDate = new Date(createdAt)
    updatedAtDate = new Date(updatedAt)
  }

  const details = [
    {
      name: 'Uploaded by',
      value: uploadedBy,
    },
    {
      name: 'Created',
      value: formatter.format(createdAtDate),
    },
    {
      name: 'Last modified',
      value: formatter.format(updatedAtDate),
    },
    {
      name: 'Dimensions',
      value: `${dimensions?.height} x ${dimensions?.width}`,
    },
    {
      name: 'Resolution',
      value: `${resolution?.height} x ${resolution?.width}`,
    },
  ]

  return (
    <div className={styles.container}>
      <figure>
        <img
          className={styles.image}
          src={url}
          alt={`uploaded by ${uploadedBy}`}
        />
        <figcaption className={styles.imageCaptionWrapper}>
          <div className={styles.firstCol}>
            <p className={styles.fileName}>{filename}</p>
            <p className={styles.fileSize}>{sizeInMb} MB</p>
          </div>
          <div className={styles.secondCol}>
            <button
              className={styles.favButton}
              onClick={() => onFavoritedHandle(id)}
            >
              {favorited ? <BsHeartFill /> : <BsHeart />}
            </button>
          </div>
        </figcaption>
      </figure>
      <div className={styles.info}>
        <p className={styles.fileName}>Informnation</p>
        {details.map((i) => (
          <React.Fragment key={i.name}>
            <hr />
            <p className={styles.infoItem}>
              {i.name}
              <span className={styles.infoValue}>{i.value}</span>
            </p>
          </React.Fragment>
        ))}
        {description && (
          <>
            <hr />
            <p className={styles.fileName}>Description</p>
            <p className={styles.desc}>{description}</p>
          </>
        )}
        <button className={styles.deleteBtn} onClick={() => onDeleteClick(id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default ImageDetails
