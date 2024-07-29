import { Product } from "@/types"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { ShoppingCart } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
import { IndianRupee } from 'lucide-react';
type props = {
  productDetails: Product;
  handleAddToCart: (product : Product )=> void;
}

const ProductCard = ({ productDetails,handleAddToCart }: props) => {
  // const navigate = useNavigate();
  // console.log(productDetails)

  return (
    <div>
      <Card>
        <CardContent className="pt-4">
          <div className="">
            <h1 className=" left-0 right-0 sm:text-xl font-semibold text-center border-b-2">{productDetails.name}</h1>
            <img src={productDetails.imageURL} className="h-full w-full py-2  " />
          </div>

          <div className="flex items-center justify-between px-4   flex-col sm:flex-row">

            <div className="flex items-center ">
              <IndianRupee className="size-4"/>
              <p className="">{productDetails.price}</p>
            </div>

            <Button className=' bg-gray-900 text-white gap-1 rounded-full  ' onClick={() => handleAddToCart(productDetails)} >Add to cart <ShoppingCart className="size-5" /></Button>
          </div>
        </CardContent>

      </Card>
    </div>
  )
}

export default ProductCard
