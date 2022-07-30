import { useRouter } from "next/router";

function NewsArticleList({ articles }) {
  const router = useRouter();
  return (
    <>
      <h1>News Article List</h1>
      {articles.map((article) => {
        return (
          <div
            key={article.id}
            onClick={() => router.push(`/news/${article.category}`)}
          >
            <h2>
              {article.id} - {article.title} | {article.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default NewsArticleList;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  console.log("Pre-rendering NewsArticleList");

  return {
    props: {
      articles: data,
    },
  };
};
