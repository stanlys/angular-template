export interface IRating {
  rate: number;
  count: number;
}

export interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: IRating;
}

export const MOCK_PRODUCTS: IProducts[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];
