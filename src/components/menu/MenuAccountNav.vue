<template>
  <ion-list lines="none">
  <ion-item button>
    <ion-img src="assets/app-icons/vector.png" slot="start"></ion-img>
    <ion-label>My Orders</ion-label>
    <ion-badge slot="end" color="secondary">4</ion-badge>
  </ion-item>
  <ion-item button>
    <ion-img src="assets/app-icons/user.png" slot="start"></ion-img>
    <ion-label>My Account!</ion-label>
  </ion-item>
  <ion-item button>
    <ion-img src="assets/app-icons/ic_baseline-favorite.png" slot="start"></ion-img>
    <ion-label>My Favorites</ion-label>
  </ion-item>
  <ion-item button>
    <ion-img src="assets/app-icons/heroicons-solid_location-marker.png" slot="start"></ion-img>
    <ion-label>Order Tracker</ion-label>
  </ion-item>
  <ion-item button>
    <ion-img src="assets/app-icons/fa-solid_history.png" slot="start"></ion-img>
    <ion-label>Order History</ion-label>
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