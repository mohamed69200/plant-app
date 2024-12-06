<template>
  <v-app>
    <!-- Main Content -->
    <v-main>
      <v-container class="d-flex justify-center align-center" style="height: 100vh; background-color: #ffffff;">
        <!-- Formulaire de connexion -->
        <v-card max-width="400px" class="pa-4">
          <v-card-title class="text-h5">Connexion</v-card-title>
          
          <v-form>
            <v-text-field label="Email" v-model="email" required></v-text-field>
            <v-text-field label="Mot de passe" v-model="password" type="password" required></v-text-field>
            
            <v-btn @click="submitLogin" color="primary" block>Se connecter</v-btn>
            
            <v-divider></v-divider>
            <v-btn to="/signup" text>Créer un compte</v-btn>
          </v-form>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitLogin() {
      // Logique de connexion
      console.log('Login attempt with', this.email, this.password);
      // Vous pouvez ajouter la logique d'authentification ici
    }
  }
}
</script>

<style scoped>
/* Personnalisation du style pour la page de connexion */
</style>
