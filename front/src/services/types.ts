export type ResponseDataType = {
  message: string
  [key: string]: unknown
}

export type ResponseType = {
  resultCode: number
  data: ResponseDataType
}

export type CreateRequestType = {
  title: string
  description: string
  address: string
  category: string
  dateFrom: Date
  timeFrom: Date
  dateTo: Date
  timeTo: Date
  image: File
}

export type CreateReplies = {
  text: string
  telegram?: string
  viber?: string
  whatsapp?: string
  facebook?: string
  vkontakte?: string
}

export const LOCATION_KEY = 'locations='
export const CATEGORY_KEY = 'categories='
export const SEARCH_KEY = 'search='
export const NEWEST = 'Newest'
const ASC = 'ASC'
const DESC = 'DESC'
export const SORTER_ORDER = {
  ASC,
  DESC,
}
