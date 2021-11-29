import React, { useState, memo, useEffect } from 'react'
import { useEffectOnce } from 'react-use'
import { RequestForm } from '../RequestForm'

interface RequestFormProps {
  onClose: () => void
  open: boolean
  requestData?: RequestForm
  id?: string | number
}
export interface RequestForm {
  name: string
  categoryId: number
  locationId: number
  description?: string
  address: string
  startDate: Date
  endDate: Date
  img?: string
}

const RequestEditForm = ({
  onClose,
  open,
  requestData,
  id,
}: RequestFormProps) => {
  return (
    <RequestForm
      onClose={onClose}
      open={open}
      requestData={requestData}
      id={id}
      dateFrom={new Date(requestData?.startDate)}
      dateTo={new Date(requestData?.endDate)}
      submitBtnName={'Update request'}
      formName={'Edit request'}
    />
  )
}
export default memo(RequestEditForm)
