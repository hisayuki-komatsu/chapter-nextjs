import aspida from '@aspida/axios'
import axios, { AxiosInstance } from 'axios'
import api from '~/api/Autogen/$api'
import { env } from '~/constants/env'

const BASE_URL = env.NEXT_PUBLIC_API_BASE_URL

const configuredAxiosClient = (baseURL: string): AxiosInstance =>
  axios.create({ baseURL, withCredentials: true })

export const apiClient = api(aspida(configuredAxiosClient(BASE_URL)))
