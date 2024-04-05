import React from "react";
import Link from "next/link";
import { routs } from "@/utils/routs";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger,
    MenubarTrigger
} from "@/components/ui/menubar";

class Header extends React.Component<{ loggedStatus: any, handleLogout: any }> {
    render() {
        let { loggedStatus, handleLogout } = this.props;
        return (
            <div>
            <div className="w-full h-full  bg-gray-200">
                <div className="flex">
                    <div className="absolute top-0 left-0 flex flex-col justify-start items-start p-4 space-y-4 ">

                        <Menubar className="bg-black text-white ">
                            <MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger>Меню</MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarSub>
                                            <MenubarItem><Link href={routs.categories}>Категории</Link><MenubarShortcut>🔎</MenubarShortcut></MenubarItem>
                                            <div className="flex justify-center"><MenubarItem className="flex justify-center">
                                                <Link href={routs.newCategory}>Добавить категорию</Link>
                                            </MenubarItem></div>
                                        </MenubarSub>
                                        <MenubarSub>
                                            <MenubarItem><Link href={routs.product}>Мебель</Link><MenubarShortcut>🔎</MenubarShortcut></MenubarItem>
                                            <MenubarItem>
                                                <Link href={routs.newProduct}>Добавить мебель</Link>
                                                <MenubarShortcut></MenubarShortcut></MenubarItem>
                                        </MenubarSub>
                                    </MenubarContent>
                                    <MenubarMenu>
                                        <MenubarTrigger><Link href={routs.home}>Основная информация</Link></MenubarTrigger>
                                    </MenubarMenu>
                                </MenubarMenu>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                    <div className="text-center">
                        <h1 className="text-xl font-bold text-gray-800 inline-block">Просто мебель</h1>
                    </div>
                </div>
                <div>
                    <div className="absolute top-0 right-0 flex flex-col justify-start items-end p-4 space-y-4">
                        <Menubar className="bg-black text-white">
                            <MenubarMenu>
                                {loggedStatus ? (
                                    <>
                                        <MenubarTrigger>Личный кабинет</MenubarTrigger>
                                        <MenubarContent>
                                            <MenubarItem className="flex items-center justify-end"><Link href={routs.profile}>Профиль</Link></MenubarItem>
                                            <MenubarItem className="flex items-center justify-end"><Link href={routs.card}>Корзина</Link></MenubarItem>
                                            <MenubarItem className="flex items-center justify-end"><Link href={routs.history}>Покупки</Link></MenubarItem>
                                            <MenubarItem className="flex items-center justify-end"
                                                         onClick={handleLogout}>Выход</MenubarItem>
                                            <MenubarSeparator/>
                                        </MenubarContent>
                                    </>
                                ) : (
                                    <>
                                        <MenubarTrigger>Войти</MenubarTrigger>
                                        <MenubarContent>
                                            <MenubarItem className="flex items-center justify-end">
                                                <Link href={routs.authorisation}>Войти</Link>
                                            </MenubarItem>
                                            <MenubarItem className="flex items-center justify-end">
                                                <Link href={routs.registration}>Зарегистрироваться</Link>
                                            </MenubarItem>
                                            <MenubarSeparator/>
                                        </MenubarContent>
                                    </>
                                )}
                            </MenubarMenu>
                        </Menubar>

                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Header;