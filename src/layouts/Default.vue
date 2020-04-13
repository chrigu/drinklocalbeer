<template>
  <div class="layout">
    <Header />
    <div class="container mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
      <slot/>
    </div>
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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  color: theme('colors.gray.800');
}

a {
  color: theme('colors.glass-blue');
  &:hover {
    color: theme('colors.blue.800');
  }
}

.page-title {
  @apply text-3xl font-semibold mb-4;
}

/* .layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
} */
</style>
