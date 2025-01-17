import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  const news = await getAllNews();

  return (
    <>
      <h1>The News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
