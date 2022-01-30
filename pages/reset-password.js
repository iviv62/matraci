import React,{useState} from 'react'

const resetPassword = () => {
    const [email, setEmail] = useState('')
    return (
        <div className="min-h-screen flex flex-col mt-20 items-center  ">
            <h1 className="font-bold font-3xl">ЗАБРАВЕНА ПАРОЛА?</h1>
            <h2 className="font-semibold font-xl">Въведи имейла си и ще ти изпратим линк</h2>
            <div className="flex flex-col md:max-w-md sm:max-w-sm container justify-center bg-gray-100 px-16 py-16 mt-10 ">
    
        <form >
            <div className="relative w-full mb-3">
                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Имейл</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Имейл" />
            </div>
           
           
            <div className="text-center mt-6">
                <button className="btn btn-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="submit" >Изпрати</button>
            </div>
            <div className="text-center mt-6">
            <a class="link link-primary">Назад към вход</a>
            </div>
        </form>
    </div>
        </div>
    )
}

export default resetPassword
