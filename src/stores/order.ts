import { defineStore } from 'pinia'
import { reactive, ref, watch } from 'vue';
import router from '@/router';

// interface order {
//   isLoaded: () => boolean
//   setMenu: (value: boolean) => void
// }
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
type Product = {
  item?: ProductItem,
  quantity?: number,
  price?: number,
};

type ProductItem = {
  id?: number;
  productId?: number;
  image?: string;
  name?: string;
  category?: string;
  rating?: number;
  price?: number;
  details?: string;
};

interface AddOn {
  title: string;
  quantity: number;
  id: number;
  category: string;
  price: number;
  selected: boolean;
}

interface OrderStore {
  setOrder: (item: ProductItem) => void;
  getProduct: () => Product
  addProductQuantity: () => void
  removeProductQuantity: () => void
  selectedBeverage: (ev: CustomEvent) => void
  selectedBeverageSize: (ev: CustomEvent) => void,
  getAddOns: () => Array<AddOn>
  selectedAddOn: (ev: CustomEvent) => void
  addAddOnQuantity: (id: number) => void
  removeAddOnQuantity: (id: number) => void
  getOrder: () => Order
}

interface Beverage {
  item: undefined | ProductItem,
  size: undefined | string,
}

interface Order {
  orderNumber: number,
  product: Product,
  beverages: Beverage,
  addOns: Array<AddOn>
}

const addOns = [
  {
    id: 1,
    title: "Tomato Sauce",
    category: "Sauce",
    price: 49,
    quantity: 1,
    selected: false,
  },
  {
    id: 2,
    title: "White Rice",
    category: "Rice",
    price: 25,
    quantity: 1,
    selected: false,
  },
];

export const orderStore = defineStore('order', (): OrderStore => {

  const product = reactive({
    item: {
      id: 0,
      productId: 0,
      image: '',
      name: '',
      category: '',
      rating: 0,
      price: 0,
      details: '',
    },
    quantity: 0,
    price: 0,
  });
  
  const beverage = reactive({
    item: undefined,
    size: undefined,
  });

  const setOrder = (item: ProductItem) => {
    product.item = item;
    product.quantity = 1;
    product.price = item.price;
  }
  
  const addOnArray = ref<Array<AddOn>>(addOns);
  
  const order = reactive<Order>({
    orderNumber: Math.floor(Math.random() * 1000),
    product: product,
    beverages: beverage,
    addOns: addOnArray.value,
  });
  
  const addProductQuantity = () => {
    // Add more product
    product.quantity += 1;

    order.product = product;
  };
  
  const removeProductQuantity = () => {
    product.quantity -= 1;
  
    console.log(order);
  };
  
  const selectedBeverage = (ev: CustomEvent) => {
    // Add beverage
    beverage.item = ev.detail.value;
  
    console.log(order);
  };
  
  const selectedBeverageSize = (ev: CustomEvent) => {
    console.log(ev.detail.value);
  
    // Add beverage size
    beverage.size = ev.detail.value;
  
    // Update Order
    order.beverages = beverage;
  
    console.log(order);
  };
  
  const selectedAddOn = (ev: CustomEvent) => {
    // change to selected
    addOnArray.value.forEach((addOn) => {
      if (addOn.id == ev.detail.value) {
        if(addOn.selected) {
          addOn.selected = false;
        } else {
          addOn.selected = true;
        }
      }
    });
  
    console.log(order);
  };

 
  const addAddOnQuantity = (id: number) => {
    if (addOnArray.value.length > 0) {
      addOnArray.value.forEach((addOn: AddOn) => {
        if (addOn.id == id && addOn.selected) {
          addOn.quantity += 1;
        }
      });
    }
  };

  const getProduct = () => {
    return product;
  }

  const getAddOns = () => {
    return addOnArray.value
  }

  const getOrder = () => {
    return order;
  }

  const removeAddOnQuantity = async (id: number) => {
    if (addOnArray.value.length > 0) {
      addOnArray.value.forEach((addOn: AddOn) => {
        if (addOn.id == id && addOn.selected) {
          addOn.quantity -= 1;
        }
      });
    }
  };

  // router.afterEach(() => {
  //   order.addOns.forEach(addOn => {
  //     addOn.selected = false;
  //   })
  // })

  return {setOrder, getProduct, addProductQuantity, removeProductQuantity, selectedBeverage, selectedBeverageSize, getAddOns, selectedAddOn, addAddOnQuantity, removeAddOnQuantity, getOrder}
})