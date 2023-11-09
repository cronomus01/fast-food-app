<template>
  <ion-grid class="ion-no-padding">
      <ion-row>
          <ion-col size="auto" class="ion-no-padding">
              <ion-img src="assets/logo.png" alt="app-logo" class="logo"></ion-img>
          </ion-col>
          <ion-col class="ion-no-padding">
              <p class="ion-no-margin">Anneoyong, {{username}}!</p>
              <h1 class="ion-no-margin">What do you want <br/>to eat?</h1>
          </ion-col>
      </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import { IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import { ref } from 'vue';

const username = ref('Chou');
</script>

<style scoped>
ion-img {
    width: 70px;
    margin-right: var(--ion-margin-right-md);
}

h1 {
    font-weight: bold;
}
</style>