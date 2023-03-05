import axios, { AxiosError } from 'axios'
import { Error } from '~/apis/Autogen/@types'
import { env } from '~/constants/env'
import { PATHS } from '~/constants/paths'
import { camelize } from '~/libs/camelize'
import {
  isUnauthorizedError,
  isForbiddenError,
  isNotFoundError,
} from '~/utils/axios'

const BASE_URL = env.NEXT_PUBLIC_API_BASE_URL

const axiosInstance = axios.create({ baseURL: BASE_URL, withCredentials: true })

axiosInstance.interceptors.response.use(
  (response) => camelize(response),
  (error: AxiosError<Error>) => {
    if (isUnauthorizedError(error)) location.href = PATHS.signIn()
    if (isNotFoundError(error)) location.href = PATHS.home()
    if (isForbiddenError(error)) location.href = PATHS.home()

    return Promise.reject(error)
  },
)

export { axiosInstance }
