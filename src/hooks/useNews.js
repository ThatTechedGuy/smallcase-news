import React, { useContext } from "react";
import {Context as ViewContext} from './../context/ViewContext';

export default (offset) => {
  const {state: {news, viewType, error}, fetchNews} = useContext(ViewContext)
  /**
   * INPUT: Current user offset state. As soon as the user scrolls through 20 items, the offset changes.
   */
  React.useEffect(() => {
    fetchNews(offset);
  }, [offset]);

  return [news, viewType, error];
};
