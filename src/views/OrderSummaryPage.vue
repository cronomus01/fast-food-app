<template>
  <app-page>
    <template #header>
      <app-header>
        <template #button>
          <back-button></back-button>
        </template>
        <template #points>
          <h2>Order Summary</h2>
        </template>
        <template #profile>
          <app-profile></app-profile>
        </template>
      </app-header>
    </template>
    <template #content>
      <order-summary-content></order-summary-content>
    </template>
  </app-page>
</template>

<script setup lang="ts">
import AppPage from "@/components/base/AppPage.vue";
import AppHeader from "@/components/header/AppHeader.vue";
import OrderSummaryContent from "@/components/order/OrderSummaryContent.vue";
import BackButton from "@/components/base/BackButton.vue";
</script>

<style scoped>
h2 {
  margin: 0 !important;
  margin-left: 0.5em;
  font-weight: bold;
}
</style>
