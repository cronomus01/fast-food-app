<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col>
        <h4 class="ion-no-margin">What's New</h4>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-grid :class="`ion-no-padding ion-margin-top ${!props.screenSize ? 'mobile' : 'desktop'}`">
    <ion-row v-for="newProduct of whatsNew">
      <ion-col>
        <ion-img :src="newProduct.image" :alt="newProduct.name"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import {IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import whatsNewData from '@/assets/data/whats-new.json';
import { ref } from 'vue';

const props = defineProps(['screenSize'])

interface WhatsNew {
  id: number,
  productId: number,
  image: string,
  name: string,
}
const whatsNew = ref<Array<WhatsNew>>([]);

const getOffers = async () => {
  try {
    const data = await new Promise<Array<WhatsNew>>((resolve, reject) => {
      setTimeout(() => {
        resolve(whatsNewData)
      })
    })

    if(data) {
      whatsNew.value = data;
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

ion-grid.mobile ion-img {
  width: 100% !important;
}
ion-col {
  padding: 0 !important;
  --background: antiquewhite;
}

</style>