<template>
    <ion-list lines="none">
    <ion-item href="/home" button>
      <ion-img src="assets/logo.png" slot="start"></ion-img>
      <ion-label>Home</ion-label>
    </ion-item>
    <ion-item href="/our-foods" button>
      <ion-img src="assets/app-icons/whh_chicken.png" slot="start"></ion-img>
      <ion-label>Order Now!</ion-label>
    </ion-item>
    <ion-item button>
      <ion-img src="assets/app-icons/bell.png" slot="start"></ion-img>
      <ion-label>Notifications</ion-label>
      <ion-badge slot="end" color="secondary">4</ion-badge>
    </ion-item>
    <ion-item button>
      <ion-img src="assets/app-icons/bx_bxs-store-alt.png" slot="start"></ion-img>
      <ion-label>Store Locator</ion-label>
    </ion-item>
    <ion-item button>
      <ion-img src="assets/app-icons/eva_question-mark-circle-fill.png" slot="start"></ion-img>
      <ion-label>FAQ's</ion-label>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
import {IonList, IonItem, IonIcon, IonLabel, IonImg, IonThumbnail, IonAvatar, IonBadge } from '@ionic/vue';
</script>

<style scoped>
ion-img {
  width: 25px;
}

ion-item {
--padding-start: 16px;
--background: transparent;
 border-radius: var(--ion-border-radius-md);
}

ion-label {
  font-weight: bold;
}

ion-badge {
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

ion-list {
  background-color: transparent !important;
}

</style>