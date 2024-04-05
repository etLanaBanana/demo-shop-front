import {BASE_URL} from "@/utils/constants";
import axios from "axios";

const CREATE_CATEGORY_URL = `${BASE_URL}/categories/createCategory`
const GET_CATEGORIES_URL = `${BASE_URL}/categories/getCategories`

export const createCategory = async (titleCategory: string) => {
    await axios.post(CREATE_CATEGORY_URL, {titleCategory: titleCategory})
        .catch(error => alert(error.response.message));
}

export const getCategoriesFromServer = async () => {
    const response = await axios.get(GET_CATEGORIES_URL);
    return response.data;
}