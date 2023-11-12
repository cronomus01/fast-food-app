<template>
  <ion-button
    fill="solid"
    color="primary"
    expand="block"
    slot="fixed"
    @click="setOpen(true)"
  >
    Add to Bag
  </ion-button>
  <ion-modal ref="modal" :is-open="isOpen">
    <ion-header class="ion-no-border proceed-checkout-header">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="setOpen(false)" class="cancel" color="medium"
            >Cancel</ion-button
          >
        </ion-buttons>
        <ion-title :strong="true">Checkout</ion-title>
        <ion-buttons slot="end">
          <ion-button :strong="true" @click="setOpen(false)"
            >Confirm</ion-button
          >
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <!-- <ion-item>
          <ion-input
            label="Enter your name"
            label-placement="stacked"
            ref="input"
            type="text"
            placeholder="Your name"
          ></ion-input>
        </ion-item> -->
      <ion-item-group class="check-out-group">
        <ion-img src="assets/app-icons/positive-vote.png"></ion-img>
        <h2>Successfully Added!</h2>
        <p>What do you want to do now?</p>
        <ion-buttons>
          <ion-button
            fill="solid"
            color="primary"
            @click="setOpen(false)"
            router-link="/order-summary"
            >Proceed to Checkout</ion-button
          >
          <ion-button
            fill="clear"
            color="primary"
            @click="setOpen(false)"
            router-link="/products"
            >Add More</ion-button
          >
        </ion-buttons>
      </ion-item-group>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import {
  IonModal,
  IonContent,
  IonItemGroup,
  IonButtons,
  IonButton,
  IonImg,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import { OverlayEventDetail } from "@ionic/core/components";

import { ref } from "vue";

const isOpen = ref(false);

const setOpen = (open: boolean) => (isOpen.value = open);

const cancel = () => modal.value.$el.dismiss(null, "cancel");

const modal = ref();

const message = ref(
  "This modal example uses triggers to automatically open a modal when the button is clicked."
);

console.log(isOpen.value);

const confirm = () => {
  modal.value.$el.dismiss(name, "confirm");
};
// const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
//   if (ev.detail.role === 'confirm') {
//     message.value = `Hello, ${ev.detail.data}!`;
//   }
// };
</script>

<style scope>
ion-img {
  width: 8em;
}
ion-content {
  --padding-top: 1em !important;
}

ion-item-group.check-out-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ion-item-group.check-out-group ion-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

ion-item-group.check-out-group ion-button {
  --padding-top: 1em;
  --padding-bottom: 1em;
  --padding-start: 1.5em;
  --padding-end: 1.5em;
  --border-radius: var(--ion-border-radius-md) !important;
  width: 100%;
  font-weight: bold;
}

ion-item-group.check-out-group h2 {
  padding: 0;
  margin-bottom: 0;
  font-weight: bold;
}
ion-item-group.check-out-group p {
  margin-bottom: 2.5em;
  color: var(--ion-color-medium);
}

ion-button[slot="fixed"] {
  transform: translateX(50%);
  right: 50%;
  bottom: 1em;
  margin: auto;
  width: 92.5%;
  --padding-top: 1em;
  --padding-bottom: 1em;
  --border-radius: var(--ion-border-radius-md);
}
</style>
