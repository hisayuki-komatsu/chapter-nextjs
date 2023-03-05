import aspida from '@aspida/axios'
import api from '~/apis/Autogen/$api'
import { axiosInstance } from '~/libs/axios'

export const apiClient = api(aspida(axiosInstance))
