export function Appbar ({label}){
    return <div className="flex justify-between p-3 pb-2 border-b-[3px]">
        <div className="font-bold mt-3 items-center text-xl">
        UN-PAYTM
        </div>
        <div className="flex font-semibold items-center">
            {label}
            <div className="ml-4 bg-slate-400 p-3 pl-4 pr-4 rounded-full">
                U
            </div>
        </div>
       
    </div>
}