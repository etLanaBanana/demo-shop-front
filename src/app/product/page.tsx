"use client"

import React, {useContext} from 'react';
import {AuthContext} from "@/lib/AuthContext";
import Header from "@/components/common/Header";
import {Button} from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Card} from '@/components/ui/card';
import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription, SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {routs} from "@/utils/routs";
import {authUser, UserQuery} from "@/api/AuthAndRegistration";

import {useRouter} from "next/navigation";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";

import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

// @ts-ignore
const ProductPage = ({product: product}) => {
    const {authedUserInfo, setAuthedUserInfo, setLoggedStatus, loggedStatus} = useContext(AuthContext);
    const handleLogout = () => {
        setAuthedUserInfo(null);
        setLoggedStatus(false);
    };

    const router = useRouter();

    if (loggedStatus) router.push("/product");

    const formSchema = z.object({
        login: z.string().min(2, {
            message: "Логин не может содержать меньше 2 символов",
        }).max(50, {
            message: "Логин не может превышать 50 символов",
        }),
        password: z.string().min(3, {
            message: "Пароль должен содержать минимум 3 символа",
        }),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            login: "",
            password: ""
        },
    });

    // @ts-ignore
    async function onSubmit(values) {
        console.log("jknkn")
        let authedUserData;

        authedUserData = await authUser(values)
            .catch(error => alert(error.response.data.message)) as UserQuery;

        setAuthedUserInfo(authedUserData);
        setLoggedStatus(true);


    }

    // @ts-ignore
    return (
        <div>
            <div>
                <Header loggedStatus={loggedStatus} handleLogout={handleLogout}/>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Carousel>
                        <CarouselContent>
                            {Array.from({length: 5}).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div
                                                className="border-4 rounded-lg p-4 w-80 bg-opacity-75 bg-gray-500 m-20">
                                        <span>{index + 1}
                                            <div className="product-card">
                                                <img src="/images/товар.jpg" alt="Фото обновляется" className=""/>
                                                <h3>Название: </h3>
                                                <p>Страна:</p>
                                                <p></p>
                                                <p></p>
                                                <p>Цена: P</p>
                                                {loggedStatus ? (
                                                    <Button className="m-2 mx-auto">Добавить в корзину</Button>
                                                ) : (
                                                    <Sheet>
                                                        <SheetTrigger>
                                                            <Button variant="outline">Добавить в корзину</Button>
                                                        </SheetTrigger>
                                                        <SheetContent>
                                                            <SheetHeader>
                                                                <SheetTitle>Edit profile</SheetTitle>
                                                                <SheetDescription>
                                                                    Чтобы добавить товар в корзину необходимо
                                                                    авторизоваться.
                                                                </SheetDescription>
                                                            </SheetHeader>

                                                            <div className="grid gap-4 py-4">
                                                                <div className="grid items-center gap-4">
                                                                    <FormField control={form.control}
                                                                               name="login"
                                                                               render={({field}) => (
                                                                                   <FormItem><FormLabel htmlFor="login"
                                                                                                        className="text-right">Логин</FormLabel>
                                                                                       <FormControl>
                                                                                           <Input id="login"
                                                                                                  placeholder="Login..." {...field}
                                                                                                  className="col-span-3"/>
                                                                                       </FormControl>
                                                                                       <FormMessage
                                                                                           className='text-white'/>
                                                                                   </FormItem>
                                                                               )}
                                                                    />
                                                                </div>
                                                                <div className="grid  items-center gap-4 ">
                                                                    <FormField control={form.control}
                                                                               name='password'
                                                                               render={({field}) => (
                                                                                   <FormItem>
                                                                                       <FormLabel htmlFor="password" className="text-black">
                                                                                           Пароль
                                                                                       </FormLabel>
                                                                                       <FormControl>
                                                                                           <Input id="password"
                                                                                                  placeholder="password..."
                                                                                                  type='password'
                                                                                                  className="col-span-3"/>
                                                                                       </FormControl>
                                                                                       <FormMessage
                                                                                           className='text-white'/>
                                                                                   </FormItem>
                                                                               )}/>
                                                                </div>
                                                            </div>
                                                            <SheetFooter>
                                                                <SheetClose>
                                                                    <div>
                                                                        <div className="flex justify-end">
                                                                            <Button type="submit">Войти</Button>
                                                                        </div>
                                                                        <div className="flex justify-end">
                                                                            <div>Еще
                                                                                нет
                                                                                аккаунта?
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-end">
                                                                            <Button type="submit">
                                                                                <Link
                                                                                    href={routs.registration}>Зарегистрируйтесь</Link>
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                </SheetClose>
                                                            </SheetFooter>

                                                        </SheetContent>
                                                        <Dialog>
                                                            <DialogTrigger>
                                                                <div>
                                                                    <Button variant="outline"
                                                                             className="m-2">Пока жми
                                                                    сюда</Button>
                                                                </div>
                                                            </DialogTrigger>
                                                            <DialogContent className="sm:max-w-[425px] bg-gray-500">
                                                                <DialogHeader>
                                                                    <DialogTitle>Чтобы добавить категорию необходимо
                                                                        <div className="m-4"><Link href={routs.authorisation}
                                                                                                   className="text-yellow-400 hover:underline"> ВОЙТИ   </Link>
                                                                            или <Link href={routs.authorisation}
                                                                                      className="text-yellow-400 hover:underline">   ЗАРЕГИСТРИРОВАТЬСЯ </Link>
                                                                        </div>
                                                                    </DialogTitle>

                                                                </DialogHeader>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </Sheet>
                                                )}
                                            </div>
                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            // onClick={() => table.previousPage()}
                            // disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            // onClick={() => table.nextPage()}
                            // disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default ProductPage;