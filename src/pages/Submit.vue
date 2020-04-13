<template>
  <Layout>
    <h1 class="page-title">Melde deine Lieblingsbrauerei</h1>
    <p class="mb-4">
      Ist deine Lieblingsbrauerei hier nicht aufgeführt? Kein Problem! Fülle das
      Formular aus und wir werden die Brauerei in die Liste aufnehmen.
    </p>
    <form name="submit-brewery" class="">
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
        <input type="submit" value="Abschicken!" />
      </div>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Melden"
  }
};
</script>

<style scoped>
.form-field__label {
  @apply block font-semibold mb-2;
}

.form-field__input {
  @apply border-gray-300 border rounded-sm h-10 block w-full px-2;
}
</style>
