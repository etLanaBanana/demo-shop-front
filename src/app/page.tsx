"use client"

import React, {useContext} from "react";
import {AuthContext} from "@/lib/AuthContext";
import Header from "@/components/common/Header";
import GalleryImages from "@/components/common/GalleryImages";


const Home = () => {
    const {authedUserInfo, setAuthedUserInfo, setLoggedStatus, loggedStatus} = useContext(AuthContext);

    const handleLogout = () => {
        setAuthedUserInfo(null);
        setLoggedStatus(false);
    };

    return (
        <div><Header loggedStatus={loggedStatus} handleLogout={handleLogout}/>
    <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-4">Добро пожаловать в наш магазин мебели!</h1>
        <p className="text-lg mb-4">У нас Вы найдете широкий выбор мебели для Вашего дома.</p>
        <GalleryImages/>
    </div>
        </div>
)
    ;
};

export default Home;