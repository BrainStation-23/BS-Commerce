import { Product } from '@bs-commerce/models';

export interface CategoryInterface {
  id?: number | string;
  name?: string | undefined;
  isSelected: boolean | undefined;
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
  manufacturerId?: string | number;
  manufacturerName?: string;
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
  disabled?: boolean;
}
export interface tagsOption {
  label?: string;
  value?: string;
}

export interface manufacturerInfoInterface {
  id?: number | string | undefined;
  name?: string | undefined;
}
export interface manufacturerFormInterface {
  manufacturerData: manufacturerInfoInterface[];
}
