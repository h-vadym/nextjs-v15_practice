'use client';

import { useEffect, useState } from 'react';
import NewsList from "@/components/news-list";

const NewsPage = () => {
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch('http://localhost:8080/news');

      if (!response.ok) {
        setError('Failed to fetch news.');
        setLoading(false);
      }

      const loadedNews = await response.json();
      setLoading(false);
      setNews(loadedNews);
    }
    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>The News Page</h1>
      {newsContent}
    </>
  );
};

export default NewsPage;
