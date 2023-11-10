import { defineStore } from 'pinia'
import { ref } from 'vue';

interface MenuButon {
  isLoaded: () => boolean
  setMenu: (value: boolean) => void
}
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const menuStore = defineStore('menu', (): MenuButon => {
  // other options...
  const menu = ref(false);

  const isLoaded = (): boolean => {
    return menu.value;
  }

  const setMenu = (value: boolean) => {
    menu.value = value;
  }
  
  return {setMenu, isLoaded}
})