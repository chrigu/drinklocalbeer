<template>
  <Hero>
    <template slot="hero">
      <div class="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl pt-8">
        <h1 class="page-title">Melde deine Lieblingsbrauerei</h1>
        <p class="mb-4">
          Ist deine schweizer Lieblingsbrauerei hier nicht aufgeführt? Kein Problem! Fülle das
          Formular aus und wir werden die Brauerei in die Liste aufnehmen.
        </p>
      </div>
    </template>
    <form name="submit-brewery" netlify>
      <div class="form-field">
        <label class="form-field__label" for="name">Name der Brauerei</label>
        <input
          class="form-field__input"
          type="text"
          name="name"
          id="name"
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
          required
        />
      </div>
      <div class="form-field">
        <label class="form-field__label" for="shop">Shop</label>
        <input
          class="form-field__input"
          type="text"
          name="shop"
          id="shop"
          required
        />
      </div>
      <div class="form-field">
        <input type="submit" value="Abschicken!" class="bg-steel-blue p-4 mt-2 rounded-lg hover:bg-water-blue cursor-pointer"/>
      </div>
    </form>
  </Hero>
</template>

<script>
import Hero from '~/layouts/Hero.vue'

export default {
  metaInfo: {
    title: "Melden"
  },
  components: {Hero}
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
