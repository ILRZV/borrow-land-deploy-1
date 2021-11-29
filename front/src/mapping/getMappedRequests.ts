import { Request } from '../store/types/request'

export type RequestBack = {
  id: number
  active: boolean
  name: string
  description: string
  address: string
  startDate: Date
  endDate: Date
  CategoryId: number
  LocationId: number
  userId: number
  picture?: string
  updatedAt: Date
  createdAt: Date
}

export const getMappedRequests = (requests: RequestBack[]): Request[] => {
  return requests.map(({ CategoryId, LocationId, ...item }) => {
    return {
      ...item,
      categoryId: CategoryId,
      locationId: LocationId,
    }
  })
}
