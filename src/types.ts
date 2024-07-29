export type Product ={
    id:string,
    imageURL: string,
    name:string,
    type: string,
    price:number,
    currency:string,
    color : string,
    gender :string,
    quantity : number
}

export type CartItem ={
    id:string,
    imageURL: string,
    name:string,
    type: string,
    price:number,
    quantity : number,
    quantityInCart : number

}

export type Filters ={
    colors: string[],
    gender: string[],
    price: string[],
    type: string[],
}