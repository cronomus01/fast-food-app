<template>
  <products :items="mostPopular" title="Most popular"></products>
</template>

<script setup lang="ts">
import {IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon } from '@ionic/vue';
import mostPopularData from '@/assets/data/most-popular.json';
import { star, starHalfSharp } from 'ionicons/icons';
import { ref } from 'vue';
import Products from '@/components/base/Products.vue';

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