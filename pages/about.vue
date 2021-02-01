<template>
  <div class="pt-24 mx-12 mb-12 sm:mx-20 flex flex-col sm:flex-row">
    <div class="flex flex-col mb-8 sm:mr-12">
      <p class="font-bold text-4xl mb-4">{{ $t("about us") }}</p>
      <p class="text-justify mb-6">
        {{ $t("about-text") }}
      </p>
      <p class="text-justify mb-2 italic">
        {{ $t("intro-2") }}
      </p>
      <p class="text-justify mb-2 ">
        {{ $t("intro-1") }}
      </p>
    </div>
    <div class="flex">
      <img
        class="object-cover max-h-100 sm:max-w-md rounded-xl"
        src="../assets/about.jpg"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped></style>
