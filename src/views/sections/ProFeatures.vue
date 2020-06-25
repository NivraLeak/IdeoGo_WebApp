<template>
  <base-section
    id="pro-features"
  >
    <v-img
      :src="require('@/assets/logo.svg')"
      class="mx-auto mb-8"
      max-width="128"
    />

    <base-section-heading title="Feature Comparison">
      Obtiene la version Pro <strong>Ideogo</strong> y sube de nivel en nuestra plataforma<br>con componentes y mas caracteristicas solo para usuarios premium.
    </base-section-heading>

    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="7"
        >
          <v-simple-table>
            <thead>
              <tr>
                <th />
                <th class="body-1 font-weight-bold text-center">
                  Free
                </th>
                <th class="body-1 font-weight-bold text-center">
                  Pro version
                </th>
              </tr>
            </thead>

            <tbody class="body-1">
              <tr
                v-for="([name, one, two], i) in features"
                :key="i"
              >
                <td v-text="name" />

                <td class="text-center font-weight-bold">
                  <template v-if="typeof one === 'boolean'">
                    <v-icon :color="one ? 'success' : 'error'">
                      mdi-{{ one ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ one }}
                  </template>
                </td>

                <td class="text-center font-weight-bold">
                  <template v-if="typeof two === 'boolean'">
                    <v-icon :color="two ? 'success' : 'error'">
                      mdi-{{ two ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ two }}
                  </template>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>

        <v-col
          cols="12"
          md="5"
        >
          <v-card
            elevation="16"
            class="mb-12"
          >
            <base-img
              max-width="100%"
              src="https://cdn.vuetifyjs.com/store/themes/zero/pro.png"
            />
          </v-card>

          <div class="text-center">
            <base-btn
              :tile="false"
              color="primary"
              href="https://google.com"
              rounded
            >
              Buy Pro Now

              <v-icon right>
                mdi-rocket
              </v-icon>
            </base-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProChart',

    data: () => ({
      features: [
        ['Componentes', 23, '40+'],
        ['Cantidad de visitas', 3, '50+'],
        ['Tiempo limitado', true, true],
        ['Reuniones', true, true],
        ['News, Projects, and Pages', false, true],
        ['6 meses gratis para subir projectos', false, true],
        ['Price', 'Free', '$100'],
        ['Cantidad de projectos', 2 , '5+'],
      ],
    }),
  }
</script>
