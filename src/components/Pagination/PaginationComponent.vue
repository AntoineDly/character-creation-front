<template>
  <div class="pagination">
    <div>
      Pages :
      <pagination-router-link
        :per-page="pagination.paginationDto.perPage"
        :route="pagination.route"
        :page="pagination.paginationDto.firstPage"
      />
      <pagination-router-link
        :per-page="pagination.paginationDto.perPage"
        :route="pagination.route"
        :page="pagination.paginationDto.previousPage"
      />
      <pagination-router-link
        :per-page="pagination.paginationDto.perPage"
        :route="pagination.route"
        :page="pagination.paginationDto.currentPage"
      />
      <pagination-router-link
        :per-page="pagination.paginationDto.perPage"
        :route="pagination.route"
        :page="pagination.paginationDto.nextPage"
      />
      <pagination-router-link
        :per-page="pagination.paginationDto.perPage"
        :route="pagination.route"
        :page="pagination.paginationDto.lastPage"
      />
    </div>
    <div>
      <div>Total : {{ pagination.paginationDto.total }}</div>
      <form @submit.prevent="handleSubmit">
        <label for="perPage">Nombre d'éléments par page</label>
        <select id="parameters" v-model="formData.perPage">
          <option v-for="perPageOption in perPageOptions" :key="perPageOption" :value="perPageOption">
            {{ perPageOption }}
          </option>
        </select>
        <input type="submit" value="Filtrer" />
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PaginationInterface } from './pagination.interface'
import { Ref, ref } from 'vue'
import router from '@/router/router'
import PaginationRouterLink from '@/components/Pagination/PaginationRouterLink.vue'

const pagination = defineProps<PaginationInterface>()

const formData = ref({
  perPage: pagination.paginationDto.perPage,
})
const perPageOptions: Ref<number[]> = ref([5, 15, 25, 50, 100])

async function handleSubmit(): Promise<void> {
  await router.push({
    name: pagination.route,
    query: { page: pagination.paginationDto.currentPage, perPage: formData.value.perPage },
  })
}
</script>
<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  * {
    align-items: baseline;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
}
</style>
