<template>
  <div class="pagination">
    <div>
      Pages :
      <PaginationButton
        v-if="pagination.firstPage !== null"
        v-model:current-page="pagination.currentPage"
        :per-page="pagination.perPage"
        :page="pagination.firstPage"
      />
      <PaginationButton
        v-if="pagination.previousPage !== null"
        v-model:current-page="pagination.currentPage"
        :per-page="pagination.perPage"
        :page="pagination.previousPage"
      />
      {{ pagination.currentPage }}
      <PaginationButton
        v-if="pagination.nextPage !== null"
        v-model:current-page="pagination.currentPage"
        :per-page="pagination.perPage"
        :page="pagination.nextPage"
      />
      <PaginationButton
        v-if="pagination.lastPage !== null"
        v-model:current-page="pagination.currentPage"
        :per-page="pagination.perPage"
        :page="pagination.lastPage"
      />
    </div>
    <div>
      <div>Total : {{ pagination.total }}</div>
      <form @submit.prevent="handleSubmit">
        <label for="perPage">Nombre d'éléments par page</label>
        <select id="parameters" v-model="perPage">
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
import { PaginationDtoInterface } from '@/components/Pagination/pagination.interface'
import PaginationButton from '@/components/Pagination/PaginationButton.vue'
import { ref, Ref } from 'vue'

const pagination = defineModel<PaginationDtoInterface>('pagination', { required: true })

const perPageOptions: Ref<number[]> = ref([5, 15, 25, 50, 100])

const perPage = ref(pagination.value.perPage)

const handleSubmit = () => {
  pagination.value.perPage = perPage.value
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
