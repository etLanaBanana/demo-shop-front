"use client"

import React, {useContext} from 'react';
import {AuthContext} from "@/lib/AuthContext";
import Header from "@/components/common/Header";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

import {z} from "zod";
import {createCategory} from "@/api/category/category";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {routs} from "@/utils/routs";

const NewProductPage = () => {
    const {authedUserInfo, setAuthedUserInfo, setLoggedStatus, loggedStatus} = useContext(AuthContext);
    const handleLogout = () => {
        setAuthedUserInfo(null);
        setLoggedStatus(false);
    };

    const formSchema = z.object({
        titleCategory: z.string().min(2, {
            message: "Название категории не может быть меньше 2 символов",
        }).max(50, {
            message: "Название категории не может превышать 50 символов",
        })
    });
    // @ts-ignore
    async function onSubmit(values: z.infer<typeof formSchema>) {
        //     if (!authedUserInfo) {
        //         alert("Чтобы добавить категорию, пожалуйста, авторизуйтесь.");
        //     return;
        // }
        await createCategory(values.titleCategory).then(() => {
            router.push("/categories")
        })
    }

    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            titleCategory: ""
        },
    });

    return (
        <div>
            <div>
                <Header loggedStatus={loggedStatus} handleLogout={handleLogout}/>
            </div>
            <div>
                <div className="absolute top-[-10rem]  flex  justify-center items-center space-y-4">
                    <div className="flex justify-center items-center h-screen ">
                        <div className="border-4 rounded-lg p-4 w-80 bg-opacity-75 bg-gray-500 shadow-xl">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}
                                      className="flex flex-col items-center space-y-8">
                                    <div className="border-2 rounded-lg p-4">
                                        <FormField
                                            control={form.control}
                                            name="titleCategory"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel className='text-black'>Название продукта</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Название продукта..." {...field} className="bg-white"/>
                                                    </FormControl>
                                                    <FormMessage className='text-white'/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    {loggedStatus ? (
                                        <>
                                            <div className="flex flex-col items-center">
                                                <Button type="submit" className="py-2 px-4 rounded btn">
                                                    Добавить продукт
                                                </Button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="outline">Добавить продукт</Button>
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
                                        </>
                                    )}
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProductPage;