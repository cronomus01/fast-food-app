<template>
      <form action="/home" class="ion-form">
        <ion-list class="ion-no-padding">
          <ion-item lines="none">
            <ion-label position="stacked" color="medium">Email Address</ion-label>
            <ion-input class="ion-email" placeholder="Enter your email" aria-label="email-address"></ion-input>
          </ion-item>
        </ion-list>
        <ion-list class="ion-no-padding ion-margin-top ion-margin-bottom">
          <ion-item lines="none" class="password">
            <ion-label position="stacked" color="medium">Password</ion-label>
            <ion-grid class="ion-no-margin">
              <ion-row>
                <ion-col><ion-input type="password" placeholder="Enter your password" aria-label="password-field"></ion-input></ion-col>
                <ion-col size="auto">
                  <router-link to="/forgot-password" class="ion-forgot-link">
                    Forgot?
                  </router-link>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-item>
        </ion-list>
        <ion-buttons>
          <ion-button fill="solid" expand="block" color="primary" class="ion-login-btn" router-link="/home">
            Login
          </ion-button>
          <ion-button fill="clear" expand="block" color="primary">
            Login as Guest
          </ion-button>
        </ion-buttons>
      </form>
</template>

<script setup lang="ts">
import { IonButton, IonLabel, IonItem, IonInput, IonList, IonGrid, IonCol, IonRow, IonButtons} from '@ionic/vue';
</script>
<style scoped>
ion-list {
  border-radius: var(--ion-border-radius-md);
}
ion-item {
  border: 1px solid var(--ion-color-medium);
  border-radius: var(--ion-border-radius-md);
}

ion-grid {
  --ion-grid-padding: 0px;
  --ion-grid-margin: 0px;
  width: 100%;
}

ion-col {
  --ion-grid-column-padding: 0px;
  display: flex;
  align-items: center;
}

ion-buttons {
  display: flex;
  flex-direction: column;
  padding-top: var(--ion-padding-top-xl);
  gap: 8px;
}

ion-button {
  flex-basis: 100%;
  width: 100%;
  --padding-top: 2em !important;
  --padding-bottom: 2em !important;
  --border-radius: 1.25em !important;
  font-weight: bold;
}


form {
  margin-top: var(--ion-margin-top-lg);
}

.ion-forgot-link {
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
}

</style>