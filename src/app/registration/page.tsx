"use client"

import React, {useContext} from 'react'
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {number, z} from "zod"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Checkbox} from "@/components/ui/checkbox"
import {Label} from "@/components/ui/label"
import Link from "next/link";
import {routs} from "@/utils/routs";
import {checkExistingUser, registrateUser, UserQuery} from "@/api/AuthAndRegistration";
import {AuthContext} from "@/lib/AuthContext";
import {useRouter} from "next/navigation";

export default function Registration() {
    const {authedUserInfo, setAuthedUserInfo, setLoggedStatus, loggedStatus} = useContext(AuthContext);
    const router = useRouter()

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
        password2: z.string().min(3, {
            message: "Пароль должен содержать минимум 3 символа",
        }),
        firstName: z.string().min(2, {
            message: "Имя не может содержать меньше 2 символов",
        }).max(50, {
            message: "Имя не может превышать 50 символов",
        }),
        lastName: z.string().min(2, {
            message: "Фамилия не может содержать меньше 2 символов",
        }).max(50, {
            message: "Фамилия не может превышать 50 символов",
        }),
        secondName: z.string().min(2, {
            message: "Отчество не может содержать меньше 2 символов",
        }).max(50, {
            message: "Отчество не может превышать 50 символов",
        }),
        email: z.string().email().min(5, {
            message: "Почта не может содержать меньше 5 символов",
        }).max(50, {
            message: "Почта не может превышать 50 символов",
        })
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { login, email } = values;
        const existingUser = await checkExistingUser(login, email);
        if (existingUser) {
            alert("Пользователь с таким логином или email уже существует");
            return;
        }

        const authedUserData = await registrateUser(values)
            .catch(error => {
                alert(error.response.data.message);
            }) as UserQuery;



        setAuthedUserInfo(authedUserData);
        setLoggedStatus(true);
    }

    const RegistrationPage = () => {

        const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                login: "",
                password: "",
                password2: "",
                firstName: "",
                secondName: "",
                lastName: "",
                email: ""
            },
        })

        return (
            <div className="w-full h-full flex items-center justify-center">
                <div className="absolute top-0 right-0 flex flex-col justify-start items-end p-4 space-y-4">
                    <Button className='border border-white'>
                        <Link href='/'>
                            Вернуться на главную страницу
                        </Link>
                    </Button>
                </div>
                <div className="absolute top-0  flex  justify-center items-start space-y-4">
                    <div className="flex justify-center items-center h-screen ">
                        <div className="border-4 rounded-lg p-4 w-80 bg-opacity-75 bg-gray-500">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}
                                      className="flex flex-col items-center space-y-8">
                                    <div className=" ">
                                        <FormField
                                            control={form.control}
                                            name="login"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel className='text-black'>Логин</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Login..." {...field} className="bg-white"/>
                                                    </FormControl>
                                                    <FormMessage className='text-white'/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className=" ">
                                        <FormField
                                            control={form.control}
                                            name="lastName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel className='text-black'>Фамилия</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="LastName..." {...field}
                                                               className="bg-white"/>
                                                    </FormControl>
                                                    <FormMessage className='text-white'/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className=" ">
                                        <FormField
                                            control={form.control}
                                            name="firstName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel className='text-black'>Имя</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="FirstName..." {...field}
                                                               className="bg-white"/>
                                                    </FormControl>
                                                    <FormMessage className='text-white'/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className=" ">
                                        <FormField
                                            control={form.control}
                                            name="secondName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel className='text-black'>Отчество</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="SecondName..." {...field}
                                                               className="bg-white"/>
                                                    </FormControl>
                                                    <FormMessage className='text-white'/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className=" ">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel className='text-black'>Почта</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="email..." {...field} className="bg-white"/>
                                                    </FormControl>
                                                    <FormMessage className='text-white'/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className=" ">
                                        <FormField
                                            control={form.control}
                                            name='password'
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel className='text-black'>Пароль</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Password..." type='password' {...field}
                                                               className="bg-white"/>
                                                    </FormControl>
                                                    <FormMessage className='text-white'/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className=" ">
                                        <FormField
                                            control={form.control}
                                            name='password2'
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel className='text-black'>Повторите пароль</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Password..." type='password' {...field}
                                                               className="bg-white"/>
                                                    </FormControl>
                                                    <div>
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="terms"/>
                                                            <Label htmlFor="terms">Запомнить меня</Label>
                                                        </div>
                                                    </div>
                                                    <FormMessage className='text-white'/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Button type="submit" className="py-2 px-4 rounded btn">
                                            Зарегистрироваться
                                        </Button>
                                        <div onClick={() => form.reset()}
                                             className=" cursor-pointer underline">
                                            Очистить форму регистрации
                                        </div>
                                        <span className="py-2 px-4 rounded btn">
                                        Уже есть аккаунт?
                                    </span>
                                        <div className="py-2 px-4 rounded btn">
                                            <Button type="submit" className="py-2 px-4 rounded btn">
                                                <Link href={routs.authorisation}>Войдите</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return <RegistrationPage/>;
}