import axios from "axios";

const CATEGORY_API_BASE_URL = "https://646312614dca1a661353d0ee.mockapi.io/api/Category";

class CategoryService {
  getCategories() {
    console.log("in service category");
    return axios.get(CATEGORY_API_BASE_URL);
  }
}

export default new CategoryService();
