<template>
  <footer class="mx-auto flex md:justify-center p-0 m-0 bg-gray-200">
    <div class="container flex flex-col justify-between relative px-4 py-3">
      <div class="w-auto h-32 flex justify-between">
        <div class="flex flex-col">
          <div class="flex">
            <p class="mr-4">{{ $t("get in touch") }}:</p>
            <SocialMedia />
          </div>
          <div class="flex mt-2">
            <LangSwitcher />
          </div>
        </div>
        <img
          class="max-w-xs max-h-6 transform rotate-90 flex absolute top-14 right-0 hide"
          src="../assets/logo.svg"
        />
      </div>
      <div class="flex w-auto">
        <p class="text-left text-xs text-gray-400">
          © 2020 Muvon Company. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import LangSwitcher from "./LangSwitcher.vue";
import SocialMedia from "./SocialMedia.vue";

export default {
  components: { SocialMedia, LangSwitcher }
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .hide {
    display: none;
  }
}
footer {
  @apply w-full;
}
</style>
