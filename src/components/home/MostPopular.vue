<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col>
        <h4 class="ion-no-margin">Most Popular</h4>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-grid class="ion-no-padding ion-margin-top" when="md">
    <ion-row class="most-popular-row">
      <ion-col v-for="popular of mostPopular">
        <ion-card class="ion-padding text-center">
          <div class="ion-card-img">
            <ion-img :src="popular.image" :alt="popular.name" class="most-popular"></ion-img>
          </div>
          <ion-card-header class="ion-no-padding">
            <ion-card-subtitle class="ion-text-capitalize">{{ popular.category }}</ion-card-subtitle>
            <ion-card-title>{{ popular.name }}</ion-card-title>
          </ion-card-header>
          <ion-card-content class="ion-no-padding">
            <h2>P{{ popular.price }}</h2>
            <div>
              <template v-for="index in 5">
                <ion-icon v-if="index <= popular.rating" :icon="star" color="primary"></ion-icon>
              </template>
              <ion-icon v-if="(!Number.isInteger(popular.rating))" :icon="starHalfSharp"  color="primary"></ion-icon>
            </div>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import {IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon } from '@ionic/vue';
import mostPopularData from '@/assets/data/most-popular.json';
import { star, starHalfSharp } from 'ionicons/icons';
import { ref } from 'vue';

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

</style>