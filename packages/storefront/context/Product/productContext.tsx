import * as React from 'react';
import { ProductType, ProductContextType } from '../../@types/product';

export const ProductContext = React.createContext<ProductContextType | []>([]);

const ProductProvider: React.FC<React.ReactNode> = ({ children }) => {
  console.log("Product Context Injected");
  const [products, setProducts] = React.useState<ProductType[]>([
    {
      id: "arandomstring",
      name: "Expensive Product",
      description: "This is a product that is expensive",
      price: 100,
      currency: "USD",
      images: [
        {
          url: "https://picsum.photos/200",
          alt: "Expensive Product",
          priority: 1,
        },
      ],
      options: [
        {
          
          name: "Color",
          values: ["red", "blue", "green"],
        },
        {
          name: "Size",
          values: ["small", "medium", "large"],
        },
      ],
      isAvailable: true,
      isLowInStock: false,
      isBackorder: false,
      isSoldOut: false,
      isOnSale: true,
      isNew: false,
      isGift: false,
      isFreeShipping: false,
      isInStock: true
    },
  ]);
  const saveProduct = (product: ProductType) => {
    setProducts([...products, product]);
    return products;
  };
  const updateProduct = (id: number) => {
    products[id].isAvailable = !products[id].isAvailable;
    setProducts([...products]);
    return products;
  };
  return <ProductContext.Provider value={  { products, saveProduct, updateProduct }  }>{children}</ProductContext.Provider>;
};

export default ProductProvider;