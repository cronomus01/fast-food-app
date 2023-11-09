<template>
  <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button>
            <ion-img src="assets/menu.png" alt="menu-button"></ion-img>
          </ion-menu-button>
        </ion-buttons>
     
        <app-header-points></app-header-points>

        <ion-buttons slot="end">
          <ion-button class="ion-no-padding ion-no-margin">
            <ion-img src="assets/profile.png" alt="menu-button" class="profile"></ion-img>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonImg, IonItem, IonGrid, IonCol, IonRow, IonIcon, IonButton, IonText } from '@ionic/vue';
import { ref } from 'vue';
import AppHeaderPoints from './AppHeaderPoints.vue';

const points = ref(0);

</script>

<style scoped>

ion-toolbar {
  --padding-top: var(--ion-padding-top-sm);
  --padding-bottom: var(--ion-padding-top-sm);
  --padding-start: var(--ion-padding-top-sm);
  --padding-end: var(--ion-padding-top-sm);
  --background: var(--ion-color-dark-contrast);
}

ion-img.profile {
  padding: 0px;
  width: 40px;
}

ion-img {
  width: 30px;
}

ion-button {
  --padding-end: 0px;
  --padding-start: 0px;
}



</style>