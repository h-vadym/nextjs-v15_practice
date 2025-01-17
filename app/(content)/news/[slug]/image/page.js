import {notFound} from "next/navigation";

import { getNewsItem } from "@/lib/news";

export default async function ImagePage({params}) {
  const newsSlug = (await params).slug;
  const newsRecord = await getNewsItem(newsSlug);

  if (!newsRecord) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsRecord.image}`} alt={newsRecord.title}/>
    </div>
  );
}
