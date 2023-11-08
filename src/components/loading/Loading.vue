<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-img src="assets/logo-inverted.png"></ion-img>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonImg } from '@ionic/vue';
</script>

<style scoped>
ion-content {
  --background: var(--ion-color-primary);
  display: flex;
  align-items: center;
}

ion-img {
  width: 183px;
  margin: auto;
  transform: translateY(100%);
}
</style>