import React from "react";
import { Appbar } from "../components/appbar";
import { Balance } from "../components/balance";
import { SearchBar } from "../components/searchBar";

export function Dashboard (){
    return <div>
       <Appbar label={'User'}/>
       <Balance balance= {'8000'}/>
       <SearchBar />
    </div>
}