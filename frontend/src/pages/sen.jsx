import React, { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Sub_heading";
import { InputBox } from "../components/inputBox";
import { ButtonCustom } from "../components/button";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

export function Send() {
    const [amount, setAmount] = useState(0);
    const [SearchParams] = useSearchParams();


    const id = SearchParams.get("id");
    const name = SearchParams.get("name")

    return <div className="flex justify-center bg-slate-500 h-screen">
        <div className="flex flex-col justify-center  ">
            <div className="rounded-lg bg-white w-80  p-2 h-max px-4">
                <Heading label={'Transfers'} />
                <div className="font-semibold mb-2">{name}</div>
                <div className="font-semibold mb-2">Enter Amount</div>
                <input type="number" placeholder="enter amount" className="border-2 rounded-lg mb-2 p-2" onChange={
                    (e) => {
                        setAmount(e.target.value)
                    }
                } />
                <div className="flex justify-center">
                    <button onClick={() => {
                        axios.post("http://localhost:3000/paytm/v2/transfer", {
                            to: id,
                            amount,
                        }, {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                    }

                    } className=" text-white bg-green-500 font-bold p-3 rounded-2xl mt-1 mb-3">
                        Initialize Transfers
                    </button>
                </div>

            </div>
        </div>
    </div>
}