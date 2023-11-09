<template>
   <ion-menu content-id="main-content">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <menu-profile></menu-profile>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <menu-navigation></menu-navigation>
      <div class="divider"></div>
      <menu-account-nav></menu-account-nav>
    </ion-content>
    <ion-footer class="ion-no-border ion-padding-top">
      <ion-button>Logout</ion-button>
    </ion-footer>
  </ion-menu>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonItem, IonButton, IonFooter } from '@ionic/vue';
import MenuProfile from './MenuProfile.vue';
import MenuNavigation from './MenuNavigation.vue';
import MenuAccountNav from './MenuAccountNav.vue';
</script>

<style scoped>
ion-toolbar {
  --padding-top: var(--ion-padding-top-md);
  --padding-bottom: var(--ion-padding-top-md);
  --padding-start: var(--ion-padding-top-md);
  --padding-end: var(--ion-padding-top-md);
  --background: var(--ion-color-dark-contrast);
}

ion-item-divider {
  --padding-top: 0;
  --padding-bottom: 0;
  --padding-start: 0;
  --padding-end: 0;
  --padding-start-inner: 0 !important;
  display: flex;
  align-items: center;
}

ion-button {
  width: 50%;
  margin-left: 1em;
  margin-bottom: 2em;
}

.divider {
  margin-block: 2em;
  height: 2px;
  width: 100%;
  background-color: var(--ion-color-light);
}


</style>