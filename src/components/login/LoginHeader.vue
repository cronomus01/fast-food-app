<template>
    <div>
        <ion-img src='assets/logo.png' alt="fast-food-logo"></ion-img>
        <h2>Bonjour!</h2>
        <p>
            Welcome to all new FastFood mobile app. Kindly login your account. Thank you!
        </p>
    </div>
</template>

<script setup lang="ts">
import { IonImg } from '@ionic/vue';
</script>

<style scoped>
ion-img {
    width: 103px;
    margin-top: var(--ion-margin-top-lg);
}

h2 {
    font-weight: bold;
}

p {
    margin-top: var(--ion-margin-top-none);
    color: var(--ion-color-medium);
}
</style>