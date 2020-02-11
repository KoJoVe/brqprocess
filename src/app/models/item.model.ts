export class Item {
  id: number;
  productId: string;
  productDescription: string;
  price: number;
  quantity: number;
  createDate: number;
  userId: string;

  constructor(data: any) {
    this.id = data.id;
    this.productId = data.productId;
    this.productDescription = data.productDescription;
    this.price = data.price;
    this.quantity = data.quantity;
    this.createDate = data.createDate;
    this.userId = data.userId;
  }
}