<template>
  <button v-if="props.page !== null" @click="pagination.pushRouteWithNewPagination(props.page, props.perPage)">
    {{ props.page }}
  </button>
</template>

<script setup lang="ts">
import { PaginationButtonInterface, UsePaginationInterface } from './pagination.interface'
import { usePagination } from './UsePagination'

const props = defineProps<PaginationButtonInterface>()
const pagination: UsePaginationInterface = usePagination()
</script>
