import {notFound} from "next/navigation";

import {DUMMY_NEWS} from "@/dummy-news";

export default async function ImagePage({params}) {
  const newsSlug = (await params).slug;
  const newsRecord = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

  if (!newsRecord) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsRecord.image}`} alt={newsRecord.title}/>
    </div>
  );
}
