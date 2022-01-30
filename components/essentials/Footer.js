import React,{useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {API} from '../../settings/constants'

import { Icon } from 'react-icons-kit'
import {phone} from 'react-icons-kit/fa/phone'
import axios from 'axios';
import LinkIcon from '../Icons/LinkIcon';
import {envelope} from 'react-icons-kit/fa/envelope'

const Footer = () => {
  const[email,setEmail]=useState("")
  const[error,setError] =useState(false)
  const[success,setSuccess] = useState(false)
  const [csrfToken, setscrf] = useState('')
  const sendEmail= ()=>{

    fetch(`${API}csrf/`)
    .then(function (res) {
      setscrf (res.headers.get("X-CSRFToken"))
      console.log(csrfToken);
     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    }).then(function(){
      axios.post(`${API}subscribe/`,  
      {'EMAIL':email},{
       
        headers: {  'Content-Type': 'application/x-www-form-urlencoded','X-CSRFToken': csrfToken,
    }})
      .then(res => {
        
        if(res.data.info){
          setSuccess(true)
          setError(false)
        }else{

        }

      }).catch(err=>{
        setError(true)
        setSuccess(false)
      })
    })
   
   
   

  

  }


  return (
    <div className="flex w-full flex-col">
    <footer className="p-10 footer bg-neutral text-neutral-content">
      <div>
        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>Matraci.org
          <br />
          <span className='flex flex-row justify-between items-center space-x-2'> 
            <Icon size={18} icon={phone}/>
            <a className='text-xl text-white hover:text-accent' href="tel:+359887899004">0887 899 004</a>
          </span>
          
        </p>
     
          <span className='flex flex-row justify-between items-center space-x-2'> 
            <Icon size={18} icon={envelope}/>
            <a className='text-xl text-white hover:text-accent' href="mailto:office@matraci.org">office@matraci.org</a>
          </span>
        <div className="flex ">
          <Image src="/visa.svg" height={50} width={50} />
          <Image src="/Maestro.svg" height={50} width={50} />
          <Image src="/Stripe.svg" height={50} width={50} />
        </div>
      </div>
      <div>
        <span className="footer-title">Информация</span>
        <a className="link link-hover">За нас</a>
        <Link href="/blog">
        <a className="link link-hover">Блог</a>
        </Link>
        <Link href="/faq">
        <a className="link link-hover">Въпроси и отговори</a>
        </Link>
        <a className="link link-hover">Доставка</a>
        <a className="link link-hover">Общи условия</a>
        <a className="link link-hover">Гаранция</a>
        <Link href="/return-replace">
        <a className="link link-hover">Връщане и замяна на продукт</a>
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Бисквитки (Cookies)</a>
        <a className="link link-hover">Защ. на личните данни</a>
        <a className="link link-hover">Платформа за ОРС</a>
        <a className="link link-hover">Информация за КЗП</a>
       
      </div>
      <div>
        <span className="text-lg text-neutral-content uppercase font-bold">Абонирай се за оферти </span>
        <div className="form-control w-80">
          <label className="label">
            
          </label>
          <div className="relative">
            <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Enter your email address" className=" text-neutral w-full pr-16 input input-bordered" />
            <button onClick={()=>sendEmail()} className="absolute top-0 right-0 rounded-l-none btn btn-primary">Subscribe</button>
            {error && (<span className="text-accent">Този Email е невалиден</span>)}
            {success && (<span className="text-success">Успешно се абонира</span>)}
          </div>
        </div>
      </div>
    </footer>
    <footer className="px-10 py-4  footer bg-neutral text-neutral-content ">
  <div className="items-center grid-flow-col">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
      <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg> 
    <p>Matraci.org 
      <br/> © 2022— Всички права запазени.
    </p>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <LinkIcon name={"youtube"} link="#" primaryColor={"white"} secondaryColor={'red'}/>
      <LinkIcon name={"facebook"} link="#" primaryColor={"white"} secondaryColor={'blue'}/>
      <LinkIcon name={"instagram"} link="#" primaryColor={"white"} secondaryColor={'#FF0080'}/>
      
    </div>
  </div>
</footer>
  </div>
  )
}

export default Footer
