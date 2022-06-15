import { NextPage } from "next";
import { useRouter } from "next/router";
import EditProduct from "../../../components/products/editProductDetails";

const sampleData ={
  productName: "name",
  ShortDescription: "ShortDescription",
  Sku: "Sku",
  SelectedCategoryIds: 1,
  OldPrice: 400,
  Price: 456,
  ProductCost: 164,
  IsTaxExempt: false,
  SelectedDiscountIds: 1,
  TaxCategoryId: 2,
  ManageInventoryMethodId: 1,
  OrderMinimumQuantity: 1,
  OrderMaximumQuantity: 999,
  AllowedQuantities: "AllowedQuantities",
  NotReturnable: true,
  IsShipEnabled: false,
  Weight: 20,
  Length: 40,
  Width: 30,
  Height: 50,
}

const LogDetailPage: NextPage = () => {
    const router = useRouter()
    const { id } = router.query;
    const { isReady  } = router.query;

    return (
        <div className="bg-light">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h1>{id}</h1>

          <EditProduct product={sampleData} />
          
        </main>
      </div>
    )
}

export default LogDetailPage;