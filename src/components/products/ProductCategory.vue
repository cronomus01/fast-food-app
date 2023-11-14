<template>
  <!-- <ion-list lines="none">
    <ion-item button>
 
    </ion-item> -->
  <ion-grid>
    <ion-row>
      <ion-col>
        <router-link to="/products" active-class="active" class="link">
          <ion-label>All</ion-label>
        </router-link>
      </ion-col>
    </ion-row>
    <ion-row v-for="category of categories" size="auto" class="ion-activatable">
      <ion-col>
        <router-link to="/category" active-class="active" class="link">
          <ion-label>{{ category.name }}</ion-label>
        </router-link>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import productCategoryData from "@/assets/data/product-category.json";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonRippleEffect,
  IonButton,
} from "@ionic/vue";
import { ref } from "vue";
interface Categories {
  id: number;
  name: string;
  link: string;
}

const categories = ref<Array<Categories>>([]);

const getCategories = async () => {
  try {
    const data = await new Promise<Array<Categories>>((resolve, reject) => {
      setTimeout(() => {
        resolve(productCategoryData);
      });
    });

    if (data) {
      categories.value = data;
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

getCategories();
</script>

<style scoped>
ion-grid {
  display: flex;
  gap: 0.5em;
  overflow-x: scroll;
  --padding-start: 0 !important;
  --padding-end: 0 !important;
  --padding-top: 0 !important;
}
ion-col {
  padding: 0 !important;
}

ion-button {
  flex-basis: 100%;
  width: 100%;
  --padding-top: 2em !important;
  --padding-bottom: 2em !important;
  --border-radius: 1.25em !important;
  font-weight: bold;
  box-shadow: none;
}

ion-ripple-effect {
  border-radius: var(--ion-border-radius-md);
}

.link {
  padding: 1em;
  display: flex;
  color: var(--ion-color-light);
  text-decoration: none;
  border-radius: var(--ion-border-radius-md);
  background-color: var(--ion-color-light);
  color: var(--ion-color-medium);
}

.active {
  background-color: var(--ion-color-primary);
  color: var(--ion-color-primary-contrast);
}
</style>
