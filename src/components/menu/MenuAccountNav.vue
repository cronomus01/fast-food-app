<template>
  <ion-list lines="none">
    <ion-item button>
      <router-link to="/my-orders" active-class="active" class="link">
        <ion-img src="assets/app-icons/vector.png" slot="start"></ion-img>
        <ion-label>My Orders</ion-label>
        <ion-badge slot="end" color="secondary">4</ion-badge>
      </router-link>
    </ion-item>
    <ion-item button>
      <router-link to="/my-account" active-class="active" class="link">
        <ion-img src="assets/app-icons/user.png" slot="start"></ion-img>
        <ion-label>My Account!</ion-label>
      </router-link>
    </ion-item>
    <ion-item button>
      <router-link to="/my-favorites" active-class="active" class="link">
        <ion-img src="assets/app-icons/ic_baseline-favorite.png" slot="start"></ion-img>
        <ion-label>My Favorites</ion-label>
      </router-link>
    </ion-item>
    <ion-item button>
      <router-link to="/order-tracker" active-class="active" class="link">
        <ion-img src="assets/app-icons/heroicons-solid_location-marker.png" slot="start"></ion-img>
        <ion-label>Order Tracker</ion-label>
      </router-link>
    </ion-item>
    <ion-item button>
      <router-link to="/order-history" active-class="active" class="link">
        <ion-img src="assets/app-icons/fa-solid_history.png" slot="start"></ion-img>
        <ion-label>Order History</ion-label>
      </router-link>
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
  display: flex;
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

ion-item {
  --inner-padding-end: 0 !important;
  --padding-start: 0 !important;
  --padding-top: 0 !important;
}

.link {
  display: flex;
  gap: 1.5em;
  text-decoration: none;
  padding-block: 0.5em;
  color: var(--ion-color-dark);
  width: 100%;
  align-items: center;
  height: 100%;
  padding-left: 1em;
}

.active {
  color: var(--ion-color-primary-contrast);
  background-color: var(--ion-color-primary);
}

</style>