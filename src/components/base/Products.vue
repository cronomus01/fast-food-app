<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col>
        <h4 class="ion-no-margin" v-if="props.title">{{ props.title }}</h4>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-grid :class="`ion-no-padding ${props.title && 'ion-margin-top'}`" when="md">
    <ion-row class="most-popular-row">
      <ion-col v-for="item of props.items">
        <router-link :to="`/products/${item.id}`" active-class="active" class="link">
          <ion-card class="ion-padding text-center ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <div class="ion-card-img">
            <ion-img :src="item.image" :alt="item.name" class="most-popular"></ion-img>
          </div>
          <ion-card-header class="ion-no-padding">
            <ion-card-subtitle class="ion-text-capitalize">{{ item.category }}</ion-card-subtitle>
            <ion-card-title>{{ item.name }}</ion-card-title>
          </ion-card-header>
          <ion-card-content class="ion-no-padding">
            <h2>P{{ item.price }}</h2>
            <rating :rating="item.rating"></rating>
          </ion-card-content>
        </ion-card>
        </router-link>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import {IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonRippleEffect } from '@ionic/vue';
import Rating from './Rating.vue';

const props = defineProps(['items', 'title'])
</script>

<style scoped>

ion-col {
  padding: 0 !important;
  --background: antiquewhite;
  width: fit-content;
}

ion-img {
  width: 25px;
}

ion-img.most-popular {
  width: 120px;
}

ion-row.most-popular-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em !important;
  justify-content: center;
}

ion-card {
  flex-basis: 100%;
  width: 100%;
  box-shadow: none;
  background-color: var(--ion-color-light);
  border-radius: var(--ion-border-radius-md);
  margin: 0px !important;
  text-align: start !important;
}

.ion-card-img {
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  justify-content: center;
  align-items: center;
}

ion-card-content {
  --padding-start: 0px;
}

ion-card-title {
  font-size: small;
}

h2 {
  color: var(--ion-color-primary);
}

.link {
  text-decoration: none;
}

</style>