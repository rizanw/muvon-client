<template>
  <div class="pt-24 mx-12 mb-12 sm:mx-20 flex flex-col sm:flex-row">
    <div class="flex flex-col mb-8 sm:mr-12">
      <p class="font-bold text-4xl mb-4">Tentang</p>
      <p class="text-justify mb-2">
        Muvon. 2020. Masa-masa sulit memang nyata. Hambatan-hambatan yang muncul
        sering kali mengobrak-abrik rencana dan membenturkan angan-angan dengan
        kenyataan.
      </p>
      <p class="text-justify mb-2">
        Hai, Salam kenal! Nama ku Muvon. Apa kabar kamu? Semoga sehat selalu ya!
        Muvon di sini ingin menjadi teman perjalanan mu. Teman perjalanan yang
        akan membersamaimu di tiap tanjakan dan turunan hingga tercapai
        tujuanmu. Hidup memang tidak selalu baik-baik saja tapi kamu tidak boleh
        menyerah. Jeda bukan berhenti, melambat bukan mengaku tamat, yang
        terpenting adalah Move On karena hidup adalah perjalanan yang penuh
        dengan kejutan!
      </p>
    </div>
    <div class="flex"><img class="object-cover max-h-100 sm:max-w-md rounded-xl" src="../assets/about.jpg"/></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import UnderConstruction from "./UnderConstruction.vue";

  export default defineComponent({
    components: {
      UnderConstruction,
    },
  });
</script>

<style scoped> 
</style>