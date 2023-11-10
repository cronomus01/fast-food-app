<template>
  <ion-app>
    <menu-bar></menu-bar>
    <!-- <router-view></router-view> -->
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';

import MenuBar from './components/menu/MenuBar.vue';
</script>