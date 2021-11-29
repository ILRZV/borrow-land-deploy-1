import AxiosInstance from './AxiosInstance'
import { RequestForm } from '../../Components/RequestForm/RequestForm'
import {
  CATEGORY_KEY,
  LOCATION_KEY,
  NEWEST,
  SEARCH_KEY,
  SORTER_ORDER,
} from '../types'
import { RequestBack } from '../../mapping/getMappedRequests'

const IS_ACTIVE = 'isActive'

export type Request = {
  id: number
  active: boolean
  name: string
  description: string
  address: string
  startDate: Date
  endDate: Date
  categoryId: number
  locationId: number
  userId: number
  picture?: string
  updatedAt: Date
  createdAt: Date
}

export const getRequest = async (requestId: string | number) => {
  const response = await AxiosInstance.get(`/requests/:${requestId}`)
  return response.data
}

export const fetchAllRequests = async () => {
  const response = await AxiosInstance.get<RequestBack[]>('/requests')
  return response.data
}

export const fetchFilteredRequests = async (
  me: boolean,
  locations: number[],
  categories: number[],
  order: string = SORTER_ORDER.ASC,
  isActive: boolean,
  search: string,
  page: number,
  limit: number
) => {
  try {
    const isMe = me ? 'me?' : ''
    const params = {
      locations: locations ? locations.toString() : [],
      categories: categories ? categories.toString() : [],
      order: order === NEWEST ? SORTER_ORDER.DESC : SORTER_ORDER.ASC,
      isActive,
      search,
      page,
      limit,
    }

    Object.entries(params).map(([key, value]) => {
      if (!value && key !== IS_ACTIVE) {
        delete params[key]
      }
    })
    const response = await AxiosInstance.get<RequestBack[]>(
      `/requests/${isMe}`,
      {
        params,
      }
    )
    return response.data
  } catch (e) {
    return []
  }
}

export const createRequest = async (request: RequestForm) => {
  try {
    const response = await AxiosInstance.post('/requests', request)
    return response.data
  } catch (e) {
    return e
  }
}
export const updateRequest = async (
  request: RequestForm,
  id: string | number
) => {
  try {
    const response = await AxiosInstance.put(`/requests/:${id}`, request)
    return response.data
  } catch (e) {
    return e
  }
}

export const archiveRequest = async (requestId: string | number) => {
  const response = await AxiosInstance.put(
    `/requests/:${requestId}/archivation`
  )
  return response.data as Request
}
