<template>
  <header class="w-full text-gray-700 bg-white">
      <div class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div class="p-4 flex flex-row items-center justify-between">
          <g-link to="/" class="site-title">{{ $static.metadata.siteName }}</g-link>
        </div>
        <nav class="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <g-link class="nav-button" to="/">Home</g-link>
            <g-link class="nav-button" to="/submit/">Brauerei melden</g-link>
            <g-link class="nav-button" to="/about/">Über</g-link>
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
    @apply px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg mr-2;
    color: theme('colors.gray.800');
        
    &:md {
        @apply mt-0 ml-4;
    }

    &:hover {
        @apply text-steel-blue;
    }

    &:focus {
        @apply text-gray-900 outline-none;
    }
}

.active--exact {
    color: theme('colors.steel-blue');
}

.site-title {
    @apply text-lg tracking-widest text-lager-yellow uppercase rounded-lg bg-transparent font-serif;

    &:focus {
        @apply outline-none shadow-outline;
    }
}
</style>
