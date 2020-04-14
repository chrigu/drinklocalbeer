<template>
  <Hero>
    <template slot="hero">
      <div class="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl pt-8 px-2 sm:px-0">
        <h1 class="page-title">Melde deine Lieblingsbrauerei</h1>
        <p class="mb-4">
          Ist deine schweizer Lieblingsbrauerei hier nicht aufgeführt? Kein Problem! Fülle das
          Formular aus und wir werden die Brauerei in die Liste aufnehmen.
        </p>
      </div>
    </template>
    <form name="submit-brewery" data-netlify="true" @submit.prevent="handleSubmit" v-if="!success">
      <div class="form-field">
        <label class="form-field__label" for="name">Name der Brauerei</label>
        <input
          class="form-field__input"
          type="text"
          name="name"
          id="name"
          v-model="form.name"
          required
        />
      </div>
      <div class="form-field">
        <label class="form-field__label" for="address">Adresse</label>
        <input
          class="form-field__input"
          type="text"
          name="address"
          id="address"
          placeholder="Hauptstrasse 1, 3000 Bern"
          v-model="form.address"
          required
        />
      </div>
      <div class="form-field">
        <label class="form-field__label" for="website">Webseite</label>
        <input
          class="form-field__input"
          type="text"
          name="website"
          id="website"
          placeholder="https://www.drinklocalbeer.ch"
          v-model="form.website"
          required
        />
      </div>
      <div class="form-field">
        <label class="form-field__label" for="shop">Shop</label>
        <input
          class="form-field__input"
          type="text"
          name="shop"
          id="form.shop"
          placeholder="https://www.drinklocalbeer.ch/shop"
          v-model="form.shop"
        />
      </div>
      <div class="form-field">
        <input type="submit" enterkeyhint="send" value="Abschicken!" class="bg-steel-blue p-4 mt-2 rounded-lg hover:bg-water-blue cursor-pointer"/>
      </div>
    </form>
    <div v-else>
      <p class="mb-4">
          Deine Angaben sind auf dem Weg zu uns und werden bald veröffentlicht.
      </p>
      <p>
          Zurück zur <g-link to="/">Starseite</g-link>.
      </p>
    </div>
  </Hero>
</template>

<script>
import axios from "axios";
import Hero from '~/layouts/Hero.vue'

export default {
  metaInfo: {
    title: "Melden"
  },
  components: {Hero},
  data() {
    return {
      form: {
        name: '',
        address: '',
        website: '',
        shop: ''
      },
      success: false
    }
  },
  methods: {
    // https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "submit-brewery",
          ...this.form
        }),
        axiosConfig
      ).then(() => {
        this.success = true
      })
    }
  }
};
</script>

<style>

.form-field {
  @apply mb-4
}

.form-field__label {
  @apply block font-semibold mb-2;
}

.form-field__input {
  @apply border-gray-300 border rounded-sm h-10 block w-full px-2;
}

.hero {
  height: 400px;
  background-image: url('../assets/bottles.jpg');
  background-size: cover;
  color: theme('colors.white');
}
</style>
