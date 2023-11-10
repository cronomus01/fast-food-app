<template>
    <ion-buttons slot="end">
      <ion-button class="ion-no-padding ion-no-margin">
        <ion-img src="assets/profile.png" alt="menu-button" class="profile"></ion-img>
      </ion-button>
    </ion-buttons>
</template>

<script setup lang="ts">
import { IonButtons, IonImg, IonButton } from '@ionic/vue';
</script>

<style scoped>
ion-img.profile {
  padding: 0px;
  width: 40px;
}
</style>