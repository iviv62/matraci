import React,{useState,useEffect} from 'react'
import { Icon } from 'react-icons-kit'
import {trash} from 'react-icons-kit/fa/trash'
import {API} from '../settings/constants'
import { useRouter } from 'next/router';
import {user} from '../settings/cache';
import {useReactiveVar} from '@apollo/client';

const profile = () => {

  
  
 let userInfo = user();
 
console.log(userInfo);
    return (
      <div>
      {(<div className="min-h-screen flex flex-col mt-20 items-center  ">
      <div class="w-full lg:w-8/12 px-4 mx-auto mt-6 ">
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
  <div class="rounded-t bg-base-200 mb-0 px-6 py-6">
    <div class="text-center flex justify-between">
      <h6 class="text-xl font-bold">
        Моят профил
      </h6>
      <label htmlFor="delete-account-modal" className="btn btn-accent">
          Изтрий профил
          <Icon size={26} icon={trash} />
          </label>
    </div>
  </div>
  <div class="flex-auto px-4 lg:px-10 py-10 pt-0 bg-base-200">
    
      <h6 class=" text-sm mt-3 mb-6 font-bold uppercase">
        Лична Информация
      </h6>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label class="block uppercase  text-xs font-bold mb-2" htmlFor="grid-password">
              Име
            </label>
            <input value={userInfo?userInfo.first_name:""} type="text" class="border-0 px-3 py-3   bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label class="block uppercase  text-xs font-bold mb-2" htmlFor="grid-password">
              Фамилия
            </label>
            <input value={userInfo?userInfo.last_name:""} type="text" class="border-0 px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
          </div>
        </div>
      </div>

      <hr class="mt-6 border-b-1 "/>

      <h6 class=" text-sm mt-3 mb-6 font-bold uppercase">
        Контактна информация
      </h6>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-12/12 px-4">
          <div class="relative w-full mb-3">
            <label class="block uppercase  text-xs font-bold mb-2" htmlFor="grid-password">
              Адрес
            </label>
            <input value={userInfo?userInfo.address:""} type="text" class="border-0 px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
          </div>
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <div class="relative w-full mb-3">
            <label class="block uppercase  text-xs font-bold mb-2" htmlFor="grid-password">
              Населено място
            </label>
            <input value={userInfo?userInfo.last_name:""} type="email" class="border-0 px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
          </div>
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <div class="relative w-full mb-3">
            <label class="block uppercase  text-xs font-bold mb-2" htmlFor="grid-password">
              Пощенски код
            </label>
            <input value={userInfo?userInfo.postal_code:""} type="text" class="border-0 px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
          </div>
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <div class="relative w-full mb-3">
            <label class="block uppercase  text-xs font-bold mb-2" htmlFor="grid-password">
            Телефонен номер
            </label>
            <input value={userInfo?userInfo.phone:""} type="text" class="border-0 px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-10 justify-end">
      <button className="btn btn-primary">Запази</button>
      </div>
      
  </div>
</div>
      </div>
      <input type="checkbox" id="delete-account-modal" className="modal-toggle"/> 
<div className="modal">
<div className="modal-box">
  <p>Сигурни ли сте че искате да изтриете вашия профил?</p> 
  <div className="modal-action">
    <label htmlFor="delete-account-modal" className="btn btn-primary">Изтрий</label> 
    <label htmlFor="delete-account-modal" className="btn">Затвори</label>
  </div>
</div>
</div>
      </div>)}
        </div>
    )
}

export default profile
