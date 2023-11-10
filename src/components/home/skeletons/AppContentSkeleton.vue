<template>
  <div>
      <ion-grid class="content-grid">
          <ion-row>
              <ion-col>
                <div>Loading Content Header</div>
              </ion-col>
          </ion-row>
          <ion-row>
              <ion-col>
                <div>Loading Search Bar</div>
              </ion-col>
          </ion-row>
          <ion-row>
              <ion-col>
                <div>Special Offers</div>
              </ion-col>
          </ion-row>
          <ion-row>
              <ion-col>
                <div>
                  Loading Category
                </div>
              </ion-col>
          </ion-row>
          <ion-row>
              <ion-col>
                <div>Loading What's New</div>
              </ion-col>
          </ion-row>
          <ion-row>
              <ion-col>
                <div>Loading Most Popular</div>
              </ion-col>
          </ion-row>
      </ion-grid>
      <!-- <ion-button slot="fixed">Order Now</ion-button> -->
  </div>
</template>

<script setup lang="ts">
import { IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';
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
