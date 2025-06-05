<template>
  <h1>Créer un objet</h1>
  <template v-if="isLoaded">
    <form @submit.prevent="handleSubmit">
      <label for="component">Composant</label>
      <select id="component" v-model="formData.componentId">
        <option disabled value="">Choisissez un composant</option>
        <option v-for="component in components" :key="component.id" :value="component.id">
          {{ component.id }}
        </option>
      </select>
      <label for="category">Catégorie</label>
      <select id="category" v-model="formData.categoryId">
        <option disabled value="">Choisissez une catégorie</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
      <input type="submit" value="Créer un objet" />
    </form>
  </template>
  <template v-else>
    <LoadingComponent />
  </template>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { RouteNameItemEnum } from '@/router/router.enum'
import { getComponents } from '@/pages/Component/component.service'
import { createItem } from './item.service'
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { onBeforeMount, ref, Ref } from 'vue'
import { ComponentDtoInterface } from '@/pages/Component/component.interface'
import { CategoryDtoInterface } from '@/pages/Category/category.interface'
import { getCategories } from '@/pages/Category/category.service'
import { CreateItemFormInterface } from './item.interface'

const isLoaded: Ref<boolean> = ref(false)
const router = useRouter()

const components: Ref<ComponentDtoInterface[]> = ref([])
const categories: Ref<CategoryDtoInterface[]> = ref([])
const formData: Ref<CreateItemFormInterface> = ref({
  componentId: '',
  categoryId: '',
})

onBeforeMount(async () => {
  components.value = await getComponents()
  categories.value = await getCategories()
  isLoaded.value = true
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createItem(formData.value)
  await router.push({ name: RouteNameItemEnum.ITEMS })
}
</script>
