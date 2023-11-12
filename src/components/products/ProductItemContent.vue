<template>
  <ion-grid class="ion-margin-top">
    <ion-row>
      <ion-col>
        <img :src="productItem?.image" :alt="productItem?.name" />
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <h2>{{ productItem?.name }}</h2>
        <rating :rating="productItem?.rating"></rating>
        <p class="ion-margin-top product-detail">{{ productItem?.details }}</p>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-toolbar color="none">
          <ion-buttons class="add-quantity" mode="md">
            <ion-title color="primary" slot="start"
              >P{{ productItem.price * order.getProduct().quantity }}</ion-title
            >
            <ion-buttons slot="end">
              <ion-button
                fill="solid"
                color="light"
                @click="order.addProductQuantity"
              >
                +
              </ion-button>
              <ion-button fill="clear">
                {{ order.getProduct().quantity }}
              </ion-button>
              <ion-button
                fill="solid"
                color="light"
                @click="order.removeProductQuantity"
              >
                -
              </ion-button>
            </ion-buttons>
          </ion-buttons>
        </ion-toolbar>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <h5>Beverages</h5>
        <ion-item lines="none">
          <ion-select
            label="Choose beverages"
            label-placement="stacked"
            @ion-change="order.selectedBeverage"
          >
            <ion-select-option value="coke">Coke</ion-select-option>
            <ion-select-option value="sprite">Sprite</ion-select-option>
            <ion-select-option value="iced-tea">Iced Tea</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-radio-group
          value="strawberries"
          @ion-change="order.selectedBeverageSize"
        >
          <ion-radio value="regular" class="beverage-radio" alignment="center"
            >Regular</ion-radio
          >
          <ion-radio value="large" class="beverage-radio">Large</ion-radio>
          <ion-radio value="xl" class="beverage-radio">X-Large</ion-radio>
        </ion-radio-group>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <h5>Add Ons</h5>
        <ion-item lines="none" class="add-on">
          <ion-grid>
            <ion-row v-for="addOn in order.getAddOns()">
              <ion-col>
                <ion-card class="ion-padding text-center ion-no-border">
                  <ion-card-header class="ion-no-padding">
                    <ion-img src="assets/app-icons/sauce-1.png"></ion-img>
                    <ion-item-group>
                      <ion-card-title color="dark">{{
                        addOn.title
                      }}</ion-card-title>
                      <ion-card-subtitle
                        class="ion-text-capitalize"
                        color="medium"
                        >{{ addOn.category }}</ion-card-subtitle
                      >
                      <ion-card-subtitle
                        class="ion-text-capitalize ion-font-bold ion-margin-top"
                        color="primary"
                        >{{ addOn.price * addOn.quantity }}</ion-card-subtitle
                      >
                    </ion-item-group>
                  </ion-card-header>
                  <ion-card-content class="ion-no-padding increase-add-on">
                    <ion-checkbox
                      @ion-change="order.selectedAddOn"
                      :value="addOn.id"
                      class="add-ons-radio ion-margin-bottom"
                      mode="ios"
                    ></ion-checkbox>
                    <ion-buttons slot="end" class="ion-martin-top">
                      <ion-button
                        fill="solid"
                        color="medium"
                        @click="order.addAddOnQuantity(addOn.id)"
                      >
                        +
                      </ion-button>
                      <ion-title>
                        {{ addOn.quantity }}
                      </ion-title>
                      <ion-button
                        fill="solid"
                        color="medium"
                        @click="order.removeAddOnQuantity(addOn.id)"
                      >
                        -
                      </ion-button>
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
  <proceed-checkout></proceed-checkout>
</template>

<script setup lang="ts">
import {
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonTitle,
  IonButtons,
  IonButton,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonRadioGroup,
  IonRadio,
  IonImg,
  IonCheckbox,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
  IonItemGroup,
  IonLabel,
} from "@ionic/vue";

import {
  computed,
  defineAsyncComponent,
  defineProps,
  onBeforeMount,
  onMounted,
  reactive,
  ref,
} from "vue";
import type { PropType } from "vue";
import Rating from "../base/Rating.vue";
import { add } from "ionicons/icons";
import { orderStore } from "@/stores/order";
import { useRoute } from "vue-router";
import productsData from "@/assets/data/products.json";

type ProductItem = {
  id: number;
  productId: number;
  image: string;
  name: string;
  category: string;
  rating: number;
  price: number;
  details: string;
};

const productItem = ref({});
const route = useRoute();

const getProduct = async () => {
  try {
    const product = productsData.filter((product) => {
      const id = Number(route.params.id);
      if (product.id == id) {
        return product;
      }
    });

    const data = await new Promise<ProductItem>((resolve, reject) => {
      setTimeout(() => {
        const newProduct = product![0];
        resolve(newProduct);
      });
    });

    if (data) {
      productItem.value = data;
      order.setOrder(data);
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

const order = orderStore();

const ProceedCheckout = defineAsyncComponent({
  loader: () => import("@/components/products/ProceedCheckout.vue"),
  delay: 200,
  timeout: 3000,
});

onBeforeMount(async () => {
  await getProduct();
  console.log(productItem.value);
  order.setOrder(productItem.value);
});

onMounted(() => {
  console.log(productItem.value);
});
</script>

<style scoped>
img {
  background-color: var(--ion-color-light);
  padding: 0 1.2em;
  border-radius: var(--ion-border-radius-lg);
}

ion-button {
  --border-radius: 10px !important;
  font-weight: bold;
  font-size: 1em;
  width: 35px;
}

ion-grid {
  padding: 0 !important;
  padding-bottom: 1.8em !important;
}

ion-col {
  padding: 0 !important;
}

.product-detail {
  color: var(--ion-color-medium);
}

ion-title {
  --padding-start: 0 !important;
  padding: 0 !important;
}

ion-buttons {
  color: var(--ion-color-primary);
  display: flex;
  gap: 1em;
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
  pointer-events: none;
}

ion-item {
  border-radius: var(--ion-border-radius-md);
  border: 1px solid var(--ion-color-light);
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
  --color-checked: var(--ion-color-primary);
}

ion-radio::part(container) {
  justify-content: center;

  border-radius: 4px;
  width: 1em;
  height: 1em;
  border: 1px solid var(--ion-color-light-tint);
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

ion-checkbox {
  width: 30px !important;
  height: 30px !important;
  --border-radius: 8px !important;
  --checkbox-background-checked: var(--ion-color-primary-contrast);
  --border-width: 0px !important;
  --checkmark-color: var(--ion-color-secondary);
  --background: transparent;
  --checkmark-width: 2;
}

ion-checkbox.checkbox-checked {
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
</style>
