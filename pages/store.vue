<template>
  <div class="min-h-screen bg-primary-100">
    <div class="map min-h-screen">
      <a
        rel="license"
        href="https://freevectormaps.com/indonesia/ID-EPS-02-7001"
      >
        <small hidden>Copyright © Free Vector Maps.com</small>
      </a>
      <div class="box-border p-1 rounded-lg bg-box">
        <p class="text-4xl font-bold text-center">
          {{ $t("come to your city") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.bg-box {
  margin-top: 64pt;
  --tw-bg-opacity: 0.4;
  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
}
.map {
  background-image: url("../assets/map.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 100%;
  margin-right: 24pt;
  margin-left: 24pt;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
