<template>
  <div class="app flex flex-col min-h-screen">
    <Header />
    <router-view class="flex-1" />
    <footer class="bg-lager-yellow h-12 lg:px-8 md:px-6 leading-10">
        <p class="footer-links">
            <!--a href="https://github.com/chrigu/drinklocalbeer" target="_blank" rel="noopener">Code</a-->
        </p>
    </footer>
  </div>
</template>


<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>


<style>
body {
  /* font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; */
  margin:0;
  padding:0;
  line-height: 1.5;
  color: theme('colors.gray.800');
}

a {
  color: theme('colors.lambic-red');
  &:hover {
    color: theme('colors.water-blue');
  }
}

.page-title {
  @apply text-3xl font-serif mb-4;
}
</style>
