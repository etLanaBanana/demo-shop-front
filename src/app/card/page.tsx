"use client"

import React, {useContext} from 'react';
import {AuthContext} from "@/lib/AuthContext";
import Header from "@/components/common/Header";

const CartPage = () => {
    const {authedUserInfo, setAuthedUserInfo, setLoggedStatus, loggedStatus} = useContext(AuthContext);
    const handleLogout = () => {
        setAuthedUserInfo(null);
        setLoggedStatus(false);
    };
    return (
        <div>
            <div>
                <Header loggedStatus={loggedStatus} handleLogout={handleLogout}/>
            </div>
            <div>Корзина</div>
        </div>
    );
};

export default CartPage;