<template>
  <Hero>
    <template slot="hero">
      <div class="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl pt-8">
        <h1 class="page-title">Unterstütze lokale Brauereien</h1>
        <section class="misson mb-8">
          <p>
            Auch an Kleinbrauereien geht die Corona-Krise nicht spurlos vorbei. Darum unterstütze eine Brauerei in deiner Nähe oder erweitere deinen Bierhorizont.
          </p>
        </section>
      </div>
    </template>
    <section class="breweries">
      <ol class="breweries__list breweries-list">
        <li v-for="cantoneEdge in $page.cantones.edges" :key="cantoneEdge.node.id" class="mb-12">
          <h2 class="font-serif border-b border-gray-500 mb-4 pb-2">{{cantoneEdge.node.title}}</h2>
          <ol>
            <li v-for="breweryEdge in cantoneEdge.node.belongsTo.edges" 
                :key="breweryEdge.node.id" 
                class="brewery mb-4" 
                itemscope 
                itemtype="schema.org/PostalAddress">
              <h3 class="font-semibold">{{ breweryEdge.node.name }}</h3>
              <div itemprop="streetAddress">{{breweryEdge.node.address}}</div>
              <div>
                <span class="pr-1" itemprop="postalCode">{{breweryEdge.node.zip}}</span><span itemprop="addressLocality">{{breweryEdge.node.town}}</span>
              </div>
              <div>
                <a :href="breweryEdge.node.www">{{breweryEdge.node.www}}</a>
              </div>
              <div v-if="breweryEdge.node.shop">
                <a :href="breweryEdge.node.shop">{{breweryEdge.node.shop}}</a>
              </div>
            </li>
          </ol>
        </li>
      </ol>
    </section>
  </Hero>
</template>

<page-query>
query {
  cantones: allCantone(sortBy: "title", order: ASC)  {
    edges {
      node {
        id
        title
        belongsTo {
          edges {
            node {
              ... on Brewery {
                id
                name
                address
                town
                zip
                www
                shop
              }
            }
          }
          totalCount
        }
      }
    }
  }
}
</page-query>

<script>
import Hero from '~/layouts/Hero.vue'

export default {
  metaInfo: {
    title: 'Unterstütze Schweizer Brauereien'
  },
  components: {
    Hero
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.hero {
  height: 400px;
  background-image: url('../assets/beer-bar.jpg');
  background-size: cover;
  color: theme('colors.white');
}
</style>
