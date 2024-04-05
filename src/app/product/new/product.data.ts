import {Category} from "@/api/category/category.types";
import CategoriesData from "@/app/categories/new/categories.data";
import CategoriesPage from "@/app/categories/page";
import categoriesData from "@/app/categories/new/categories.data";

export type Product = {
    title: string,
    productId: number,
    countryOfOrigin: string,
    categoryId: Category[]
}
let data: Product[];

// @ts-ignore
data = [
    {
        title: " ",
        productId: 1,
        countryOfOrigin: "",
        categoryId: 1
    },
    {
        title: " ",
        productId: 1,
        countryOfOrigin: "",
        categoryId: 1
    }
];