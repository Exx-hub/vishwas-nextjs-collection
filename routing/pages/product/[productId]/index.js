import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  // console.log(router);
  const productId = router.query.productId;

  return <h1>Details about Product ID: {productId}</h1>;
}

export default ProductDetails;
