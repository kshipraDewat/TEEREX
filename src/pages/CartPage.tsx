import { Button } from "@/components/ui/button";
import { CartItem } from "@/types";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator"


const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalAmount, setTotalAmount] = useState<number>(0)

  useEffect(() => {
    const cartItemsData = localStorage.getItem('cartItems');
    if (cartItemsData) {
      const cartDataArr: CartItem[] = JSON.parse(cartItemsData);
      setCartItems(cartDataArr);
      const total = cartDataArr.reduce((sum, item) => sum + item.price, 0);
      setTotalAmount(total);
    }
    setLoading(false);
  }, []);

  const handleIncOrDec = (isInc: boolean, cartItem: CartItem) => {
    if (isInc) {
      if (cartItem.quantity === cartItem.quantityInCart) {
        alert("Can not increase more, no further stock is available");
      } else {
        const cartItemsArr: CartItem[] = JSON.parse(JSON.stringify(cartItems));
        const index = cartItemsArr.findIndex((item) => item.id === cartItem.id);
        cartItemsArr[index].quantityInCart++;
        setCartItems(cartItemsArr);
        const total = totalAmount + cartItem.price;
        setTotalAmount(total);
      }
    } else {
      if (cartItem.quantityInCart === 1) {
        alert("Can not decrease further");
      } else {
        const cartItemsArr: CartItem[] = JSON.parse(JSON.stringify(cartItems));
        const index = cartItemsArr.findIndex((item) => item.id === cartItem.id);
        cartItemsArr[index].quantityInCart--;
        setCartItems(cartItemsArr);
        const total = totalAmount - cartItem.price;
        setTotalAmount(total);
      }
    }
  };

  return (
    <div className="pt-4 px-4 lg:px-12 py-2  flex flex-col items-center  ">
      {loading ? (
        <div className="text-2xl font-semibold">Loading...</div>
      ) : cartItems.length > 0 ? (
        
          <div className=" ">
          <h2 className="text-3xl mb-3">Shopping Cart</h2>
            {cartItems.map((cartItem)=>(
            <div key={cartItem.id} className=" px-10 py-8 border shadow-lg rounded flex justify-between gap-6 items-center w-[60vw]">
              <div className="flex items-center gap-5">
              <img src={cartItem.imageURL} alt="" className="size-28" />
              <div>
                <p className="text-xl font-semibold">{cartItem.name}</p>
                <p className="text-gray-600 ps-2">Rs.{cartItem.price}</p>
              </div>
              </div>
              <div className="flex gap-5">
              <div className="flex items-center gap-2">

                <Button onClick={()=> handleIncOrDec(false, cartItem)} variant='outline'>-1</Button>
                <p>{cartItem.quantityInCart}</p>
                <Button onClick={()=> handleIncOrDec(true, cartItem)}  variant='outline'>+1</Button>

              </div>
              <Button variant='destructive'>Delete</Button>
              </div>
            </div>

           ))}
           <Separator />
            <h2 className="text-lg font-bold">
              Total amount:{" "}
              <span className="font-normal text-gray-700">
                Rs. {totalAmount}
              </span>
            </h2>
          </div>
         
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
