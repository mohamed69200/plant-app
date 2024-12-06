<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar fixed app>
      <v-toolbar-title>
        <v-img
          src="/plant.PNG"
          alt="Logo"
          max-width="100"
        />
      </v-toolbar-title>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app>
      <v-row align="center" justify="center" class="text-center">
        <!-- Logos des réseaux sociaux -->
        <v-col cols="auto" class="d-flex justify-center">
          <v-img
            src="/facebook.png"
            alt="Facebook"
            max-width="50"
            class="mx-2"
          />
          <v-img
            src="/google.png"
            alt="Google"
            max-width="50"
            class="mx-2"
          />
          <v-img
            src="/apple.png"
            alt="Apple"
            max-width="50"
            class="mx-2"
          />
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>
/* Style optionnel pour le footer */
footer {
  padding: 20px 0;
  background-color: #f5f5f5;
}
</style>
