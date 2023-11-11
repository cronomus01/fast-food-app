<template>
  <h1 class="payment-title">Payment Option</h1>
  <ion-radio-group class="order-radio-group">
    <ion-item lines="none">
      <ion-label>
        <h2>Cash on delivery</h2>
        <p>Pay when you received the order</p>
      </ion-label>
      <ion-radio slot="end" value="cash-on-delivery"></ion-radio>
    </ion-item>

    <ion-item lines="none">
      <ion-label>
        <h2>Loyalty Points <span>({{ points }} points)</span></h2>
        <p>Pay  using your earned loyalty points</p>
      </ion-label>
      <ion-radio slot="end" value="loyalty-points"></ion-radio>
    </ion-item>

    <ion-item lines="none">
      <ion-label>
        <ion-img src="assets/paypal-logo.png"></ion-img>
        <p>A new tab will open to access your account</p>
      </ion-label>
      <ion-radio slot="end" value="paypal"></ion-radio>
    </ion-item>

    <ion-item lines="none">
      <ion-label>
        <ion-img src="assets/paynamics_rgb.png"></ion-img>
        <p>Choose paynamics services available from you</p>
      </ion-label>
      <ion-radio slot="end" value="paynamic"></ion-radio>
    </ion-item>
  </ion-radio-group>
  <ion-grid class="sub-total">
    <ion-row>
      <ion-col>
        <h6>Subtotal</h6>
        <h6>P 185</h6>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <h6>Delivery Charge</h6>
        <h6>P 59</h6>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import { IonRadioGroup, IonItem, IonLabel, IonRadio, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import { ref } from 'vue';

const points = ref(0)
</script>

<style scoped>
.payment-title {
  margin-top: 0;
}

ion-radio-group.order-radio-group ion-item {
  display: flex;
  flex-direction: column;
  --background: var(--ion-color-light);
  --border-radius: var(--ion-border-radius-md);
  align-items: start;
  --margin-top: 0;
  --padding-top: 0.5em;
}

ion-radio-group.order-radio-group ion-img {
  width: 100px;
}

ion-radio-group.order-radio-group ion-item h2 {
 font-weight: bold;
}

ion-radio-group.order-radio-group ion-item h2 span {
 color: var(--ion-color-primary);
}



ion-radio-group.order-radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
/* ion-radio-group.order-radio-group ion-item-group {
  display: flex;
  flex-direction: column;
  gap: 2em;
  background-color: red;
} */

ion-radio-group.order-radio-group ion-item-group {
  display: flex;
  flex-direction: column;
}

ion-radio-group.order-radio-group h1 {
  font-weight: bold;
}

ion-grid.sub-total ion-col {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ion-grid.sub-total {
  margin-top: 1em;
  padding: 0;
}

ion-grid.sub-total h6 {
  margin: 0;
  font-weight: bold;
}
</style>