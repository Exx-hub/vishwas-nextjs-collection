import { useRouter } from "next/router";

function ProductItem({ product }) {
  //   console.log(product);

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {product.id} {product.product}
      </h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </>
  );
}

export default ProductItem;

// export async function getStaticPaths() {
//   const response = await fetch("http://localhost:4000/products");
//   const data = await response.json();

//   const paths = data.map((item) => {
//     return {
//       params: { productId: item.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// }

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(`Regenerating ${params.productId}`);
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  return {
    props: { product: data },
    revalidate: 10,
  };
}
