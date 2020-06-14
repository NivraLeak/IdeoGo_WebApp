<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="accent text-center"
      space="56"
    >
      <base-icon class="mb-8">
        mdi-twitter
      </base-icon>

      <base-section-heading
        color="transparent"
        title="Social Media"
      >
        Echa un vistazo a nuestras redes sociales, estamos en Facebook, Instagram y demas.
      </base-section-heading>

      <a
        class="d-inline-block mb-8"
        href="https://www.facebook.com/ideogo"
        style="text-decoration: none;"
        target="_blank"
      >
        https://www.facebook.com/ideogo
      </a>

      <div class="py-4" />

      <v-btn
        class="font-weight-bold"
        color="white"
        href="https://www.facebook.com/ideogo"
        light
        min-width="168"
        target="_blank"
        x-large
      >
        Follow Us

        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
