<template>
    <ion-toolbar>
      <ion-buttons slot="start">
        <slot name="button"></slot>
      </ion-buttons>
    
      <slot name="our-foods"></slot>
      <slot name="points"></slot>

      <slot name="profile"></slot>
    </ion-toolbar>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonImg, IonBackButton } from '@ionic/vue';
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

ion-button {
  --padding-end: 0px;
  --padding-start: 0px;
}



</style>