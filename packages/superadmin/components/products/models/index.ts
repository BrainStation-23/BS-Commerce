import { Product } from 'models';

export interface CategoryInterface {
  id?: number | string | undefined;
  value?: string | undefined;
  name?: string | undefined;
  isSelected: boolean | undefined;
  isFeatured: boolean | undefined;
  displayOrder: number | undefined;
}
export interface EditProductInterface {
  product: Product;
  id: string;
}
export interface FormDataInterFace {
  productName: string;
  ShortDescription?: string;
  FullDescription?: string;
  Sku: string;
  OldPrice: number;
  Price: number;
  ProductCost: number;
  showOnHomePage?: boolean;
  includeInTopMenu?: boolean;
  allowToSelectPageSize?: boolean;
  published?: boolean;
  displayOrder?: number;
  isFeatured?: boolean;
  publishDate?: any;
  tags?: Array<string>;
  brands?: Array<string>;
  keywords?: Array<string>;
  metaTitle?: string;
  metaDescription?: string;
  metaFriendlyPageName?: string;
  photosUrl?: string;
  photosID?: string;
  photosTitle?: string;
  displayOrderPhotos?: string | number;
  SelectedCategoryIds?: string | number;
  isFeaturedCategory?: boolean;
  displayOrderCategory?: number;
}
export interface ProductListProps {
  productsList: Product[];
  setProducts: any;
}

export interface ViewProductInterface {
  product: Product;
}

export interface SearchWindowProps {
  setProducts: Function;
}
export interface CategoryCardInterface {
  categoryData: CategoryInterface[];
  product: Product;
}
export interface CategoryFormInterface {
  setCategoryData: Function;
  categoryData: CategoryInterface[];
  setFieldValue: Function;
}
export interface TemplateInteface {
  label?: string;
  isRequired?: boolean;
  fieldID?: string;
  fieldType?: string;
  fieldClass?: string;
  extraClass?: string;
  fieldAs?: string;
  options?: any;
  component?: any;
  placeholder?: string;
  ismulti?: boolean;
}
export interface tagsOption {
  label?: string;
  value?: string;
}
