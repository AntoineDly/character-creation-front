<template>
  <div>
    <template v-if="isLoaded">
      <slot />
    </template>
    <template v-else>
      <div>Chargement...</div>
    </template>
  </div>
</template>

<script setup lang="ts">
const isLoaded = defineModel<boolean>('isLoaded', { default: false })
</script>
