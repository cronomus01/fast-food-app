import { defineStore } from 'pinia'
import { ref } from 'vue';

interface Header {
  isLoginRoute: () => boolean
  setHeader: (value: boolean) => void
}
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const headerStore = defineStore('header', (): Header => {
  // other options...
  const header = ref(true);

  const isLoginRoute = (): boolean => {
    return header.value;
  }

  const setHeader = (value: boolean) => {
    header.value = value;
  }
  
  return {setHeader, isLoginRoute}
})