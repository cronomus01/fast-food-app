<template>
  <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button>
            <ion-img src="assets/menu.png" alt="menu-button"></ion-img>
          </ion-menu-button>
        </ion-buttons>
     
        <ion-grid>
          <ion-row>
            <ion-col size="auto" class="ion-no-padding"><ion-img src="assets/crown.png" class="crown"></ion-img></ion-col>
            <ion-col size="auto" class="ion-text-center"><p class="ion-no-margin">{{ points }} points</p></ion-col>
            <ion-col size="auto" class="ion-no-padding "><ion-img src="assets/octicon_chevron-left-16.png" class="chevron-left"></ion-img></ion-col>
          </ion-row>
        </ion-grid>

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

ion-img {
  width: 30px;
}

ion-img.profile {
  padding: 0px;
  width: 40px;
}

ion-img.crown {
  width: 35px;
  padding-right: 0.5em;
}

ion-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2em !important;
}

ion-img.chevron-left {
  width: 20px;
}

ion-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

ion-button {
  --padding-end: 0px;
  --padding-start: 0px;
}

p {
  font-weight: bold;
}

</style>