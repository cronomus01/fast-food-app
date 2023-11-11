<template>
  <!-- <ion-radio-group>
    <ion-item>
      <ion-label>My Home Address</ion-label>
      <ion-radio slot="end" value="grapes"></ion-radio>
      <p>No. 21 St. Agustin Street, Brgy. De Jose Delgado City 2234 Philippines</p>
    </ion-item>
    <ion-item>
      <ion-label>Work/Office</ion-label>
      <ion-radio slot="end" value="grapes"></ion-radio>
      <p>3rd flr Anyeong Bldg. Seareal St. Joaqin City 3456 Philippines</p>
    </ion-item>
  </ion-radio-group> -->

  <ion-radio-group class="order-radio-group">
    <ion-list :inset="true" class="address-list">
      <ion-item-sliding @click="selected()">
        <ion-item :button="true" lines="none">
          <ion-label>
            <h2>Chou Tzuyu</h2>
            <p>+63 912 345 6789</p>
            <p>chou.tzu-yu@email.com</p>
          </ion-label>
        </ion-item>
        <ion-item-options slot="end">
          <ion-item-option color="secondary" class="edit">
            <ion-icon slot="icon-only" :icon="pencil"></ion-icon>
          </ion-item-option>
          <ion-item-option color="primary" :expandable="true" class="trash">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-sliding @click="selected()">
        <ion-item :button="true" lines="none">
          <ion-label>
            <h2>My Home Address</h2>
            <p>No. 21 St. Agustin Street, Brgy. De Jose Delgado City 2234 Philippines</p>
          </ion-label>
          <ion-radio slot="end" value="my-home-address" id="home"></ion-radio>
        </ion-item>

        <ion-item-options slot="end">
          <ion-item-option color="secondary" class="edit">
            <ion-icon slot="icon-only" :icon="pencil"></ion-icon>
          </ion-item-option>
          <ion-item-option color="primary" :expandable="true" class="trash">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-sliding @click="selected()">
        <ion-item :button="true" lines="none">
          <ion-label>
            <h2>Work/Office</h2>
            <p>3rd flr Anyeong Bldg. Seareal St. Joaqin City 3456 Philippines</p>
          </ion-label>
          <ion-radio slot="end" value="work-office"></ion-radio>
        </ion-item>
        <ion-item-options slot="end">
          <ion-item-option color="secondary" class="edit">
            <ion-icon slot="icon-only" :icon="pencil"></ion-icon>
          </ion-item-option>
          <ion-item-option color="primary" :expandable="true" class="trash">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
  </ion-radio-group>
</template>

<script setup lang="ts">
import { IonRadio, IonItemGroup, IonRadioGroup, IonItem, IonLabel, IonText, IonList, IonItemSliding, IonItemOption, IonItemOptions, IonIcon } from '@ionic/vue';
import { pin, share, trash, pencil } from 'ionicons/icons';

const selected = () => {
  console.log('test')
}
</script>


<style scoped>

ion-radio-group.order-radio-group ion-item {
  display: flex;
  flex-direction: column;
  --background: var(--ion-color-light);
  --border-radius: var(--ion-border-radius-md)
}

ion-radio-group.order-radio-group ion-item-group {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

ion-radio-group.order-radio-group ion-item-group {
  display: flex;
  flex-direction: column;
}

ion-radio-group.order-radio-group h1 {
  font-weight: bold;
}

ion-radio {
    width: 15px;
    height: 15px;
  }

  ion-radio::part(container) {
    border-radius: 50%;
    border: 2px solid var(--ion-color-primary-contrast);
  }

  ion-radio::part(mark) {
    background: none;
    transition: none;
    transform: none;
    border-radius: 0;
    display: none;
  }

ion-radio.radio-checked::part(container) {
  background: var(--ion-color-secondary);
  /* border-color: transparent; */
  padding: 2px;
}

ion-radio.radio-checked::part(mark) {
  
}

ion-list.address-list {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  background-color: transparent;
}

ion-list.address-list ion-item {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: var(--ion-border-radius-md);
  --padding-top: 0.5em;
}

ion-list.address-list h2 {
  font-weight: bold;
}

ion-list.address-list p {
  word-wrap: break-word;
  display: flex;
  word-break: normal;
}

ion-list.address-list ion-items-options ion-item-option:first-of-type {
  background-color: red;
}

.edit {
  border-radius: var(--ion-border-radius-md);
  margin-left: 0.5em;
}

.trash {
  border-radius: var(--ion-border-radius-md);
  margin-left: 0.5em;
}


</style>

