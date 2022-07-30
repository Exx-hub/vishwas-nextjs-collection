function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>Category: {category.toUpperCase()}</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} - {article.title} | {article.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default ArticleListByCategory;

export const getServerSideProps = async (context) => {
  const { params, query, req, res } = context;
  const { category } = params;

  console.log(query);
  //   console.log(req.headers.cookie);
  //   res.setHeader("Set-Cookie", ["name=Alvin"]);

  console.log(`Pre-rendering ArticleListByCategory ${category}`);

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
};
