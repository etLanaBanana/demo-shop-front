"use client"

import React, { useContext } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { routs } from "@/utils/routs";
import { authUser, UserQuery } from "@/api/AuthAndRegistration";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/lib/AuthContext";

const AuthorisationPage = () => {
    const { authedUserInfo, setAuthedUserInfo, setLoggedStatus, loggedStatus } = useContext(AuthContext);
    const router = useRouter();

    if (loggedStatus) router.push("/");

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

    //@ts-ignore
    async function onSubmit(values) {
        let authedUserData;
        authedUserData = await authUser(values)
            .catch(error => alert(error.response.data.message)) as UserQuery;

        setAuthedUserInfo(authedUserData);
        setLoggedStatus(true);


        await router.push("/");
    }

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            login: "",
            password: ""
        },
    });

    return (
        <div className="w-full h-full flex items-center justify-center">
            <img src="/images/fon.png" alt="Фон" className="w-full h-full object-cover" />
            <div className="absolute top-0 right-0 flex flex-col justify-start items-end p-4 space-y-4">
                <Button className='border border-white'>
                    <Link href='/'>
                        Вернуться на главную страницу
                    </Link>
                </Button>
            </div>
            <div className="absolute top-[-10rem]  flex  justify-center items-start space-y-4">
                <div className="flex justify-center items-center h-screen ">
                    <div className="border-4 rounded-lg p-4 w-80 bg-opacity-75 bg-gray-500">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}
                                  className="flex flex-col items-center space-y-8">
                                <div className="border-2 rounded-lg p-4">
                                    <FormField
                                        control={form.control}
                                        name="login"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='text-black'>Логин</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Login..." {...field} className="bg-white" />
                                                </FormControl>
                                                <FormMessage className='text-white' />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="border-2 rounded-lg p-4">
                                    <FormField
                                        control={form.control}
                                        name='password'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='text-black'>Пароль</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Password..." type='password' {...field} className="bg-white" />
                                                </FormControl>
                                                <div>
                                                    <div className="flex items-center space-x-2">
                                                        <Checkbox id="terms" />
                                                        <Label htmlFor="terms">Запомнить меня</Label>
                                                    </div>
                                                </div>
                                                <FormMessage className='text-white' />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col items-center">
                                    <Button type="submit" className="py-2 px-4 rounded btn">
                                        Войти
                                    </Button>
                                    <span className="py-2 px-4 rounded btn">
                                        Еще нет аккаунта?
                                    </span>
                                    <div className="py-2 px-4 rounded btn">
                                        <Button type="submit" className="py-2 px-4 rounded btn">
                                            <Link href={routs.registration}>Зарегистрируйтесь</Link>
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorisationPage;