<template>
   <ion-item lines="none">
      <ion-icon :icon="search" color="primary ion-margin-end"></ion-icon>
      <ion-input :placeholder="props.placeholder"></ion-input>
      <slot></slot>
   </ion-item>
</template>

<script setup lang="ts">
import { IonItem, IonIcon, IonInput } from '@ionic/vue';
import { search } from 'ionicons/icons';

const props = defineProps(['placeholder'])

</script>

<style scoped>
ion-item {
   border: 1px solid var(--ion-color-medium-tint);
   border-radius: var(--ion-border-radius-md);
   --padding-top: var(--ion-padding-top-sm);
   --padding-bottom: var(--ion-padding-top-sm);
   --background: var(--ion-color-light)
}

ion-icon {
   font-size: 2.2em;
}

</style>