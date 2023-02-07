export const convertToMB = (sizeInBytes: number) =>
  (sizeInBytes / (1024 * 1024)).toFixed(1)

export const formatter = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
