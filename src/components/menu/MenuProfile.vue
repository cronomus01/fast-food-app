<template>
  <ion-grid class="ion-no-padding">
      <ion-row>
          <ion-col size="auto" class="ion-no-padding">
              <ion-img :src="user.profile" alt="app-logo" class="logo"></ion-img>
          </ion-col>
          <ion-col class="ion-no-padding">
              <app-points></app-points>
          </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <h1>{{ user.name }}</h1>
          <p>+63 {{ user.number.replaceAll('-', ' ') }}</p>
        </ion-col>
      </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import { IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import AppPoints from '@/components/header/AppPoints.vue';

const user = {
  username: 'chou_tyuzu',
  name: 'Chou Tyuzu',
  number: '912-345-6789',
  profile: 'assets/profile.png'
}
</script>

<style scoped>
ion-row {
  display: flex;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 0 !important;
  font-size: 2em;
}

p {
  margin: 0 !important;
  color: var(--ion-color-medium-tint);
  font-size: medium;
}

ion-img {
  width: 100px;
}


</style>