"use client"

import React, {useContext} from 'react';
import {AuthContext} from "@/lib/AuthContext";
// @ts-ignore
import Header from "@/components/common/Header";
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";

const HistoryPage = () => {
    const {authedUserInfo, setAuthedUserInfo, setLoggedStatus, loggedStatus} = useContext(AuthContext);
    const handleLogout = () => {
        setAuthedUserInfo(null);
        setLoggedStatus(false);
    };
    // @ts-ignore
    return (
        <div>
            <div>
                <Header loggedStatus={loggedStatus} handleLogout={handleLogout}/>
            </div>
            <div className="w-[50rem]">
                <Table className="mt-20">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Дата покупки</TableHead>
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
            <div>История</div>
        </div>
    );
};

export default HistoryPage;