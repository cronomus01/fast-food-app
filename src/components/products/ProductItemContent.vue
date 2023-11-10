<template>
  <ion-grid class="ion-margin-top">
    <ion-row>
      <ion-col>
        <img :src="item.image" :alt="item.name" />
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <h2>{{ item.name }}</h2>
        <rating :rating="item.rating"></rating>
        <p class="ion-margin-top">{{ item.details }}</p>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
         <ion-toolbar>
            <ion-buttons>
              <ion-title color="primary">P {{item.price}}</ion-title>
              <ion-buttons slot="end">
                <ion-button fill="solid" color="light"> + </ion-button>
                <ion-button fill="clear"> 1 </ion-button>
                <ion-button fill="solid" color="light"> - </ion-button>
              </ion-buttons>
            </ion-buttons>
        </ion-toolbar>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <h5>Beverages</h5>
        <ion-item lines="none">
            <ion-select label="Choose beverages" label-placement="stacked">
              <ion-select-option value="coke">Coke</ion-select-option>
              <ion-select-option value="sprite">Sprite</ion-select-option>
              <ion-select-option value="iced-tea">Iced Tea</ion-select-option>
            </ion-select>
        </ion-item>
        <ion-radio-group value="strawberries">
          <ion-radio value="grapes" class="beverage-radio" alignment="center">Regular</ion-radio>
          <ion-radio value="strawberries" class="beverage-radio">Large</ion-radio>
          <ion-radio value="pineapple" class="beverage-radio">X-Large</ion-radio>
        </ion-radio-group>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <h5>Add Ons</h5>
        <ion-item lines="none" class="add-on">
           <ion-grid>
            <ion-row>
              <ion-col>
                <ion-card class="ion-padding text-center ion-no-border">
                  <ion-card-header class="ion-no-padding">
                    <ion-img src="assets/app-icons/sauce-1.png"></ion-img>
                    <ion-item-group>
                      <ion-card-title color="dark">Tomato Sauce</ion-card-title>
                      <ion-card-subtitle class="ion-text-capitalize" color="medium">Sauce</ion-card-subtitle>
                      <ion-card-subtitle class="ion-text-capitalize ion-font-bold ion-margin-top" color="primary">P49</ion-card-subtitle>
                    </ion-item-group>
                  </ion-card-header>
                  <ion-card-content class="ion-no-padding increase-add-on">
                    <ion-checkbox value="tomato-sauce" class="add-ons-radio ion-margin-bottom" mode="ios"></ion-checkbox>
                    <ion-buttons slot="end" class="ion-martin-top">
                      <ion-button fill="solid" color="medium"> - </ion-button>
                      <ion-button fill="clear"> 1 </ion-button>
                      <ion-button fill="solid" color="medium"> + </ion-button>
                    </ion-buttons>
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-card class="ion-padding text-center ion-no-border">
                  <ion-card-header class="ion-no-padding">
                      <ion-img src="assets/app-icons/sauce-1.png"></ion-img>
                      <ion-item-group>
                        <ion-card-title color="dark">White Rice</ion-card-title>
                        <ion-card-subtitle class="ion-text-capitalize" color="medium">Rice</ion-card-subtitle>
                        <ion-card-subtitle class="ion-text-capitalize ion-margin-top" color="primary">P 25</ion-card-subtitle>
                      </ion-item-group>
                    </ion-card-header>
                  <ion-card-content class="ion-no-padding increase-add-on">
                    <ion-checkbox value="tomato-sauce" class="add-ons-radio ion-margin-bottom" mode="ios"></ion-checkbox>
                      <ion-buttons slot="end">
                        <ion-button fill="solid" color="medium"> - </ion-button>
                        <ion-button fill="clear"> 1 </ion-button>
                        <ion-button fill="solid" color="medium"> + </ion-button>
                      </ion-buttons>
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </ion-row>
           </ion-grid>
        </ion-item>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-button fill="solid" color="primary" expand="block" class="add-to-bag" slot="fixed"> Add to Bag </ion-button>
</template>


<script setup lang="ts">

import { IonToolbar, IonGrid, IonCol, IonRow, IonTitle, IonButtons, IonButton, IonItem, IonSelect, IonSelectOption, IonLabel, IonRadioGroup, IonRadio, IonImg, IonCheckbox, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonItemGroup } from '@ionic/vue';
import { defineProps } from 'vue';
import type { PropType } from 'vue'
import Rating from '../base/Rating.vue';

