<template>
  <ion-grid slot="fixed" class="place-order">
    <ion-row>
      <ion-col size="4">
        <h4>Grand Total</h4>
        <p>P 244</p>
      </ion-col>
      <ion-col>
        <ion-button router-link="/order-received">Place Order</ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import { IonGrid, IonRow, IonCol, IonButton } from "@ionic/vue";
</script>

<style scoped>
ion-grid.place-order {
  background-color: var(--ion-color-light);
  width: 100%;
  bottom: 0;
  padding-left: 1em;
  padding-right: 1em;
}

ion-grid.place-order ion-row {
  display: flex;
  align-items: center;
}

ion-grid.place-order h4 {
  margin: 0;
  color: var(--ion-color-dark);
}

ion-grid.place-order p {
  font-weight: bold;
  margin: 0;
  color: var(--ion-color-dark);
}

ion-grid.place-order ion-button {
  width: 100%;
  --border-radius: var(--ion-border-radius-md);
  --padding-top: 1em !important;
  --padding-bottom: 1em !important;
}
</style>
