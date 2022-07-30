function ProductList({ products }) {
  return (
    <>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>
            {product.id} {product.product} {product.price}
          </h2>
        </div>
      ))}
    </>
  );
}

export default ProductList;

export async function getStaticProps() {
  console.log("Generating/regenerating product list");
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  //   console.log(data);

  return {
    props: { products: data },
    revalidate: 30,
  };
}
