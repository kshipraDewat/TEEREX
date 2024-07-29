import { CartItem } from "@/types";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const cartItemsData = localStorage.getItem('cartItems');
    if (cartItemsData) {
      setCartItems(JSON.parse(cartItemsData));
    }
    setLoading(false);
  }, []);

  return (
    <div className="pt-4 px-4 lg:px-12 py-2">
      {loading ? (
        <div className="text-2xl font-semibold">Loading...</div>
      ) : cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <div key={cartItem.id} className="p-4 bg-zinc-300 shadow-md rounded mb-4">
            <p>{cartItem.name}</p>
            <p>{cartItem.price}</p>
            <p>{cartItem.quantityInCart}</p>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col text-zinc-600 items-center justify-center">
            <div className="flex text-2xl">
              <p>Your Cart Is Empty</p>
              <ShoppingCart className="size-6 ml-2" />
            </div>
            <p>Please add some items to cart</p>
          </div>
          <div>
            <Link to="/product" className="underline">Click Here to Start Shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
