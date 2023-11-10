<template>
    <!-- <ion-loading class="custom-loading" trigger="open-loading" message="Loading..." :isOpen="loading.onLoading()"></ion-loading> -->
    <app-page>
      <template #header>
        <app-header>
            <template #points>
              <app-points></app-points>
            </template>
            <template #profile>
              <app-profile></app-profile>
            </template>
        </app-header>
      </template>
      <template #content>
        <home-content></home-content>
      </template>
    </app-page>
</template>

<script setup lang="ts">
import { IonPage, IonLoading } from '@ionic/vue';
import { defineAsyncComponent } from 'vue';
import { loadingStore } from '@/stores/loading';
import Loading from '@/components/loading/Loading.vue';
import ErrorComponent from '@/components/error/ErrorComponent.vue';
import MenuBar from '@/components/menu/MenuBar.vue';

const loading = loadingStore();

const AppHeader = defineAsyncComponent({
    loader: () => import('@/components/header/AppHeader.vue'),
    delay: 200,
    timeout: 3000
  }
)

const AppPoints = defineAsyncComponent({
    loader: () => import('@/components/header/AppPoints.vue'),
    delay: 200,
    timeout: 3000
  }
)

const AppProfile = defineAsyncComponent({
    loader: () => import('@/components/header/AppProfile.vue'),
    delay: 200,
    timeout: 3000
  }
)

const AppPage = defineAsyncComponent({
    loader: () => import('@/components/base/AppPage.vue'),
    delay: 200,
    timeout: 3000
  }
)

const HomeContent = defineAsyncComponent({
    loader: () => import('@/components/home/HomeContent.vue'),
    delay: 200,
    timeout: 3000
})
</script>

<style scoped>
</style>
