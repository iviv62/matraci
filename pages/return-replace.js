import React from 'react'
import Link from 'next/link'
const returns = () => {
    return (
        <div className="min-h-screen flex flex-col mt-20 items-start container mx-auto px-20">
            <h1 className="font-bold text-2xl mb-4">Отказ или рекламация на продукт</h1>
            <div>Прочетете правата за Отказ от поръчка в <Link href="/"><a className="link link-primary link-hover">Общите условия на електронния магазин.</a></Link></div>

            <div className="w-full flex  flex-wrap p-5 shadow-lg bg-base-200">
                <div className="w-full lg:w-6/12  px-4">
                    <div className="relative w-full mb-3">
                        <label className="block uppercase  text-xs font-bold mb-2" htmlfor="grid-password">
                            Име и Фамилия (*)
                        </label>
                        <input type="text" className="border-0 px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label className="block uppercase  text-xs font-bold mb-2" htmlfor="grid-password">
                            Email (*)
                        </label>
                        <input type="email" className="border-0 px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label className="block uppercase  text-xs font-bold mb-2" htmlfor="tel">
                            Телефон (*)
                        </label>
                        <input type="text" className="border-0 px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label className="block uppercase  text-xs font-bold mb-2" htmlfor="tel">
                            Адрес (*)
                        </label>
                        <input type="text" className="border-0 px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                </div>
                <div className="flex-col w-full lg:w-6/12 px-4 ">
                
                <span className="block w-full uppercase  text-xs font-bold self-start"> Причина за връщане(*)</span>
              
                <div className="form-control items-start space-x-2">
                <label className="cursor-pointer label">
                   
                  <input type="radio" name="opt"  className="radio radio-primary mr-2" value=""/>
                  <span className="block uppercase  text-xs font-bold">Рекламация</span>
                </label>
              </div> 
              <div className="form-control  items-start ">
                <label className="cursor-pointer label">
                   
                  <input type="radio" name="opt"  className="radio radio-primary mr-2" value=""/>
                  <span className="block uppercase  text-xs font-bold">Замяна в 14 дневен тестов период</span>
                </label>
              </div> 
              </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label className="block uppercase  text-xs font-bold mb-2" htmlfor="tel">
                            Номер на поръчка
                        </label>
                        <input type="text" className="border-0 px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label className="block uppercase  text-xs font-bold mb-2" htmlfor="tel">
                            Модел продукт
                        </label>
                        <input type="text" className="border-0 px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label className="block uppercase  text-xs font-bold mb-2" htmlfor="tel">
                            Размер
                        </label>
                        <input type="text" className="border-0 px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                </div>
                <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                        <label className="block uppercase  text-xs font-bold mb-2" htmlfor="tel">
                            Опишете проблема
                        </label>
                        <textarea className="border-0 px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                </div>
                <div>
                <span className="font-bold">Връщане на продукт се приема само в случаите на :</span>
                <ul className="list-disc">
                <li>Снимка на продукта</li>
                <li>Документ за покупка</li>
                <li>Квитанция от пощенски паричен превод (получили сте я от куриера при доставка)</li>
                <li>Гаранционна карта</li>
                Които трябва да изпратите на warranty@matraci.org
                <li>Стоки без следи от употреба</li>
                <li>Запазена опаковка</li>

                </ul>
                
                </div>
                <div className="form-control lg:w-6/12">
                    <label className="cursor-pointer label flex justify-end space-x-2">                        
                        <input type="checkbox"  className="checkbox checkbox-primary" />
                        <span className="block uppercase  text-xs font-bold ">Запознах се и съм съгласен с <Link href="/"><a className="link link-primary link-hover">Общите условия</a></Link></span>
                    </label>
                </div>
                <div className="flex justify-end w-full">
                <button className="btn btn-primary btn-large self-end">Изпрати</button>
                </div>


            </div>

        </div>
    )
}

export default returns
