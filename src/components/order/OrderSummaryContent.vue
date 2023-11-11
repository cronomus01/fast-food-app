<template>
  <ion-grid class="order-summary-grid">
      <ion-row>
        <ion-col>
          <order-summary-address></order-summary-address>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <orders></orders>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <payment-option></payment-option>
        </ion-col>
      </ion-row>
  </ion-grid>
  <place-order></place-order>
</template>

<script setup lang="ts">
import { IonGrid, IonRow, IonCol } from '@ionic/vue';
import OrderSummaryAddress from './OrderSummaryAddress.vue';
import Orders from './Orders.vue';
import PaymentOption from './PaymentOption.vue';
import PlaceOrder from './PlaceOrder.vue';
</script>

<style scoped>

ion-grid.order-summary-grid {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-left: 0;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 4em;
}

ion-grid.order-summary-grid ion-row{
}



ion-col.order-summary-orders {
  display: flex;
  justify-content: space-between;
  background-color: var(--ion-color-light);
}

ion-col.order-summary-orders ion-item {
}

ion-col.order-summary-orders ion-item-group {
  display: flex;
  justify-content: space-between;
  background-color: var(--ion-color-light);
}

</style>