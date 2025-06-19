<template>
  <div class="pagination">
    <div>
      Pages :
      <pagination-button :per-page="props.perPage" :page="props.firstPage" />
      <pagination-button :per-page="props.perPage" :page="props.previousPage" />
      <pagination-button :per-page="props.perPage" :page="props.currentPage" />
      <pagination-button :per-page="props.perPage" :page="props.nextPage" />
      <pagination-button :per-page="props.perPage" :page="props.lastPage" />
    </div>
    <div>
      <div>Total : {{ props.total }}</div>
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
import {
  PaginationDtoInterface,
  PaginationPerPageFormDataInterface,
  UsePaginationInterface,
} from '@/components/Pagination/pagination.interface'
import { usePagination } from '@/components/Pagination/UsePagination'
import { ref, Ref } from 'vue'

const props = defineProps<PaginationDtoInterface>()
const pagination: UsePaginationInterface = usePagination()

const formData: Ref<PaginationPerPageFormDataInterface> = ref({
  perPage: props.perPage,
})

const perPageOptions: Ref<number[]> = ref([5, 15, 25, 50, 100])

async function handleSubmit(): Promise<void> {
  await pagination.pushRouteWithNewPagination(props.currentPage, formData.value.perPage)
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
