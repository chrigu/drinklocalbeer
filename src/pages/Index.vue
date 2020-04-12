<template>
  <Layout>
    <h1 class="text-3xl font-semibold">Hello, world!</h1>

    <section class="misson">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
      </p>
    </section>

    <section class="breweries">
      <ol class="breweries__list breweries-list">
        <li v-for="cantoneEdge in $page.cantones.edges" :key="cantoneEdge.node.id" class="mb-12">
          <h2 class="font-semibold border-b border-gray-500 mb-4 pb-2">{{cantoneEdge.node.title}}</h2>
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
                <p>Shop</p>
                <a :href="breweryEdge.node.shop">{{breweryEdge.node.shop}}</a>
              </div>
            </li>
          </ol>
        </li>
      </ol>
    </section>


    <p class="home-links">
      <a href="https://github.com/chrigu/drinklocalbeer" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
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
export default {
  metaInfo: {
    title: 'Unterstütze Schweizer Brauereien'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