type ProductItem = {
  id: number,
  productId: number,
  image: string,
  name: string,
  category: string,
  rating: number,
  price: number,
  details: string,
}


const props = defineProps({
  item: Object as PropType<Array<ProductItem>>
});

const item = props.item![0];

</script>

<style scoped>
img {
  background-color: var(--ion-color-light);
  padding: 0 1.2em;
  border-radius: var(--ion-border-radius-lg);
}

ion-button {
  /* border-radius: 30px !important; */
  --border-radius: 10px !important;
  font-weight: bold;
  font-size: 1em;
  /* --padding-left: 1em !important; */
  /* --padding-right: 1em !important; */
  width: 35px;
}

ion-grid {
  padding: 0 !important;
  padding-bottom: 1.8em !important;
}

ion-col {
  padding: 0 !important;
}

p {
  color: var(--ion-color-medium);
}

ion-title {
  --padding-start: 0 !important;
  padding: 0 !important;
}

ion-buttons {
  color: var(--ion-color-primary);
}

ion-button {
  color: var(--ion-color-primary);
}

ion-select {
  width: 100%;
  display: flex;
  gap: 10em !important;
}

ion-label {
  /* width: fit-content !important; */
  pointer-events: none;
}

ion-item {
  border-radius: var(--ion-border-radius-md);
  border: 1px solid var(--ion-color-light);
  /* --padding-start: 0px !important; */
}



ion-radio-group {
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  overflow: auto;
}

ion-radio {
  background-color: var(--ion-color-light);
  padding: 0.5em 1em;
  width: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  border-radius: var(--ion-border-radius-md);
  --inline-margin-end: 0px !important;
  margin: 0 !important;

  --color-checked: var(--ion-color-primary)
}


ion-radio::part(container) {
  justify-content: center;

  border-radius: 4px;
  width: 1em;
  height: 1em;
  border: 1px solid var(--ion-color-light-tint);
  /* display: none; */
}

ion-radio::part(mark) {
  background: none;
  transition: none;
  transform: none;
  border-radius: 0;
}


ion-radio.radio-checked {
  background-color: var(--ion-color-secondary);
}

ion-radio.radio-checked::part(container) {
  border-color: transparent;
}

ion-radio.radio-checked::part(mark) {
  width: 6px;
  height: 10px;

  border-width: 0px 2px 2px 0px;
  border-style: solid;
  border-color: var(--ion-color-primary);

  transform: rotate(45deg);
}

ion-radio::part(container) {
  /* display: none; */
}

ion-checkbox {
  width: 30px !important;
  height: 30px !important;
  --border-radius: 8px !important;
  --checkbox-background-checked: var(--ion-color-primary-contrast);
  --border-width: 0px !important;
  --checkmark-color: var(--ion-color-secondary);
  /* background-color: red; */
  --background: transparent;
  --checkmark-width: 2;
}

ion-checkbox.checkbox-checked {
  /* background-color: var(--ion-color-primary-contrast); */
  border-color: var(--ion-color-secondary) !important;

}

ion-img {
  margin-block: auto !important;
}

ion-card {
  box-shadow: none;
  padding: 1em !important;
  background-color: var(--ion-color-light);
  display: flex !important;
  gap: 0.5em !important;
  /* margin:  0 !important; */
  border-radius: var(--ion-border-radius-md);
  margin-inline: 0px !important;
  margin-bottom: 0 !important;
  justify-content: space-between;
  margin-top: 0 !important;
}

ion-card ion-card-title {
  font-size: 1em;
  font-weight: bold;
}

ion-card ion-card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
}


ion-card ion-card-header {
  display: flex;
  gap: 1.2em;
  flex-direction: row;
}

ion-card .ion-font-bold {
  font-weight: bold;
}


.add-on {
  --padding-start: 0px !important;
  --inner-padding-end: 0px !important;
  border-radius: 0 !important;
  border: none;
}

.add-on ion-grid {
  display: flex;
  flex-direction: column;
  gap: 1em !important;
}

.add-on ion-col {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 !important;
} 


ion-img {
  width: 30%;
  height: 100%;
}

ion-button[slot='fixed'] {
  transform: translateX(50%);
  right: 50%;
  bottom: 0.5em;
  margin: auto;
  width: 92.5%;
  --padding-top: 1em;
  --padding-bottom: 1em;
}

</style>