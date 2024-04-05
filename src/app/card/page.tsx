"use client"

import React, {useContext} from 'react';
import {AuthContext} from "@/lib/AuthContext";
import Header from "@/components/common/Header";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell, TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const CartPage = () => {
    const {authedUserInfo, setAuthedUserInfo, setLoggedStatus, loggedStatus} = useContext(AuthContext);
    const handleLogout = () => {
        setAuthedUserInfo(null);
        setLoggedStatus(false);
    };
    return (
        <div className="w-[50rem]">
            <div>
                <Header loggedStatus={loggedStatus} handleLogout={handleLogout}/>
            </div>
            <div>
                <Table className="mt-20">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Товар</TableHead>
                            <TableHead className="text-right">Сумма</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    );
};

export default CartPage;