<template>
    <ion-buttons slot="start">
        <ion-back-button defaultHref="/products"></ion-back-button>
        <!-- <img src="assets/menu.png" alt="menu-button" /> -->
    </ion-buttons>
</template>

<script setup lang="ts">
import { IonButtons, IonBackButton } from '@ionic/vue';
</script>

<style scoped>
ion-back-button {
  margin-right: 0.5em;
}
</style>