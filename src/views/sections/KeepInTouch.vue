<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="5"
        >
          <base-business-info title="Envianos Un Mensaje">
            No solo confíe en nuestra palabra, echa un vistazo a algunos de nuestros últimos trabajos.
          </base-business-info>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <base-contact-form title="Envianos un mensaje" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionKeepInTouch',
  }
</script>
