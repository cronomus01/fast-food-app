<template>
  <ion-page>
    <ion-page id="main-content">
      <ion-header class="ion-no-border">
        <slot name="header"></slot>
      </ion-header>
      <!-- <menu-header></menu-header> -->
      <ion-content class="ion-padding">
        <slot name="content"></slot>
      </ion-content>
    </ion-page>
  </ion-page>
</template>


<script setup lang="ts">
  import { IonPage, IonHeader, IonContent } from '@ionic/vue';
  import MenuBar from '../menu/MenuBar.vue';
</script>

<style>

ion-content {
    --padding-start: 8px;
    --padding-end: 8px;
    --padding-top: 0 !important;
    --padding-bottom: 8px;
}

ion-grid.content-grid {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 0;
}

ion-grid.mobile {
  display: flex;
}

ion-grid.mobile ion-img {
  width: 320px;
  margin-right: 0.65em !important;
  object-fit: cover;
}

ion-grid.desktop {
  display: flex;
  justify-content: center;
  gap: 1em;
}

ion-grid.desktop ion-img {
  width: 100%;
  object-fit: cover;
}
</style>
