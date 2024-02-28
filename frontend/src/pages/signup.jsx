import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Sub_heading";
import { InputBox } from "../components/inputBox";
import { ButtonCustom } from "../components/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup (){
  const [firstName , setfirstName] = useState("")
  const [lastName , setlastName] = useState("")
  const [email , setemail] = useState("")
  const [password , setpassword] = useState("")
  


    return <div className="flex justify-center bg-slate-500 h-screen">
     <div className="flex flex-col justify-center  ">
         <div className="rounded-lg bg-white w-80  p-2 h-max px-4">
         <Heading  label={'Sign Up'} />
        <SubHeading label={'enter your details to create an account'}  />
        <InputBox onChange={(e)=> {
            setfirstName(e.target.value)
        }} label= {'First Name'} placeholder={'Enter first Name'}  />


        <InputBox onChange={(e) => { 
                setlastName(e.target.value)   
        }} label= {'Last Name'} placeholder={'Enter Last Name'}  />


        <InputBox onChange={(e)=> {
            setemail(e.target.value)
        }} label= {'E-mail'} placeholder={'Enter Email'}  />


        <InputBox onChange={(e)=> {
            setpassword(e.target.value)
        }} label= {'Password'} placeholder={'create a strong password'}  />
       
       
        <ButtonCustom onClick={async () => {
        
        const response = await axios.post("http://localhost:3000/paytm/v1/signup",{
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : password
          });
          localStorage.setItem("token", response.data.token);
          
        }} label={'Sign Up'} BottomTxt={'Already have an account ? '} link={'Login'} to={'/signin'}/>



        </div>
       </div> 
    </div>
}