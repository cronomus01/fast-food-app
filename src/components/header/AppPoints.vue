<template>
    <ion-grid>
        <ion-row>
            <ion-col size="auto" class="ion-no-padding"><ion-img src="assets/crown.png" class="crown"></ion-img></ion-col>
            <ion-col size="auto" class="ion-text-center"><p class="ion-no-margin">{{ points }} points</p></ion-col>
            <ion-col size="auto" class="ion-no-padding "><ion-img src="assets/octicon_chevron-left-16.png" class="chevron-left"></ion-img></ion-col>
        </ion-row>
    </ion-grid>
</template>


<script setup lang="ts">
import { IonImg, IonGrid, IonCol, IonRow } from '@ionic/vue';
import { ref } from 'vue';

const points = ref(0);


</script>

<style scoped>
ion-img {
  width: 30px;
}

ion-img.crown {
  width: 35px;
  padding-right: 0.5em;
}

ion-img.chevron-left {
  width: 20px;
}

ion-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2em !important;
}

ion-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  font-weight: bold;
}

</style>