'use client'

import { CustomPagination } from './Pagination.style'

interface Props {
  activeColor: string
  page: number
  count: number
  onChangeHandler: (event: React.ChangeEvent<unknown>, page: number) => void
}

export default function Pagination({ activeColor, page, count, onChangeHandler }: Props) {
  return (
    <CustomPagination
      activeColor={activeColor}
      page={page}
      count={count}
      size='large'
      onChange={onChangeHandler}
    />
  )
}
