<template>
  <!-- <ion-loading class="custom-loading" trigger="open-loading" message="Loading..." :isOpen="loading.onLoading()"></ion-loading> -->
  <app-page>
    <template #header>
      <app-header>
        <template #button>
          <menu-button></menu-button>
        </template>
        <template #points>
          <h2>Our Foods</h2>
        </template>
      </app-header>
    </template>
    <template #content>
      <products-content></products-content>
    </template>
  </app-page>
</template>

<script setup lang="ts">
import { IonPage, IonButton, IonLoading, IonRouterOutlet } from "@ionic/vue";
import { loadingStore } from "@/stores/loading";
import { onMounted, defineAsyncComponent } from "vue";

const AppHeader = defineAsyncComponent({
  loader: () => import("@/components/header/AppHeader.vue"),
  delay: 200,
  timeout: 3000,
});

const AppCart = defineAsyncComponent({
  loader: () => import("@/components/header/AppCart.vue"),
  delay: 200,
  timeout: 3000,
});

const ProductsContent = defineAsyncComponent({
  loader: () => import("@/components/products/ProductsContent.vue"),
  delay: 200,
  timeout: 3000,
});

const AppPage = defineAsyncComponent({
  loader: () => import("@/components/base/AppPage.vue"),
  delay: 200,
  timeout: 3000,
});

const MenuButton = defineAsyncComponent({
  loader: () => import("@/components/menu/MenuButton.vue"),
  delay: 200,
  timeout: 3000,
});
</script>

<style scoped>
h2 {
  margin: 0 !important;
  margin-left: 0.5em;
  font-weight: bold;
}
</style>
