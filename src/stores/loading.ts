import { defineStore } from 'pinia'
import { ref } from 'vue';
import { loadingController } from '@ionic/vue';

interface Loading {
  onLoading: () => boolean
  setLoading: (value: boolean) => void
}
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const loadingStore = defineStore('loading', (): Loading => {
  // other options...
  const loading = ref(true);

  const onLoading = (): boolean => {
    return loading.value;
  }

  const setLoading = (value: boolean) => {
    loading.value = value;
  }
  
  return {onLoading, setLoading}
})