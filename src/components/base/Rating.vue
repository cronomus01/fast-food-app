<template>
     <div>
      <template v-for="index in 5">
        <ion-icon v-if="index <= props.rating" :icon="star" color="secondary"></ion-icon>
      </template>
      <ion-icon v-if="(!Number.isInteger(props.rating))" :icon="starHalfSharp"  color="secondary"></ion-icon>
    </div>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { star, starHalfSharp } from 'ionicons/icons';
import { defineProps } from 'vue';

const props = defineProps(['rating']);
</script>