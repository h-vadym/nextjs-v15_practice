import {notFound} from "next/navigation";

import {DUMMY_NEWS} from "@/dummy-news";
import ModalBackground from "@/components/modal-background";

export default async function InterceptedImagePage({params}) {
  const newsSlug = (await params).slug;
  const newsRecord = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);
  if (!newsRecord) {
    notFound();
  }

  return (
    <>
      <ModalBackground />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsRecord.image}`} alt={newsRecord.title}/>
        </div>
      </dialog>
    </>
  );
}
