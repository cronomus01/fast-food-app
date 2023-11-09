<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col>
        <h4 class="ion-no-margin">Special Offer!</h4>
      </ion-col>
      <ion-col class="view-special-offers">
          <router-link to="/all-special-offers" class="view-all">
          View All
          </router-link>
          <ion-icon :icon="chevronForward" color="primary">
          </ion-icon>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-grid :class="`ion-no-padding ion-margin-top ${!props.screenSize ? 'mobile' : 'desktop'}`">
    <ion-row v-for="specialOffer of specialOffers">
      <ion-col>
        <ion-img :src="specialOffer.image" :alt="specialOffer.name"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import { IonGrid, IonRow, IonCol, IonImg, IonIcon } from '@ionic/vue';
import specialOfferData from '@/assets/data/special-offer.json';
import { onMounted, onUpdated, ref, watch } from 'vue';
import { chevronForward } from 'ionicons/icons';

const props = defineProps(['screenSize'])

interface SpecialOffer {
  id: number,
  productId: number,
  image: string,
  name: string,
}
const specialOffers = ref<Array<SpecialOffer>>([]);


const getOffers = async () => {
  try {
    const data = await new Promise<Array<SpecialOffer>>((resolve, reject) => {
      setTimeout(() => {
        resolve(specialOfferData)
      })
    })

    if(data) {
      specialOffers.value = data;
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
ion-col.view-special-offers {
  display: flex;
  justify-content: end;
  --background: antiquewhite;
  gap: 0.25em;
  align-items: center;
}

ion-grid.mobile {
  overflow-x: scroll;
}

.view-all {
  font-weight: bold;
  text-decoration: none;
}
</style>