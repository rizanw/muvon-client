<template>
  <div class="border border-primary-500 rounded p-1">
    <nuxt-link
      :class="$i18n.getLocaleCookie() == 'id' ? 'selected' : ''"
      :to="switchLocalePath('id')"
      >Bahasa Indonesia</nuxt-link
    >
    <nuxt-link
      :class="$i18n.getLocaleCookie() == 'en' ? 'selected' : ''"
      :to="switchLocalePath('en')"
      >English</nuxt-link
    >
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.selected {
  @apply bg-primary-500;
  @apply p-1;
  @apply px-2;
  @apply text-white;
  @apply rounded;
}
</style>
