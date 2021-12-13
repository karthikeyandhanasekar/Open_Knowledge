import React from "react"
import { useForm } from "react-hook-form"
import Input from "./FormField/Input";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useLocation } from "react-router-dom"
import poster from '../assets/images/poster.png'
import { useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';
import * as actioncreators from "../../redux/actioncreators/index";
import { useSelector } from "react-redux";

const JumboTron = () => {
    const location = useLocation();
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const actions = bindActionCreators(actioncreators, dispatch)
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
        reset({
            email: '',
            password: ''
        })
    }
    const onsignin = (data) => {
        actions.adduser(data)
        reset({
            email: '',
            password: ''
        })
    }
    const login = () => <div className="leftpart">

        <form name={"Login"} onSubmit={handleSubmit(onlogin)}>
            <h1>{"Login"}</h1>
            <br />
            <Input control={control} name={"email"} type={"email"} />
            <br />
            <Input control={control} name={"password"} type={"password"} />
            <label>{errors.password?.message}</label>
            <br />
            <div>
                <input type="submit" value={"Login"} />
                <input type="reset" value="Reset" />
            </div>

        </form>
    </div>

    const signin = () => <div className="leftpart">
        <form name={"Signin"} onSubmit={handleSubmit(onsignin)}>
            <h1>{"Signin"}</h1>
            <br />
            <Input control={control} name={"email"} type={"email"} />
            <br />
            <Input control={control} name={"password"} type={"password"} />
            <label>{errors.password?.message}</label>
            <br />
            <div>
                <input type="submit" value={"Signin"} />
                <input type="reset" value="Reset" />
            </div>

        </form>
    </div>

    return (
        <React.Fragment>
            {
                location.pathname === '/' ?
                    <div className="leftpart">
                        <blockquote><q>
                            Show me a family of readers, and I will show you the people who move the world
                        </q>  </blockquote>
                        <p>-- Napoleon Bonaparte</p>
                        <br />
                        <Link to=""><button>Let's Start</button></Link>
                        <br /> <br />
                        <Link to="" className="orlogin" >Or log in to continue</Link>
                    </div>
                    : location.pathname === "/login" ?
                        login() : signin()

            }

            <div className="rightpart">
                <picture>
                    <img src={poster} alt="bibliophile.png" />
                </picture>
            </div>
        </React.Fragment>
    )
}







export default JumboTron