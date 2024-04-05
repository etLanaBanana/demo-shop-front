"use client"

import React, {useContext} from 'react';
import {AuthContext} from "@/lib/AuthContext";
import Header from "@/components/common/Header";

import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {categoriesSchema} from './new/categories.schema';
import data from "@/app/categories/new/categories.data";
import Link from "next/link";
import {routs} from "@/utils/routs";


const CategoriesPage = () => {
    const {authedUserInfo, setAuthedUserInfo, setLoggedStatus, loggedStatus} = useContext(AuthContext);
    const handleLogout = () => {
        setAuthedUserInfo(null);
        setLoggedStatus(false);
    };
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})


    const handleSortingChange = (newSorting: SortingState) => {
        setSorting(newSorting);
    };
    const handleSortByName = () => {
        setSorting([{ id: 'titleCategory', desc: false }]);
    };

    const handleSortById = () => {
        setSorting([{ id: 'id', desc: false }]);
    };

    const table = useReactTable({
        data: data,
        // @ts-ignore
        columns: categoriesSchema,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })


    // @ts-ignore
    return (
        <div>
            <div className="max-h-max"><Header loggedStatus={loggedStatus} handleLogout={handleLogout}/></div>
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex items-center py-8">
                    <Input
                        placeholder="Поиск категории..."
                        value={(table.getColumn("titleCategory")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("titleCategory")?.setFilterValue(event.target.value)
                        }
                        className="max-h-max"
                    />

                </div>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows && table.getRowModel().rows.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={categoriesSchema.length}
                                        className="h-24 text-center"
                                    >
                                        Нет категорий
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-between py-4">
                    <div className="space-x-2 ml-auto">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                    <div className="m-20 bg-gray-300">
                        <Button>
                            <Link href={routs.newCategory}>Добавить категорию</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

)
}

export default CategoriesPage;