"use client"

import React, { useContext } from "react";
import Link from "next/link";
import { routs } from "@/utils/routs";
import { AuthContext } from "@/lib/AuthContext";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";

const Home = () => {
    const { authedUserInfo, setAuthedUserInfo, setLoggedStatus, loggedStatus } = useContext(AuthContext);

    const handleLogout = () => {

        setAuthedUserInfo(null);
        setLoggedStatus(false);
    };

    return (
        <div className="w-full h-full flex items-center justify-center">
            <img src="/images/fon.png" alt="Фон" className="w-full h-full object-cover" />
            <div className="absolute top-0 right-0 flex flex-col justify-start items-end p-4 space-y-4">
                <Menubar className="bg-black text-white">
                    <MenubarMenu>
                        {loggedStatus ? (
                            <>
                                <MenubarTrigger>Личный кабинет</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem className="flex items-center justify-end">Профиль</MenubarItem>
                                    <MenubarItem className="flex items-center justify-end">Корзина</MenubarItem>
                                    <MenubarItem className="flex items-center justify-end" onClick={handleLogout}>Выход</MenubarItem>
                                    <MenubarSeparator />
                                </MenubarContent>
                            </>
                        ) : (
                            <>
                                <MenubarTrigger>Войти</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem className="flex items-center justify-end">
                                        <Link href={routs.authorisation}>_____Войти_____</Link>
                                    </MenubarItem>
                                    <MenubarItem className="flex items-center justify-end">
                                        <Link href={routs.registration}>Зарегистрироваться</Link>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                </MenubarContent>
                            </>
                        )}
                    </MenubarMenu>
                </Menubar>
            </div>
            <div className="absolute top-0 left-0 flex flex-col justify-start items-end p-4 space-y-4">
                <Menubar className="bg-black text-white">
                    <MenubarMenu>
                        <MenubarTrigger>Каталог</MenubarTrigger>
                        <MenubarContent>
                            <MenubarSub>
                                <MenubarSubTrigger>Выбрать категорию товара</MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem>Кровати</MenubarItem>
                                    <MenubarItem>Диваны</MenubarItem>
                                    <MenubarItem>Шкафы</MenubarItem>
                                    <MenubarItem>Столы</MenubarItem>
                                    <MenubarItem>Стулья</MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>
                            <MenubarItem>Поиск товара по названию <MenubarShortcut>🔎</MenubarShortcut></MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Наши магазины</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Акции</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Контакты</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Вопросы</MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
    );
};

export default Home;