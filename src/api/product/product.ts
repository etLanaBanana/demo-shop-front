import {BASE_URL} from "@/utils/constants";
import {Category} from "@/api/category/category.types";
import axios, {AxiosResponse} from "axios";
import {GetProductInCategory} from "@/api/product/product.types";

const GET_PRODUCTS_IN_CATEGORY_URL = `${BASE_URL}/products/getProducts`
const CREATE_PRODUCT_URL = `${BASE_URL}/products/addNewProduct`
export type Product = {
    title: string,
    productId: number,
    countryOfOrigin: string,
    categoryId: Category
}
export type CreateProduct = {
    title: string,
    productId: number,
    countryOfOrigin: string,
    categoryId: Category
}

export const getDocumentsInCategory = async (categoryId: number) => {
    return await axios.get(`${GET_PRODUCTS_IN_CATEGORY_URL}/${categoryId}`).then((response: AxiosResponse<GetProductInCategory>) => response.data)
}

export const getDocumentsFromServer = async () => {
    return await axios.get(`${GET_PRODUCTS_IN_CATEGORY_URL}`).then((response: AxiosResponse<Product[]>) => response.data)
}

export const createDocument = async ({
                                         categoryId,
                                         title,
                                         countryOfOrigin,
                                         productId
                                     }: CreateProduct) => {
    return await axios.post(CREATE_PRODUCT_URL,
        {
            categoryId: {
                id: categoryId
            },
            title: title,
            countryOfOrigin: countryOfOrigin,
            productId: productId
        })
}