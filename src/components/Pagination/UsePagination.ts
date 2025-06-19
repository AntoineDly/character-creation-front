import { PaginationQueryParamsInterface, UsePaginationInterface } from '@/components/Pagination/pagination.interface'
import router from '@/router/router'
import { ref, Ref } from 'vue'
import { RouteLocationNormalizedLoadedGeneric } from 'vue-router'

const perPage: Ref<number> = ref(15)
const page: Ref<number> = ref(1)

export const usePagination = (): UsePaginationInterface => {
  const getQueryParams = (): PaginationQueryParamsInterface => {
    return {
      perPage: perPage.value,
      page: page.value,
    }
  }

  const setPageAndPerPageInput = (route: RouteLocationNormalizedLoadedGeneric): void => {
    const perPageInput: number = parseInt(route.query.perPage as string)
    const pageInput: number = parseInt(route.query.page as string)
    if (!isNaN(perPageInput)) {
      perPage.value = perPageInput
    }
    if (!isNaN(pageInput)) {
      page.value = pageInput
    }
  }

  const pushRouteWithNewPagination = async (page: number, perPage: number): Promise<void> => {
    await router.push({
      query: { page: page, perPage: perPage },
    })
  }

  const getQueryParamsFromRoute = (route: RouteLocationNormalizedLoadedGeneric): PaginationQueryParamsInterface => {
    setPageAndPerPageInput(route)
    return getQueryParams()
  }

  return {
    getQueryParams,
    getQueryParamsFromRoute,
    setPageAndPerPageInput,
    pushRouteWithNewPagination,
  }
}
