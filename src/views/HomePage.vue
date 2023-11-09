<template>
  <menu-bar></menu-bar>
  <ion-page id="main-content">
    <app-header></app-header>
    <app-content></app-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonButton } from '@ionic/vue';
import { AppHeader, AppContent} from '@/utils/home';
import MenuBar from '@/components/menu/MenuBar.vue';
</script>

<style scoped>
</style>
