"use client"

import React, {useContext} from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Header from "@/components/common/Header";
import {AuthContext} from "@/lib/AuthContext";
import Link from "next/link";
import {routs} from "@/utils/routs";

const ProfilePage = () => {
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
            <div className="w-full h-full flex items-center justify-center">
                <div className="border-4 rounded-lg p-4 w-80 bg-opacity-75 bg-gray-500 m-20">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <div>
                            <div>
                                <p>Логин: {authedUserInfo ? authedUserInfo.login : 'Нет информации'}</p>
                                <p>Фамилия: {authedUserInfo ? authedUserInfo.lastName : 'Нет информации'}</p>
                                <p>Имя: {authedUserInfo ? authedUserInfo.firstName : 'Нет информации'}</p>
                                <p>Отчество: {authedUserInfo ? authedUserInfo.secondName : 'Нет информации'}</p>
                                <p>Email: {authedUserInfo ? authedUserInfo.email : 'Нет информации'}</p>
                                    {loggedStatus ? (
                                        <Link href={routs.updateProfile} className="text-yellow-200 hover:underline">Редактировать профиль</Link>
                                    ) : (
                                        <p><Link href={routs.authorisation} className="text-yellow-200 hover:underline">Вам необходимо войти</Link></p>)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;