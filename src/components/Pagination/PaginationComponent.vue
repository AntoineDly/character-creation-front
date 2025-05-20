<template>
  <div>
    <div>currentPage : {{ pagination.currentPage }}</div>
    <div>perPage : {{ pagination.perPage }}</div>
    <div>total : {{ pagination.total }}</div>
    <div>firstPage : {{ pagination.firstPage }}</div>
    <div>previousPage : {{ pagination.previousPage }}</div>
    <div>nextPage : {{ pagination.nextPage }}</div>
    <div>lastPage : {{ pagination.lastPage }}</div>
  </div>
</template>
<script setup lang="ts">
import { PaginationDtoInterface } from './pagination.interface'

const pagination = defineProps<PaginationDtoInterface>()
</script>
