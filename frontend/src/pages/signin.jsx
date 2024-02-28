import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Sub_heading";
import { InputBox } from "../components/inputBox";
import { ButtonCustom } from "../components/button";
import axios from "axios";

export function Signin() {
    const [email, setEmail] =  useState();
    const [password , setpassword] = useState();


    return <div className="flex justify-center bg-slate-500 h-screen">
        <div className="flex flex-col justify-center  ">
            <div className="rounded-lg bg-white w-80  p-2 h-max px-4">
                <Heading label={'Sign In'} />
                <SubHeading label={'enter your Login details'} />
                <InputBox label={'E-mail'} placeholder={'Enter Email'} onChange={
                    (e) => {
                        setEmail(e.target.value)
                    }
                }/>
                <InputBox label={'Password'} placeholder={'enter your password'} onChange={
                    (e) => {
                        setpassword(e.target.value)
                    }
                } />
                <ButtonCustom onClick={
                 async () => {
                       const loginedUser = await axios.post("http://localhost:3000/paytm/v1/login",{
                            email,
                            password
                        });
                        localStorage.setItem("token", loginedUser.data.token )
                    }
                } label={'Sign In'} BottomTxt={'Do not have an account ? '} link={'Signup'} to={'/signup'} />
            </div>
        </div>
    </div>
}