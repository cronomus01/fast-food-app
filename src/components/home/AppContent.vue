<template>
    <ion-content>
        <ion-grid class="content-grid">
            <ion-row>
                <ion-col>
                    <content-header></content-header>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <app-search-bar></app-search-bar>
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
    </ion-content>
</template>

<script setup lang="ts">
import { IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';
import AppSearchBar from './AppSearchBar.vue';
import SpecialOffers from './SpecialOffers.vue';
import Category from './Category.vue';
import WhatsNew from './WhatsNew.vue';
import MostPopular from './MostPopular.vue';
import ContentHeader from './ContentHeader.vue';
import { onMounted, onUpdated, ref, watch } from 'vue';

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

ion-content {
    --padding-start: 8px;
    --padding-end: 8px;
    --padding-top: 8px;
    --padding-bottom: 8px;
}

ion-grid.content-grid {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 0;
}

ion-grid.mobile {
  display: flex;
}

ion-grid.mobile ion-img {
  width: 320px;
  margin-right: 0.65em !important;
  object-fit: cover;
}

ion-grid.desktop {
  display: flex;
  justify-content: center;
  gap: 1em;
}

ion-grid.desktop ion-img {
  width: 100%;
  object-fit: cover;
}

ion-button[slot='fixed'] {
  bottom: 2em;
  right: 20px;
}
</style>
