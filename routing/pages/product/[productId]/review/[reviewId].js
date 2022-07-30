import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  console.log(router);

  const { productId, reviewId } = router.query;

  return (
    <h1>
      Review ID - {reviewId} for Product ID: {productId}
    </h1>
  );
}

export default Review;
