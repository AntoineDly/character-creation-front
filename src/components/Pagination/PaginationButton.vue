<template>
  <button @click="currentPage = props.page">
    {{ props.page }}
  </button>
</template>

<script setup lang="ts">
import { PaginationButtonInterface } from '@/components/Pagination/pagination.interface'

const props = defineProps<PaginationButtonInterface>()
const currentPage = defineModel<number>('currentPage', { required: true })
</script>
