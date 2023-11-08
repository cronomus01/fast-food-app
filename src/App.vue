<template>
  <ion-app>
    <loading v-if="loading"></loading>
    <ion-router-outlet v-else></ion-router-outlet>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import Loading from './components/loading/Loading.vue';
import { onMounted, ref } from 'vue';

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})

onMounted(() => {
  loading.value = true;
})
</script>