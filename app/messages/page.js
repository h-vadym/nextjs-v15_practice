// import { unstable_noStore } from 'next/cache';

import Messages from '@/components/messages';
import { getMessages } from "@/lib/messages";

// export const revalidate = 10; // setup time for caching
// export const dynamic = 'force-dynamic'; // to avoid caching

// -- an example how to work with the cache and the fetch function
// export default async function MessagesPage() {
//   // unstable_noStore() // to avoid caching;
//   // const response = await fetch('http://localhost:8080/messages', { cache: 'no-cache' });
//   // const response = await fetch('http://localhost:8080/messages', { next: { revalidate: 10 } });
//   const response = await fetch('http://localhost:8080/messages');
//   const messages = await response.json();
//
//   if (!messages || messages.length === 0) {
//     return <p>No messages found</p>;
//   }
//
//   return <Messages messages={messages} />;
// }

// -- an example how to work with the cache and a custom data source
export default async function MessagesPage() {
  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
