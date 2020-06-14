<template>
  <base-section id="theme-features">
    <base-section-heading title="Features">
      Ofrecemos una herramienta que ayude a emprendedores en su busqueda de quienes deseen colaborar con sus proyectos innovadores.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >

          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'Perfecto diseño',
          icon: 'mdi-fountain-pen-tip',
          text: 'Ideogo presenta un diseño perfecto para la publicacion de tus proyectos.',
        },
        {
          title: 'Plataforma responsive ',
          icon: 'mdi-cellphone',
          text: 'Ideogo al alcance de caulquiera de tus dispositivos.',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Facil de editar',
          icon: 'mdi-pencil-box-outline',
          text: 'Ideogo presenta un diseño perfecto y facil de usar.',
        },
        {
          title: 'App Design',
          icon: 'mdi-image-size-select-actual',
            text: 'Ideogo esta desarrollado bajo los patrones de seño responsive que permiten ser a la página amigable.',
        },
        {
          title: 'Brand Identity',
          icon: 'mdi-ice-pop',
          text: 'Nuestro esfuerzo y eficacia nos caracterizan al momento de brindarte nuestro servicio',
        },
        {
          title: 'Soporte disponible las 24h',
          icon: 'mdi-help-circle-outline',
          text: 'Ideogo ofrece un soporte para cualquier consulta que tengas las 24h del dia.',
        },
      ],
    }),
  }
</script>
