<template>
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
        <order-summary-content></order-summary-content>
      </template>
    </app-page>
</template>

<script setup lang="ts">
import AppPage from '@/components/base/AppPage.vue'
import AppHeader from '@/components/header/AppHeader.vue';
import OrderSummaryContent from '@/components/order/OrderSummaryContent.vue';
</script>