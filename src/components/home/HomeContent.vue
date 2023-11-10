<template>
    <ion-grid class="content-grid">
        <ion-row>
            <ion-col>
                <content-header></content-header>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <app-search-bar placeholder="try our new Steak Fries Veggies"></app-search-bar>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <special-offers :screen-size="changeImageWidth"></special-offers>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <category :screen-size="changeImageWidth"></category>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <whats-new :screen-size="changeImageWidth"></whats-new>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <most-popular></most-popular>
            </ion-col>
        </ion-row>
    </ion-grid>
    <ion-button slot="fixed">Order Now</ion-button>
</template>

<script setup lang="ts">
import AppSearchBar from './AppSearchBar.vue';
import SpecialOffers from './SpecialOffers.vue';
import Category from './Category.vue';
import WhatsNew from './WhatsNew.vue';
import MostPopular from './MostPopular.vue';
import ContentHeader from './ContentHeader.vue';
import { onMounted, onUpdated, ref, watch } from 'vue';

import { IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';

const changeImageWidth = ref(false);

const resize = () => {
  if(window.innerWidth > 576) {
    changeImageWidth.value = true;
  } else {
    changeImageWidth.value = false;
  }
  console.log(changeImageWidth.value);
}

onMounted(() => {
  window.addEventListener("resize", resize)
  resize();
})

onUpdated(() => {
  window.removeEventListener("resize", resize)
})


watch(changeImageWidth, () => {
  console.log('removed listener')
  window.addEventListener("resize", resize)
})
</script>

<style>
ion-button[slot='fixed'] {
  bottom: 2em;
  right: 20px;
}
</style>