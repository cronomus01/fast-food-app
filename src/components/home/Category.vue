<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col>
        <h4 class="ion-no-margin">Category</h4>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-grid :class="`ion-no-padding ion-margin-top ${!props.screenSize ? 'mobile' : 'desktop'}`" >
    <ion-row v-for="category of categories">
      <ion-col>
        <ion-img :src="category.image" :alt="category.name"></ion-img>
        <h1>{{ category.name }}</h1>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import {IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import categoryData from '@/assets/data/category.json';
import { ref } from 'vue';

const props = defineProps(['screenSize'])

interface Categories {
  id: number,
  productId: number,
  image: string,
  name: string,
}

const categories = ref<Array<Categories>>([]);

const getOffers = async () => {
  try {
    const data = await new Promise<Array<Categories>>((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryData)
      })
    })

    if(data) {
      categories.value = data;
    }

  } catch (err) {
    if(err instanceof Error) {
      console.log(err.message);
    }
  }
}

getOffers();
</script>

<style scoped>

ion-col {
  padding: 0 !important;
  --background: antiquewhite;
}
ion-grid.mobile {
  overflow-x: scroll;
  position: relative;
}

ion-grid.mobile h1 {
  position: absolute;
  bottom: 0.5em;
  left: 1em;
  font-weight: bold;
  color: var(--ion-color-primary-contrast);
}

</style>