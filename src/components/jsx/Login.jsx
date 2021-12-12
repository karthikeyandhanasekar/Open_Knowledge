import { useForm } from "react-hook-form"
import Input from "./FormField/Input";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import React from "react";

const Login = ({ type }) => {

    const schema = yup.object().shape(
        {

            password: yup.string().min(8, "Minimum 8 Characters Needed").max(16, "Max 16 Characters enough")

        }
    )
    const { control, reset, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema)
        }
    )

    const onlogin = (data) => {
        console.log(data);
        reset({
            email: '',
            password: ''
        })
    }
    const onsignin = (data) => {

        console.log(data);
        reset({
            email: '',
            password: ''
        })
    }
    return (
        <form name={type === "login" ? "Login" : "Signin"} onSubmit={handleSubmit(type === "login" ? onlogin : onsignin)}>
            <h1>{type === "login" ? "Login" : "Signin"}</h1>
            <br />
            <Input control={control} name={"email"} type={"email"} />
            <br />
            <Input control={control} name={"password"} type={"password"} />
            <label>{errors.password?.message}</label>
            <br />
            <div>
                <input type="submit" value={type === "login" ? "Login" : "Signin"} />
                <input type="reset" value="Reset" />
            </div>

        </form>
    )


}

export default Login