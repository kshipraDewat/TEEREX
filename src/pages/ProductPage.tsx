import FilterCard from "@/components/FilterCard";
import ProductCard from "@/components/ProductCard";
import { CartItem, Filters, Product } from "@/types";
import { useEffect, useState } from "react"
import SearchProduct from "@/components/SearchProduct";

const productPage = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [finalProductList, setFinalProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchString, setSearchString] = useState<string>("");
  const [filters, setFilters] = useState<Filters>(
    {colors:[],
    gender:[],
    price:[],
    type:[],}
  );

  const handleSearch = (searchQuery: string) => {
    // console.log("Products", products)
    // console.log(searchQuery)

    const res = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    // console.log("res ", res);
    setFinalProductList(res);
  }

  const handleFilterApply =(filters: Filters)=>{
    console.log(products[0]);
    console.log(filters);

    let filterProduct =products
    if(filters.colors.length >0){
      filterProduct = filterProduct.filter((product)=>
        filters.colors.includes(product.color))
    }

    if(filters.gender.length >0){
      filterProduct = filterProduct.filter((product)=>
        filters.gender.includes(product.gender))
    }
   
    if (filters.price.length > 0) {
      filterProduct = filterProduct.filter((product) => {
        const productPrice = parseFloat(product.price as unknown as string);
        return filters.price.some(priceRange => {
          const [min, max] = priceRange.split('-').map(Number);
          return productPrice >= min && productPrice <= max;
        });
      });
    }
    
    if(filters.type.length >0){
      filterProduct = filterProduct.filter((product)=>
        filters.type.includes(product.type))
    }

    setFinalProductList(filterProduct)

  }
  const getProducts = async () => {
    await fetch(
      ' https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json '
    )

      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        setProducts(data)
        setFinalProductList(data)
      })
      .catch((err) => console.error(err))
  };

  useEffect(() => {
    //api call
    getProducts();

  }, [])

  useEffect(() => {
    handleSearch(searchString)
  }, [searchString])

  useEffect(()=>{
    console.log(filters);
    handleFilterApply(filters)

  },[filters])


  const handleAddToCart = (productDetails : Product)=> {
    console.log('add to cart is happening')
    console.log(productDetails)
    //mocking api
    const cartItemsData = localStorage.getItem('cartItems')
    let cartItems: CartItem[] =[];
    if(cartItemsData){
      cartItems = JSON.parse(cartItemsData)
    }
    console.log(cartItems)

    const isProductAlreadyInCart = cartItems.find(
      (cartItem)=> cartItem.id === productDetails.id)
    if(isProductAlreadyInCart){
      alert("Product already in the cart")
      return;
    }
    const newItems : CartItem={
      id: productDetails.id,
    imageURL:  productDetails.imageURL,
    name:  productDetails.name,
    type:  productDetails.type,
    price:  productDetails.price,
    quantity:  productDetails.quantity,
    quantityInCart:1,
    }
    if(cartItems.length===0){
      console.log('Cart is Empty')
      
      cartItems =[newItems]
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }else{
      console.log(' cart already have items')
      cartItems=[...cartItems, newItems]
      localStorage.setItem('cartItems', JSON.stringify(cartItems))

    }
  }

  // const obj ={
  //   name: "kshipra",
  //   address :{
  //     city:"jpr",
  //     address:{
  //       houseNo:"993",
  //       floorNo: "3rd"
  //     },
  //   },
  //   hoobies:["music","coding"]

  // }

  return (
    <div className="px-12 py-4">
      {isLoading ?
        <div className=" text-2xl font-semibold">Loading...</div>

        : (
          <div className="flex flex-col gap-4 items-center">
            <SearchProduct updateSearch={setSearchString} />
            <div className="flex gap-4 w-full">
              <div className="hidden lg:block">
                <FilterCard filters={filters} setFilters={setFilters}/>
              </div>

              <div className="flex-1" >
                {
                  finalProductList.length > 0 ?
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-3 " >
                    {
                      finalProductList.map((product) => (
                        <ProductCard key={product.id} productDetails={product}  handleAddToCart ={handleAddToCart}/>))
                    }
                  </div>
                   : (<h1 className="w-full font-serif font-semibold text-xl">No Matching products with this search</h1>)
                }


              </div>
            </div>
          </div>
        )}

    </div>
  )
}

export default productPage
