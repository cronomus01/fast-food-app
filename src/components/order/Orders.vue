<template>
  <h1 class="orders-title">Orders</h1>
  <ion-grid class="orders">
    <ion-row>
      <ion-col>
        <ion-list class="order-quantity">
          <ion-item color="light" lines="none">
            <ion-img
              src="assets/most-popular/steak-frieds-veggies.png"
            ></ion-img>
          </ion-item>
          <ion-label>
            <h2 class="ion-margin-bottom">
              {{ myOrder.product.item!.name }}
            </h2>
            <p v-for="addOn in myOrder.addOns" class="add-on-selected">
              <span v-if="addOn.selected"
                >{{ addOn.quantity }}x {{ addOn.title }}</span
              >
              <span class="add-on-price" v-if="addOn.selected"
                >P {{ addOn.price * addOn.quantity }}</span
              >
            </p>
          </ion-label>
        </ion-list>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col class="order-summary-orders">
        <h4 color="primary">
          P {{ myOrder.product.price! * myOrder.product.quantity! }}
        </h4>
        <ion-buttons mode="md">
          <ion-button
            color="medium"
            fill="solid"
            @click="order.addProductQuantity()"
          >
            +
          </ion-button>
          <ion-label color="primary">{{ myOrder.product.quantity }}</ion-label>
          <ion-button
            color="medium"
            fill="solid"
            @click="order.removeProductQuantity()"
          >
            -
          </ion-button>
        </ion-buttons>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonButton,
  IonLabel,
  IonList,
  IonImg,
  IonButtons,
} from "@ionic/vue";
import { orderStore } from "@/stores/order";
const order = orderStore();

const myOrder = order.getOrder();
</script>

<style scoped>
ion-grid.orders {
  background-color: var(--ion-color-light);
  border-radius: var(--ion-border-radius-md);
}

ion-grid.orders ion-img {
  width: 80px;
}

ion-grid.orders ion-list.order-quantity {
  display: flex;
  align-items: center;
  background-color: var(--ion-color-light);
  border-bottom: 1px solid var(--ion-color-light-shade);
}

ion-grid.orders ion-list.order-quantity p {
  margin: 0;
}

ion-grid.orders ion-list.order-quantity h2 {
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0.5em;
  font-weight: bold;
  font-size: larger;
}

ion-grid.orders .add-on-price {
  color: var(--ion-color-primary);
}

ion-grid.orders .add-on-selected {
  display: flex;
  justify-content: space-between;
  gap: 1em;
}

ion-col.order-summary-orders {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
}

ion-col.order-summary-orders ion-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}

ion-col.order-summary-orders ion-button {
  color: var(--ion-color-primary);
  --border-radius: 10px !important;
  font-weight: bold;
  font-size: 1em;
  width: 35px;
}

ion-col.order-summary-orders h4 {
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  margin: 0;
  color: var(--ion-color-primary);
}

ion-col.order-summary-orders ion-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ion-col.order-summary-orders ion-grid ion-row {
  width: 100%;
}

ion-col.order-summary-orders ion-grid ion-col {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
}

.orders-title {
  margin-top: 0;
}
</style>
