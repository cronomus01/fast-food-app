<template>
    <h1 class="orders-title">Orders</h1>
    <ion-grid class="orders">
      <ion-row>
        <ion-col>
          <ion-list class="order-quantity">
            <ion-item color="light" lines="none">
              <ion-img src="assets/most-popular/steak-frieds-veggies.png"></ion-img>
            </ion-item>
            <ion-item color="light" lines="none">
              <div>
                <h4>Steak Fries Veggies</h4>
                <p>1x Tomato Sauce</p>
                <p>1x Regular Coke</p>
                <p>1x Fried Chicken</p>
              </div>
            </ion-item>
          </ion-list>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col class="order-summary-orders">
          <h4>P 185</h4>
          <ion-buttons>
            <ion-button color="medium" fill="solid" class="ion-margin-right">-</ion-button>
            <ion-label>1</ion-label>
            <ion-button color="medium" fill="solid" class="ion-margin-left">+</ion-button>
          </ion-buttons>
        </ion-col>
      </ion-row>
    </ion-grid>
</template>

<script setup lang="ts">
import { IonGrid, IonRow, IonCol, IonItemGroup, IonItem, IonButtons, IonButton, IonLabel, IonList, IonImg } from '@ionic/vue';
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
  gap: 0.5em;
}

ion-col.order-summary-orders h4 {
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  margin: 0;
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