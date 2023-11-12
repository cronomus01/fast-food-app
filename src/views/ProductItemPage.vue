<template>
  <app-page>
    <template #header>
      <app-header>
        <template #button>
          <back-button></back-button>
        </template>
        <template #points>
          <h2>Meat</h2>
        </template>
        <template #profile>
          <app-cart></app-cart>
        </template>
      </app-header>
    </template>
    <template #content>
      <product-item-content></product-item-content>
    </template>
  </app-page>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onBeforeMount, reactive, ref } from "vue";
import BackButton from "@/components/base/BackButton.vue";

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

const AppPage = defineAsyncComponent({
  loader: () => import("@/components/base/AppPage.vue"),
  delay: 200,
  timeout: 3000,
});

const ProductItemContent = defineAsyncComponent({
  loader: () => import("@/components/products/ProductItemContent.vue"),
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
