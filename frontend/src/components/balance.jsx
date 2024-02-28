export function Balance({balance}){
    return <div className="p-3">
        <p className="font-semibold"> You have hell lot of a money (our limit is 10k) : <span className="pl-4 font-extrabold">Rs {balance}</span></p>
    </div>
}