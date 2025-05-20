import { PaginationDtoInterface } from '@/components/Pagination/pagination.interface'

export const defaultCollectionValues: CollectionWithPaginationDtoInterface = {
  dtos: [],
  paginationDto: {
    currentPage: 1,
    total: 0,
    perPage: 10,
    firstPage: null,
    previousPage: null,
    nextPage: null,
    lastPage: null,
  },
}

interface CollectionWithPaginationDtoInterface {
  dtos: []
  paginationDto: PaginationDtoInterface
}
