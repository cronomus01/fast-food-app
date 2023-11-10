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
      <product-item-content :item="productItem"></product-item-content>
     </template>
  </app-page>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onBeforeMount, reactive, ref } from 'vue';
import products from '@/assets/data/products.json';
import { useRoute } from "vue-router";
import BackButton from '@/components/base/BackButton.vue';

interface ProductItem {
  id: number,
  productId: number,
  image: string,
  name: string,
  category: string,
  rating: number,
  price: number,
  details: string,
}

const productItem = ref<Array<ProductItem>>();

const route = useRoute()

const getProduct = async () => {
  try {
    const product = products.filter(product => {
        const id = Number(route.params.id);
        return product.id === id
    })

    const data = await new Promise<Array<ProductItem>>((resolve, reject) => {
      setTimeout(() => {
        resolve(product)
      })
    })


    if(data) {
        productItem.value = data
    }

  } catch (err) {
    if(err instanceof Error) {
      console.log(err.message);
    }
  }
}

const AppHeader = defineAsyncComponent({
    loader: () => import('@/components/header/AppHeader.vue'),
    delay: 200,
    timeout: 3000
  }
)

const AppCart = defineAsyncComponent({
    loader: () => import('@/components/header/AppCart.vue'),
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

const ProductItemContent = defineAsyncComponent({
    loader: () => import('@/components/products/ProductItemContent.vue'),
    delay: 200,
    timeout: 3000
  }
)

onBeforeMount(async() => {
  await getProduct();
})

console.log(route.params.id);
console.log(productItem.value);

</script>

<style scoped>
h2 {
  margin: 0 !important;
  margin-left: 0.5em;
  font-weight: bold;
}
</style>