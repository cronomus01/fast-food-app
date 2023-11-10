

<template>
 <ion-grid class="content-grid">
    <ion-row>
        <ion-col>
            <app-search-bar placeholder="try our new Beef Bibimbowl">
                <ion-img src="assets/app-icons/filter.png"></ion-img>
            </app-search-bar>
        </ion-col>
    </ion-row>
    <ion-row>
        <ion-col>
            <product-category></product-category>
        </ion-col>
    </ion-row>
    <ion-row>
        <ion-col>
            <products :items="mostPopular"></products>
        </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import { IonGrid, IonRow, IonCol, IonButton, IonImg } from '@ionic/vue';
import AppSearchBar from '../home/AppSearchBar.vue';
import { defineAsyncComponent, ref } from 'vue';
import Products from '../base/Products.vue';

const ProductCategory = defineAsyncComponent({
    loader: () => import('@/components/products/ProductCategory.vue'),
    delay: 200,
    timeout: 3000
})

import mostPopularData from '@/assets/data/most-popular.json';
interface MostPopular {
  id: number,
  productId: number,
  image: string,
  name: string,
  category: string,
  rating: number,
  price: number
}

const mostPopular = ref<Array<MostPopular>>([]);

const getOffers = async () => {
  try {
    const data = await new Promise<Array<MostPopular>>((resolve, reject) => {
      setTimeout(() => {
        resolve(mostPopularData)
      })
    })

    if(data) {
      mostPopular.value = data;
    }

  } catch (err) {
    if(err instanceof Error) {
      console.log(err.message);
    }
  }
}

getOffers();

</script>

<style>
ion-img {
    width: 28px;
}
</style>