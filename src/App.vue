<template>
  <div class="app">
    <Header />
    <router-view />
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
