import {Category} from "@/api/category/category.types";

export type GetProductInCategory = {
    categoryId: number,
    products: Product[]
}

export type Product = {
    title: string,
        productId: number,
        countryOfOrigin: string,
        categoryId: Category
}