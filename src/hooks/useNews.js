import React from "react";
import { getNews } from "./../api/newsApi";

export default (offset) => {
  const [news, setNews] = React.useState([]);
  /**
   * INPUT: Current user offset state. As soon as the user scrolls through 20 items, the offset changes.
   */
  React.useEffect(() => {
    const fetchData = async () => {
      const newData = await getNews(offset);
      setNews(news.concat(newData));
    };

    fetchData();
  }, [offset]);

  return [news];
};
