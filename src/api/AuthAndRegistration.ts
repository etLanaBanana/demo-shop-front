
import axios, {AxiosResponse} from "axios";
import {BASE_URL} from "@/utils/constants";
import {TypeOf} from "zod";

export type RegistrationCredentials = {
    login: string,
    password: string,
    firstName: string,
    secondName: string,
    lastName: string,
    email: string

}

export interface UserQuery {
    login: string;
    firstName: string;
    secondName: string;
    lastName: string;
    email: string;
    password: string;
    cratedAt: Date;
}
interface TimeInfo {
    cratedAt: Date;
    updatedAd: Date;
    deletedAd: Date;
}
export type RegistrationResponse = {
    id: number
}
export type AuthCredentials = {
    login: string,
    password: string
}

const REGISTRATE_USER_URL = `${BASE_URL}/api/users`
const AUTH_USER_URL = `${BASE_URL}/api/auth`


export const registrateUser = async (credentials: RegistrationCredentials) => {
    return await axios
        .post(
            REGISTRATE_USER_URL,
            credentials
        )
        .then(
            (response: AxiosResponse<UserQuery>) => {
                return response.data
            }
        );
}


export const authUser = async (credentials: AuthCredentials): Promise<UserQuery> => {
    return await axios
        .post(
            AUTH_USER_URL,
            credentials
        )
        .then(
            (response: AxiosResponse<UserQuery>) => response.data
        )
}


export const checkExistingUser = async (login: string, email: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/checkUser`, {
            params: { login, email }
        });
        return response.data;
    } catch (error) {
        return null;
    }
}