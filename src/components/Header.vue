<template>
  <header class="w-full text-gray-700 bg-white">
      <div x-data="{ open: false }" class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div class="p-4 flex flex-row items-center justify-between">
          <g-link to="/" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">{{ $static.metadata.siteName }}</g-link>
        </div>
        <nav class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
            <!-- <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Blog</a> -->
            <g-link class="nav-button" to="/">Home</g-link>
            <g-link class="nav-button" to="/about/">Über</g-link>
            <g-link class="nav-button" to="/submit/">Brauerei melden</g-link>
        </nav>
      </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
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
.nav-button {
    @apply px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg;
    color: theme('colors.gray.800');
        
    &:md {
        @apply mt-0 ml-4;
    }

    &:hover {
        @apply bg-gray-200 text-gray-900;
    }

    &:focus {
        @apply text-gray-900 bg-gray-200 outline-none shadow-outline;
    }
}
</style>
