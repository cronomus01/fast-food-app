<template>
  <ion-grid class="order-recieved-grid">
    <ion-row>
      <ion-col>
        <ion-img src="assets/positive-vote.png"></ion-img>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col class="ion-text-center">
        <h1>Order Received!</h1>
        <p>
          Your order <span>No. {{ order.getOrder().orderNumber }}</span> has
          successfully take and now being processed. Kindly wait for our
          notification regarding your order.
        </p>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-grid slot="fixed" class="order-received-nav">
    <ion-row>
      <ion-col>
        <ion-button color="primary">Track Order</ion-button>
        <ion-button fill="clear" color="primary" router-link="/home"
          >Back to Home</ion-button
        >
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButtons,
  IonButton,
  IonItem,
} from "@ionic/vue";

import { orderStore } from "@/stores/order";

const order = orderStore();
</script>

<style scoped>
ion-grid.order-recieved-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

ion-grid.order-recieved-grid ion-img {
  width: 200px;
}

ion-grid.order-recieved-grid h1 {
  font-weight: bold;
}

ion-grid.order-recieved-grid span {
  width: 200px;
  font-weight: bold;
  color: var(--ion-color-primary);
}

ion-grid.order-received-nav {
  bottom: 1em !important;
  width: 100%;
  padding: 0 1em;
}

ion-grid.order-received-nav ion-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 !important;
}

ion-grid.order-received-nav ion-button {
  width: 100%;
  --padding-top: 1.5em !important;
  --padding-bottom: 1.5em !important;
}
</style>
