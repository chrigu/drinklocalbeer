<template>
  <div class="layout">
    <div class="hero mb-8">
        <slot name="hero" />
    </div>
    <div class="container mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-2 sm:px-0">
      <slot/>
    </div>
  </div>
</template>
