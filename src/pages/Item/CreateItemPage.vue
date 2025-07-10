<template>
  <div>
    <h1>Créer un objet</h1>
    <LoadingComponent v-model="isLoaded">
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
    </LoadingComponent>
  </div>
</template>
<script setup lang="ts">
import LoadingComponent from '@/components/Loading/LoadingComponent.vue'
import { CategoryDtoInterface } from '@/pages/Category/category.interface'
import { getCategories } from '@/pages/Category/category.service'
import { ComponentDtoInterface } from '@/pages/Component/component.interface'
import { getComponents } from '@/pages/Component/component.service'
import { CreateItemFormInterface } from '@/pages/Item/item.interface'
import { createItem } from '@/pages/Item/item.service'
import { RouteNameItemEnum } from '@/router/router.enum'
import { onBeforeMount, ref, Ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoaded: Ref<boolean> = ref(false)
const { push } = useRouter()

const components: Ref<ComponentDtoInterface[]> = ref([])
const categories: Ref<CategoryDtoInterface[]> = ref([])
const formData: Ref<CreateItemFormInterface> = ref({
  componentId: '',
  categoryId: '',
})

// @todo do like component field => move page to ComponentPage section and enforcing the componentId when creating an item from a component
// @todo do get all categories from user with only id and name
onBeforeMount(async () => {
  components.value = await getComponents()
  categories.value = await getCategories()
  isLoaded.value = true
})

async function handleSubmit(): Promise<void> {
  isLoaded.value = false
  await createItem(formData.value)
  await push({ name: RouteNameItemEnum.ITEMS })
}
</script>
