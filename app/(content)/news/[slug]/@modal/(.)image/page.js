import { notFound } from "next/navigation";

import ModalBackground from "@/components/modal-background";
import { getNewsItem } from "@/lib/news";

export default async function InterceptedImagePage({params}) {
  const newsSlug = (await params).slug;
  const newsRecord = await getNewsItem(newsSlug);

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
