import React from "react";
import { getNews } from "./../api/newsApi";

export default (offset) => {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const newData = await getNews(offset);
      setNews(news.concat(newData));
    };

    fetchData();
  }, [offset]);

  return [news];
};
