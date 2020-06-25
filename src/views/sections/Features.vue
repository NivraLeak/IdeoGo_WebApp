<template>
  <base-section
    id="features"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-keyboard-outline',
          title: 'Design',
          text: 'La aplicacion distribuira de manera eficiente los contornos de información importante para cada proyecto.',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Your Identity',
          text: 'Tu proyecto tendra tu propia identidad.',
        },
        {
          icon: 'mdi-pencil-outline',
          title: 'Brand Identity',
          text: 'Nuestro esfuerzo y eficacia nos caracterizan al momento de brindarte nuestro servicio.',
        },
        {
          icon: 'mdi-puzzle-outline',
          title: '24/7 Support',
          text: 'Contamos con un servicio de soporte las 24h, siempre que nos necesite podremos aclarar sus dudas.',
        },
      ],
    }),
  }
</script>
