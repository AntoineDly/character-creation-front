<template>
  <router-link
    :to="{
      name: pagination.route,
      query: { page: pagination.page, perPage: pagination.perPage },
    }"
  >
    {{ pagination.page }}
  </router-link>
</template>

<script setup lang="ts">
import { PaginationRouterLinkInterface } from '@/components/Pagination/pagination.interface'

const pagination = defineProps<PaginationRouterLinkInterface>()
</script>
