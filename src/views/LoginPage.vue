<template>
  <app-page>
    <template #content>
      <ion-grid>
        <ion-row class="ion-align-items-start">
          <ion-col>
            <login-header></login-header>
            <login-form></login-form>
          </ion-col>
        </ion-row>
        <ion-row class="ion-align-items-end">
          <ion-col>
            <login-footer></login-footer>
          </ion-col>
        </ion-row>
      </ion-grid>
    </template>
  </app-page>
</template>

<script setup lang="ts">
  import { IonGrid, IonRow, IonCol } from '@ionic/vue';
  import LoginHeader from '@/components/login/LoginHeader.vue';
  import LoginForm from '@/components/login/LoginForm.vue';
  import LoginFooter from '@/components/login/LoginFooter.vue';
  import Loading from '@/components/loading/Loading.vue';

  import AppPage from '@/components/base/AppPage.vue';
</script>

<style scoped>
ion-grid {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  --ion-grid-padding: 0px;
  --ion-grid-margin: 0px;
}
</style>