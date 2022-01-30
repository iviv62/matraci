import React ,{useEffect}from 'react'
import ProductPageSwiper from '../../components/Swipers/ProductPageSwiper'
import { check } from 'react-icons-kit/fa/check'
import { Icon } from 'react-icons-kit'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { chevronDown } from 'react-icons-kit/fa/chevronDown'
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart'
import { Tab } from '@headlessui/react'
import { gift } from 'react-icons-kit/fa/gift'
import { API } from '../../settings/constants'
import { useReactiveVar } from '@apollo/client';
import { selectFieldProductPage } from '../../settings/cache';



const product = ({product}) => {

    const [selected, setSelected] = useState(product)
    let selectField = useReactiveVar(selectFieldProductPage)
    
    useEffect(() => {
  
        setSelected(selectFieldProductPage())
     
    }, [selectField]);
    
    
    return (
        <div>
            <h1 className="font-bold  bg-base-200 text-3xl py-5 px-5 ">{product.title}</h1>

            <div className="container mx-auto min-h-screen justify-start flex flex-col h-full">


                <div className="grid mx-auto w-full py-20  md:grid-cols-2 sm:grid-cols-1">
                    
                    <div class=" indicator w-full">
                        <div class="indicator-item indicator-start">
                            {product.reduction&&(<div className=" relative top-10 left-10  z-10 bg-accent text-white rounded-full h-16 w-16">
                                <div className="flex flex-col h-full  items-center justify-center font-bold">
                                    <span>{`-${product.reduction}%`}</span>
                                </div>
                            </div>
                            )}


                        </div>
                        
                        {product.gift && (<div class="indicator-item indicator-bottom indicator-start   ">
                        <div data-tip="+ подарък" class="tooltip tooltip-bottom  z-10">    
                            <div className="relative bottom-12 left-5 ">
                                <Icon size={40} icon={gift} className="text-black animate-pulse z-10 " />
                            </div>
                            </div>
                        </div>
                        )}
                        <ProductPageSwiper data={product.product_images}  />
                    </div>


                    <div className="flex flex-col flex-grow w-full  xs:py-2 md:py-0">
                        <div className="flex flex-row space-x-2 divide-x divide-black w-full items-center">


                            <div className="flex flex-col w-full items-center">
                                <div className="flex flex-row space-x-5 ">
                                    <span> Цена: </span>

                                    <span className="font-bold text-md line-through text-base-300 ">{selected.without_discount_price} лв.</span>
                                </div>


                                <span className="font-bold text-3xl text-accent">{selected.final_price} лв.</span>
                            </div>
                            <div className="flex flex-col w-full  px-5">
                                <div>
                                    <Icon size={18} className="text-[#72FF13]  " icon={check} />
                                    <span className="text-sm">Право на връщане до 14 дни</span>
                                </div>
                                <div>
                                    <Icon size={18} className="text-[#72FF13]" icon={check} />
                                    <span className="text-sm">Право на връщане до 14 дни</span>
                                </div>
                                <div>
                                    <Icon size={18} className="text-[#72FF13]" icon={check} />
                                    <span className="text-sm">Право на връщане до 14 дни</span>
                                </div>
                            </div>


                        </div>
                        {/*select*/}
                        <div className="flex flex-col w-full items-center sm:px-0 md:px-20">
                            <SelectField data={product.sizes} />
                            <div className="btn btn-primary btn-large w-full mt-3 sm:text-sm md:text-md ">Поръчай за 60 секунди</div>
                            <div className="btn btn-outline btn-large w-full mt-3 space-x-5 xs:text-xs sm:text-sx md:text-md ">
                                <Icon size={18} icon={shoppingCart} />
                                <div>Добави в количка</div>
                            </div>
                        </div>
                    </div>
                </div>
                <MyTabs />
            </div>
        </div>
    )
}

export default product


