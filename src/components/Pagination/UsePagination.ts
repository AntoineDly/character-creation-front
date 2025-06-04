import { RouteLocationNormalizedLoadedGeneric } from 'vue-router'
import { ref, Ref } from 'vue'
import { PaginationQueryParamsInterface } from '@/components/Pagination/pagination.interface'

const perPage: Ref<number> = ref(15)
const page: Ref<number> = ref(1)

export const usePagination = (route: RouteLocationNormalizedLoadedGeneric): PaginationQueryParamsInterface => {
  const perPageInput: number = parseInt(route.query.perPage as string)
  const pageInput: number = parseInt(route.query.page as string)
  if (!isNaN(perPageInput)) {
    perPage.value = perPageInput
  }
  if (!isNaN(pageInput)) {
    page.value = pageInput
  }

  const pagination: Ref<PaginationQueryParamsInterface> = ref({
    perPage: perPage.value,
    page: page.value,
  })

  return pagination.value
}
