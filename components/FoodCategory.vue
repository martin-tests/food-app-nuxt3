<template>
  <article class="rounded-2xl border p-4">
    <NuxtLink class="text-center align-bottom h-[300px]" :to="'/category/' + category">
      <img class="mx-auto" :src="'/images/categories/' + category?.toLowerCase() + '.png'" />
      <h2 class="text-lg sm:text-2xl font-normal">{{ category }}</h2>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
defineProps({
  category: String
})
</script>