// import React from "react";
// import {
//     Menubar,
//     MenubarContent,
//     MenubarItem,
//     MenubarMenu,
//     MenubarSeparator, MenubarShortcut, MenubarSub,
//     MenubarTrigger
// } from "@/components/ui/menubar";
// import Link from "next/link";
// import {routs} from "@/utils/routs";
//
// function Header(props: { loggedStatus: boolean, onClick: () => void }) {
//     return <>
//         <div className="absolute top-0 right-0 flex flex-col justify-start items-end p-4 space-y-4">
//             <Menubar className="bg-black text-white">
//                 <MenubarMenu>
//                     {props.loggedStatus ? (
//                         <>
//                             <MenubarTrigger>Личный кабинет</MenubarTrigger>
//                             <MenubarContent>
//                                 <MenubarItem className="flex items-center justify-end">Профиль</MenubarItem>
//                                 <MenubarItem className="flex items-center justify-end">Корзина</MenubarItem>
//                                 <MenubarItem className="flex items-center justify-end"
//                                              onClick={props.onClick}>Выход</MenubarItem>
//                                 <MenubarSeparator/>
//                             </MenubarContent>
//                         </>
//                     ) : (
//                         <>
//                             <MenubarTrigger>Войти</MenubarTrigger>
//                             <MenubarContent>
//                                 <MenubarItem className="flex items-center justify-end">
//                                     <Link href={routs.authorisation}>_____Войти_____</Link>
//                                 </MenubarItem>
//                                 <MenubarItem className="flex items-center justify-end">
//                                     <Link href={routs.registration}>Зарегистрироваться</Link>
//                                 </MenubarItem>
//                                 <MenubarSeparator/>
//                             </MenubarContent>
//                         </>
//                     )}
//                 </MenubarMenu>
//             </Menubar>
//         </div>
//         <div className="absolute top-0 left-0 flex flex-col justify-start items-end p-4 space-y-4">
//             <Menubar className="bg-black text-white">
//                 <MenubarMenu>
//                     <MenubarTrigger>Каталог</MenubarTrigger>
//                     <MenubarContent>
//                         <MenubarSub>
//                             <MenubarItem>
//                                 <Link href={routs.categories}>
//                                     Выбрать категорию товара
//                                 </Link>
//                             </MenubarItem>
//                             {/*<MenubarSubTrigger>Выбрать категорию товара</MenubarSubTrigger>*/}
//                             {/*<MenubarSubContent>*/}
//                             {/*    <MenubarItem>Кровати</MenubarItem>*/}
//                             {/*    <MenubarItem>Диваны</MenubarItem>*/}
//                             {/*    <MenubarItem>Шкафы</MenubarItem>*/}
//                             {/*    <MenubarItem>Столы</MenubarItem>*/}
//                             {/*    <MenubarItem>Стулья</MenubarItem>*/}
//                             {/*</MenubarSubContent>*/}
//                         </MenubarSub>
//                         <MenubarItem>Поиск товара по названию <MenubarShortcut>🔎</MenubarShortcut></MenubarItem>
//                     </MenubarContent>
//                 </MenubarMenu>
//                 <MenubarMenu>
//                     <MenubarTrigger>Наши магазины</MenubarTrigger>
//                 </MenubarMenu>
//                 <MenubarMenu>
//                     <MenubarTrigger>Акции</MenubarTrigger>
//                 </MenubarMenu>
//                 <MenubarMenu>
//                     <MenubarTrigger>Контакты</MenubarTrigger>
//                 </MenubarMenu>
//                 <MenubarMenu>
//                     <MenubarTrigger>Вопросы</MenubarTrigger>
//                 </MenubarMenu>
//             </Menubar>
//         </div>
//     </>;
// }
// export default Header;