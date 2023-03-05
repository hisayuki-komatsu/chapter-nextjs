import { AxiosError } from 'axios'
import { Error } from '~/apis/Autogen/@types'

export const isUnauthorizedError = (
  error: AxiosError<Error>,
): error is AxiosError<Error> => {
  return error.response?.status === 401
}

export const isForbiddenError = (
  error: AxiosError<Error>,
): error is AxiosError<Error> => {
  return error.response?.status === 403
}

export const isNotFoundError = (
  error: AxiosError<Error>,
): error is AxiosError<Error> => {
  return error.response?.status === 404
}
