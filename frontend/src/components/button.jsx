import { Link } from "react-router-dom"

export function ButtonCustom ({label , BottomTxt , link, to, onClick}){
    return <div className="flex flex-col justify-center">
        <button onClick={onClick} className="text-white bg-black text-center font-bold p-3 pl-[100px] pr-[100px] rounded-2xl mt-1 mb-3">
            {label}
        </button>
        <p className="text-center font-medium">{BottomTxt}<Link to = {to}>
          {link}
        </Link>
        </p>
    </div>
}