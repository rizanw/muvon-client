<template>
  <div class="min-h-screen pt-24 mx-12">
    <div class="flex flex-col sm:flex-row">
      <div class="flex flex-auto flex-col items-center bg-gray-100 p-12">
        <div class="flex w-full sm:ml-8">
          <p class="text-4xl font-bold mb-8 text-left">Introducing</p>
          <div class="line" />
        </div>
        <img class="max-w-xl mb-8" src="../assets/logo-home.svg" />
        <div class="flex w-full sm:ml-8">
          <p class="text-2xl font-bold mb-4 w-64 sm:w-48 md:w-40 text-left">
            Our Story
          </p>
          <div class="line" />
        </div>
        <p class="max-w-xl mb-4">
          Established in 2020, Muvon is a passionate coffee and tea startups
          aiming to brew the best specialty coffee and tea for our customer. As
          our name derived from the word forest, we aim to grow fast, strong,
          tall and bring life to our surrounding. We want our existence to
          increase coffee and tea quality for our community.
        </p>
        <a
          href="/about"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Read More
          <svg width="22" height="22" fill="white" style="margin-left: 12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <g data-name="arrow-forward">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(-90 12 12)"
                  opacity="0"
                />
                <path
                  d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
      <div class="flex-auto max-w-lg bg-primary-100 sm:my-20 p-12">
        <img class="max-h-max rounded-full" src="../assets/21077009.png" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .line {
    width: 100%;
    height: 2px;
    @apply bg-primary-500;
  }
</style>
