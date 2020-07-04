import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.smallcase.com/news",
});

/*   According to the domain rules, 20 items need to be fetched everytime.
 **  Manipulate the constant to see the changes.
 *  Input: OFFSET -> No.of times the user scrolled to the bottom of the items.
 */

export const getNews = async (offset) => {
  try {
    const response = await instance.get("/getNews", { params: { count: 20, offset: offset * 20 } });
    const { data } = response.data;
    const requiredData = data.map((item) => {
      const { _id, headline, summary, createdAt, imageUrl } = item;
      return { _id, headline, summary, createdAt, imageUrl };
    });
    console.log('ITEMS length:' , requiredData.length, 'OFFSET:', offset);
    return requiredData;
  } catch (e) {
    throw Error("Something went wrong");
  }
};

export default instance;