function SelectField({data}) {
    
    const [selected, setSelected] = useState(data[0])
    let selectField = useReactiveVar(selectFieldProductPage)
    
    useEffect(() => {
  
    selectFieldProductPage(selected)
     
    }, [selected]);

   
  
    return (
        <div className="w-full pt-5 ">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full py-4 pl-3 pr-10 text-left bg-white border-2 rounded-lg  cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{selected.size.size}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <Icon
                                icon={chevronDown}
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {data.map((item, sizeIdx) => (
                                <Listbox.Option
                                    key={sizeIdx}
                                    className={({ active }) =>
                                        `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                            cursor-default select-none relative py-2 pl-10 pr-4`
                                    }
                                    value={item}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`${selected ? 'font-medium' : 'font-normal'
                                                    } block truncate`}
                                            >
                                                {item.size.size} <span className="text-base-300">{item.final_price}лв.</span>
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`${active ? 'text-amber-600' : 'text-amber-600'
                                                        }
                                  absolute inset-y-0 left-0 flex items-center pl-3`}
                                                >
                                                    <Icon icon={check} className="w-5 h-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function MyTabs() {
    let tabNames = ["Описание", "Характеристики", "Условия за доставка и връщане"]




    return (
        <div className=" flex flex-col text-center mx-auto   px-2 py-10 sm:px-0">
            <Tab.Group>
                <Tab.List className=" p-1 space-x-1    bg-blue-900/20 rounded-xl">
                    {tabNames.map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    ' px-10 py-2.5 text-sm leading-5 font-medium text-primary rounded-lg',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary ring-white ring-opacity-60',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-white hover:bg-white/[0.12] hover:text-primary'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">

                    <Tab.Panel

                        className={classNames(
                            'bg-white rounded-xl p-3',
                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-primary w-full ring-white ring-opacity-60'
                        )}>
                        <div className="container ">Матракът се предлага с подарък 1 бр. луксозна анатомична възглавница от мемори пяна с дамаска със сребърни нишки за размерите до 120/200 см и 2 бр. за по-големите размери.


                            Матрак Дийп Слийп Комфорт Флекс е уникален двулицев модел, предоставящ оптималното количество комфорт на потребителя. Моделът е част от лимитирана серия и се предлага в няколко размера. Сърцевината му предоставя на тялото пълно удобство, подкрепяйки го във всички зони. Ядрото на Deep Sleep Comfort Flex е съставено от - SD пяна, която от двете страни е подкрепена с мека полиуретанова пяна. При изработката на калъфа са използвани първокачествени материали, спомагащи бързата релаксация на тялото и спокойния сън. Той е обработен антибактериално и антиакарно, така че да бъде подходящ и за хора с различни алергии. Матракът е специално изработен за онези, които ценят съня си и държат на качеството вложено в детайлите.

                            Преимущества - матрак Deep Sleep Comfort Flex:

                            Сърцевина от SD-твърда пяна
                            Два слоя мека полиуретанова пяна - от двете страни
                            Висококачествен текстил на калъфа
                            Обработка на калъфа - антибактериално, антиакарно
                            Височина 21 см.</div>
                    </Tab.Panel>


                    <Tab.Panel>
                        <div className="overflow-x-auto">
                            <table className="table w-full table-zebra">
                                <thead>
                                    <tr>
                                        <th>Характеристики</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Твърдост</th>
                                        <td>средно твърд</td>

                                    </tr>
                                    <tr>
                                        <th>Височина</th>
                                        <td>120</td>

                                    </tr>
                                    <tr>
                                        <th>ДЕМО</th>
                                        <td>ДЕМО</td>

                                    </tr>
                                    <tr>
                                        <th>демо</th>
                                        <td>демо</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Tab.Panel>


                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export const getStaticPaths = async ()=>{
    let res  = await fetch(`${API}products/`)
    const data = await res.json();
    
    
   
    const paths = data.results.map((product)=>{
        return{
            params:{
                id: product.id,
                slug:product.slug,
                
            }
            
        }
    })

    return{
        paths,
        fallback:false,
    }
}

export const getStaticProps = async (context) => {
    const slug = context.params.slug
    const res = await fetch(`${API}products/`+slug)
    const data = await res.json()
    return{
        props:{product:data}
        ,revalidate: 60
    }
   
}