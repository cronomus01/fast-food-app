<template>
  <app-page>
    <template #header>
      <app-header>
        <template #points> </template>
        <template #profile> </template>
      </app-header>
    </template>
    <template #content>
      <order-received-content></order-received-content>
    </template>
  </app-page>
</template>

<script setup lang="ts">
import AppPage from "@/components/base/AppPage.vue";
import AppHeader from "@/components/header/AppHeader.vue";
import OrderReceivedContent from "@/components/order/OrderReceivedContent.vue";
</script>
