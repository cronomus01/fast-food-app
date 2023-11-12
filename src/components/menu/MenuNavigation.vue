<template>
  <ion-list lines="none">
    <ion-item href="/home" button>
      <router-link to="/home" active-class="active" class="link">
        <ion-img src="assets/logo.png" slot="start"></ion-img>
        <ion-label>Home</ion-label>
      </router-link>
    </ion-item>
    <ion-item button>
      <router-link to="/order-summary" active-class="active" class="link">
        <ion-img src="assets/app-icons/whh_chicken.png" slot="start" :active="true"></ion-img>
        <ion-label>Order Now!</ion-label>
      </router-link>
    </ion-item>
    <ion-item button>
      <router-link to="/notifications" active-class="active" class="link">
        <ion-img src="assets/app-icons/bell.png" slot="start"></ion-img>
        <ion-label>Notifications</ion-label>
        <ion-badge slot="end" color="secondary" >4</ion-badge>
      </router-link>
    </ion-item>
    <ion-item button>
      <router-link to="/store-locator" active-class="active" class="link">
        <ion-img src="assets/app-icons/bx_bxs-store-alt.png" slot="start"></ion-img>
        <ion-label>Store Locator</ion-label>
        </router-link>
    </ion-item>
    <ion-item button>
      <router-link to="/faqs" active-class="active" class="link">
        <ion-img src="assets/app-icons/eva_question-mark-circle-fill.png" slot="start"></ion-img>
        <ion-label>FAQ's</ion-label>
      </router-link>
    </ion-item>
</ion-list>

</template>

<script setup lang="ts">
import { IonLabel, IonImg, IonBadge, IonCol, IonRow, IonRippleEffect, IonGrid, IonList, IonItem, } from '@ionic/vue';
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