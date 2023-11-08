<template>
  <ion-item lines="none">
    <div>
      <p>Don't have an account yet?</p>
      <router-link to="/create-account" class="ion-create-link">
        Create
      </router-link>
    </div>
  </ion-item>
</template>

<script setup lang="ts">
  import { IonItem } from '@ionic/vue';
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  background-color: transparent;
  --padding-start: 0px;
  --background: transparent;
}

ion-item div {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
}

p {
  margin-right: 3px;
  font-size: smaller;
}

.ion-create-link {
  text-decoration: none;
  font-weight: bold;
  font-size: smaller;
}

</style>