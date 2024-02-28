export function InputBox({label, placeholder, onChange}){
    
    return <div className="pl-2">
        <div className="font-bold pb-2 ">
            {label}
        </div>
        <input onChange={onChange} type="text" placeholder={placeholder} className="border-[2px] mb-4 p-[8px] rounded-lg" />
    </div>
}