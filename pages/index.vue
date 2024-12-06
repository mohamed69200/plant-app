<template>
  <v-app>
    <!-- Main Content -->
    <v-main>
      <v-container 
        class="d-flex justify-center align-center" 
        style="height: 100vh; background-color: #ffffff;"
      >
        <v-card class="pa-4" max-width="600px">
          <v-card-title class="text-h5">Bienvenue sur My Plants App</v-card-title>
          
          <!-- Conteneur des boutons avec espacement -->
          <div class="d-flex flex-column gap-4">
            <v-btn to="/login" color="green" block>Se connecter</v-btn>
            <br />
            <v-btn to="/signup" color="blue" block>S'inscrire</v-btn>
          </div>
          
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* Personnalisation du style pour la page d'accueil */
</style>
