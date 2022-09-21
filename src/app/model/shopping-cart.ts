import { Product } from './product'
import { ShoppingCartItem } from './shopping-cart-item'

export class ShoppingCart {

  items: ShoppingCartItem[] = [];
  storeId: number;

  constructor(storeId: number) {
    this.storeId = storeId;
  }

  addItem(product: Product): void {

    let itemQuantity = this.calculateProductQuantity(product.id)
    if (itemQuantity === 0) {
      let item: ShoppingCartItem = this.convertProductToCartItem(product);
      item.quantity = 1;
      this.items.push(item);
    } else {
      let selectedItem = this.items.find(item => item.id === product.id);
      let index = selectedItem ? this.items.indexOf(selectedItem) : -1;
      if (index != -1) {
        if (selectedItem) {
          let newItem: ShoppingCartItem = new ShoppingCartItem(selectedItem.id);
          newItem.description = selectedItem.description;
          newItem.name = selectedItem.name;
          newItem.price = selectedItem.price;
          newItem.quantity = selectedItem.quantity ? selectedItem.quantity + 1 : 1;
          this.items[index] = newItem;
        }
      }
    }
  }

  // removeItem(item: ShoppingCartItem): void {
  //   let itemQuantity = this.calculateProductQuantity(item.id)
  //   if (itemQuantity === 1) {
  //     let selectedItem = this.items.find(item => item.id === item.id);
  //     selectedItem ? this.items.indexOf(selectedItem) : -1;
  //     itemQuantity = 0;
  //     this.items.forEach((item, index) => {
  //       if (item.id === item.id) this.items.splice(index, 1);
  //     });
  //   } else {
  //     itemQuantity = itemQuantity - 1;
  //     console.log(itemQuantity);
  //   }

  // }

  convertProductToCartItem(product: Product): ShoppingCartItem {
    let item: ShoppingCartItem = new ShoppingCartItem(product.id);
    item.id = product.id;
    item.name = product.name;
    item.description = product.description;
    item.price = product.price;
    return item;
  }

  calculateProductQuantity(id: Number): number {
    let numOfSameProducts: number = 0;
    this.items.forEach((item) => {
      if (item.id === id) {
        numOfSameProducts++;
      }
    });
    return numOfSameProducts;
  }


  calculateTotalCartItems(): number {
    let count: number = 0;
    this.items.forEach(item => {
      if (item.quantity) count += item.quantity;
    });
    return count;
  }


  get totalPrice() {
    let sum = 0;
    this.items.forEach(item => {
      if (item.quantity && item.price) sum += item.quantity * item.price;
    });
    return sum;
  }



}
