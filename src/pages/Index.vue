<template>
  <Layout>
    <h1>Hello, world!</h1>

    <section class="misson">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
      </p>
    </section>

    <section class="breweries">
      <ol class="breweries__list breweries-list">
        <li v-for="cantoneEdge in $page.cantones.edges" :key="cantoneEdge.node.id">
          <h2>{{cantoneEdge.node.title}}</h2>
          <ol>
            <li v-for="breweryEdge in cantoneEdge.node.belongsTo.edges" :key="breweryEdge.node.id" class="brewery" itemscope itemtype="schema.org/PostalAddress">
              <h2>{{ breweryEdge.node.name }}</h2>
              <dl>
                <dt>Adresse</dt>
                <dd itemprop="streetAddress">{{breweryEdge.node.address}}</dd>
                <dt>Ort</dt>
                <dd itemprop="addressLocality">{{breweryEdge.node.town}}</dd>
                <dt>PLZ</dt>
                <dd itemprop="postalCode">{{breweryEdge.node.zip}}</dd>
                <dt>Web</dt>
                <dd>{{breweryEdge.node.www}}</dd>
                <dt>Shop</dt>
                <dd>{{breweryEdge.node.shop}}</dd>
              </dl>
            </li>
          </ol>
        </li>
      </ol>
    </section>


    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
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
