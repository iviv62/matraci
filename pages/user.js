import React from 'react'
import {useState,useEffect} from 'react';
import {API} from "../settings/constants";
import { useRouter } from 'next/router';


const user = () => {
    const [active, setActive] = useState(true)
    return (
        <div className="min-h-screen flex flex-col mt-20 items-center  ">
            <div className="flex flex-row">
                <div className="tabs">
                    <button onClick={() => setActive(true)} className={`tab tab-bordered md:text-2xl xs:text-sm font-bold  hover:text-primary ${active && "tab-active"} `}>Вход</button>
                    <button onClick={() => setActive(false)} className={`tab tab-bordered md:text-2xl xs:text-sm font-bold  hover:text-primary ${!active && "tab-active"}`}>Регистрация</button>
                </div>
            </div>
            {active ? (<Login />) : (<Register />)}

        </div>
    )
}

export default user

const Login = () => {
    const [csrfToken, setscrf] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const router = useRouter()
    //Get and Set csrf Token
    useEffect(() => {
        fetch(`${API}csrf/`, {
          credentials: "include",
        })
        .then((res) => {
          let csrfToken = res.headers.get("X-CSRFToken")
          setscrf(csrfToken);
          
        })
        .catch((err)=>{
          console.log(err)
        })
      }, [])


      function handleSubmit(e) {
        e.preventDefault();
        fetch(`${API}login/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
          },
          credentials: "include",
          body: JSON.stringify({email: email, password: password}),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Connecting problem');
          }
        })
        .then((data) => {
          console.log(data);
          //save token to local storage
         
           router.push('/profile');
        })
        .catch((err) => {
          console.log(err);
          setError("Username or password Incorrect");
        });
        
      }

    return (
        <div className="flex flex-col md:max-w-md sm:max-w-sm container justify-center bg-base-100 px-16 py-16 mt-10 ">
    
        <form >
            <div className="relative w-full mb-3">
                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Имейл</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Имейл" />
            </div>
            <div className="relative w-full mb-3">
                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Парола</label>
                <input onChange={(e)=>setPassword(e.target.value)}  type="password" name="password" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Парола" />
            </div>
            <div>
                <label className="inline-flex items-center cursor-pointer">
                    <input id="customCheckLogin" type="checkbox" className="form-checkbox text-gray-800 ml-1 w-5 h-5" /><span className="ml-2 text-sm font-semibold text-gray-700">Запомни ме</span></label>
            </div>
            {error && (<span className='text-red'>{error}</span>)}
            <div className="text-center mt-6">
                <button onClick={(e)=>handleSubmit(e)} className="btn btn-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="submit" >Вход</button>
            </div>
            <div className="text-center mt-6">
            <a class="link link-primary">Забравена парола?</a>
            </div>
        </form>
    </div>
    )
}

const Register = () => {
    return (
        <div className="flex flex-col md:max-w-md sm:max-w-sm container mt-10  justify-center bg-gray-100 px-16 py-16 ">
                       
                        <form>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Имейл</label>
                                <input type="email" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Имейл" />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Парола</label>
                                <input type="password" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Парола" />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Потвърди Парола</label>
                                <input type="password" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Потвърди Парола" />
                            </div>
                           
                            
                            <div className="text-center mt-6">
                                <button className="btn btn-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="button" >Регистрация</button>
                            </div>
                        </form>
                    </div>
    )
}