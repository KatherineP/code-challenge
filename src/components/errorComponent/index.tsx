import styles from './errorComponent.module.css'

const Error = ({ errorMessage }: { errorMessage: string }) => (
  <div className={styles.wrapper}>
    <p className={styles.errorTitle}>{errorMessage}</p>
  </div>
)

export default Error
