<template>
    <v-app>
      <!-- Main Content -->
      <v-main>
        <v-container class="d-flex justify-center align-center" style="height: 100vh; background-color: #ffffff;">
          <!-- Formulaire d'inscription -->
          <v-card max-width="400px" class="pa-4">
            <v-card-title class="text-h5">Inscription</v-card-title>
            
            <v-form>
              <v-text-field label="Nom" v-model="name" required></v-text-field>
              <v-text-field label="Email" v-model="email" required></v-text-field>
              <v-text-field label="Mot de passe" v-model="password" type="password" required></v-text-field>
              
              <v-btn @click="submitSignup" color="primary" block>S'inscrire</v-btn>
              
              <v-divider></v-divider>
              <v-btn to="/login" text>Déjà un compte ? Se connecter</v-btn>
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
        name: '',
        email: '',
        password: '',
      };
    },
    methods: {
      submitSignup() {
        // Logique d'inscription
        console.log('Signup attempt with', this.name, this.email, this.password);
        // Vous pouvez ajouter la logique d'inscription ici
      }
    }
  }
  </script>
  
  <style scoped>
  /* Personnalisation du style pour la page d'inscription */
  </style>
  