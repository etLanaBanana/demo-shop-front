import {ColumnDef} from "@tanstack/react-table";
import {Button} from "@/components/ui/button";
import {DotsHorizontalIcon} from "@radix-ui/react-icons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import React from "react";
import {Category} from "@/app/categories/new/categories.data";
import Link from "next/link";
import {routs} from "@/utils/routs";

export const categoriesSchema: ColumnDef<Category>[] = [
    {
        accessorKey: "id",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    ID ↑↓
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.getValue("id")}</div>,
    },
    {
        accessorKey: "titleCategory",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Название категории ↑↓
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.getValue("titleCategory")}</div>,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({row}) => {
            const payment = row.original

            return (
                <div>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Выберите Действие</DropdownMenuLabel>

                        <DropdownMenuSeparator/>
                        <DropdownMenuItem><Link href={`/products/${row.getValue("id")}`}>Перейти в
                            категорию</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={routs.updateCategory}>Редактировать
                            категорию</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={routs.deleteCategory}>Удалить категорию</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>

            )
        },
    },
]