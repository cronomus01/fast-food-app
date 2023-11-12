<template>
  <ion-menu-button slot="start" class="menu">
      <ion-img src="assets/menu.png" alt="menu-button"></ion-img>
  </ion-menu-button>
</template>

<script setup lang="ts">
import { IonMenuButton, IonImg } from '@ionic/vue';
</script>

<style scope>
ion-menu-button.menu ion-img {
  width: 30px;
}
</style>