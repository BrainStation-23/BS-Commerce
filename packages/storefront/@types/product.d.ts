import { ProductContext } from "./../context/Todo/productContext"
// this is type definition for storefront product

export interface ProductType {
  id: string
  name: string
  description: string
  price: number
  currency: string
  images: ProductImageType[]
  options: ProductOptionType[]
  isAvailable: boolean
  isLowInStock: boolean
  isBackorder: boolean
  isSoldOut: boolean
  isOnSale: boolean
  isNew: boolean
  isGift: boolean
  isFreeShipping: boolean
  isInStock: boolean
}

export interface ProductImageType {
  url: string
  alt: string
  priority: number
}

export interface ProductOptionType {
  name: string
  values: string[]
}

export interface ProductContextType {
  products: ProductType[]
  saveProduct: (product: ProductType) => ProductType[]
  updateProduct: (id: number) => ProductType[]
}
