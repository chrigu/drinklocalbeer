// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('typeface-open-sans')
require('typeface-roboto-slab')
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: `Unterstütze lokale Brauereien`,
  })
  head.meta.push({
    key: 'og:img',
    name: 'og:img',
    content: `https://www.drinklocalbeer.ch/assets/img/beer-og.jpg`,
  })
  Vue.component('Layout', DefaultLayout)
}
