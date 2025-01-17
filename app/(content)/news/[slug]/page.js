import { notFound } from 'next/navigation';
import Link from 'next/link';

import { DUMMY_NEWS } from "@/dummy-news";

const NewsDetailPage = async ({ params }) => {
  const newsSlug = (await params).slug;
  const newsRecord = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

  if (!newsRecord) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsRecord.slug}/image`}>
          <img src={`/images/news/${newsRecord.image}`} alt={newsRecord.title}/>
        </Link>
        <h1>{newsRecord.title}</h1>
        <time dateTime={newsRecord.date}>{newsRecord.date}</time>
      </header>
      <p>{newsRecord.content}</p>
    </article>
  );
};

export default NewsDetailPage;
