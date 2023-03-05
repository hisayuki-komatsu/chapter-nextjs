export const errors = {
  isUnauthorized: 'isUnauthorized',
  isInvalidPresignedUrlError: 'isInvalidPresignedUrlError',
  isIpAddressError: 'isInvalidIpAddressError',
  isRecordNotFound: 'isRecordNotFound',
  isStandardError: 'isStandardError',
} as const

export const commonIsErrors = {
  isUnauthorized: (): boolean =>
    localStorage.getItem(errors.isUnauthorized) !== null,
  isInvalidPresignedUrlError: (): boolean =>
    localStorage.getItem(errors.isInvalidPresignedUrlError) !== null,
  isIpAddressError: (): boolean =>
    localStorage.getItem(errors.isIpAddressError) !== null,
  isRecordNotFound: (): boolean =>
    localStorage.getItem(errors.isRecordNotFound) !== null,
  isStandardError: (): boolean =>
    localStorage.getItem(errors.isStandardError) !== null,
} as const
