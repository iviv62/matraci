import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Icon } from 'react-icons-kit'
import { chevronDown } from 'react-icons-kit/fa/chevronDown'
import { useReactiveVar } from '@apollo/client';
import { filterValues } from '../settings/cache';

const AccordeonFilter = ({ Title, data, type, FilterType }) => {



    return (
        <Disclosure>
            {({ open }) => (
                <div className='bg-base-200 rounded-md shadow-md'>
                    <Disclosure.Button className="flex justify-between p-3 w-full  text-sm font-medium text-left text-neutral   rounded-lg  ">
                        <span>{Title}</span>
                        <Icon size={15} icon={chevronDown} className={`${open ? 'transform rotate-180 mt-1' : 'mb-2'
                            }  text-neutral  flex justify-center items-center `} />

                    </Disclosure.Button>
                    <Disclosure.Panel unmount={false} className=" text-sm text-gray-500">
                        <div className=" bg-base-200 card bordered">
                            <div className="form-control">
                                {data.map(
                                    (item) => type === "radio" ?
                                        (<FilterRadioField key={item.id} Label={item.size ? item.size : item.name} Name={FilterType} FilterType={FilterType} />) :
                                        (<FilterCheckBoxField key={item.id} Label={item.size ? item.size : item.name} Val={item.id} FilterType={FilterType} />))}
                            </div>
                        </div>
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>


    )
};

const FilterRadioField = ({ Label, FilterType, Name }) => {
    const check = (e) => {
        if (e.target.checked) {

            const isAlreadyPresentParameter= (item)=>item.filterType===FilterType

            if(filterValues().some(isAlreadyPresentParameter)){
                //Find index of specific object using findIndex method.
                let tempArray = filterValues()    
                let objIndex = tempArray.findIndex((obj => obj.filterType == FilterType));
                let tempObj = tempArray[objIndex]
                tempArray[objIndex]={
                    filterType: FilterType,
                    value: [e.target.value,], 
                }
                console.log(tempArray)
                filterValues([...tempArray])

            }else{
                filterValues([...filterValues(),
                    {
                        filterType: FilterType,
                        value: [e.target.value],
                       
                    }
                    ])
            }
            
           console.log(filterValues())
        }else{
            //Find index of specific object using findIndex method.
            let tempArray = filterValues()    
            let objIndex = tempArray.findIndex((obj => obj.filterType == FilterType));
            let tempObj = tempArray[objIndex]
            let newValArray=tempObj.value.filter(item=>item!=e.target.value)

            tempArray[objIndex]={
                filterType: FilterType,
                value: [...newValArray], 
            }
            filterValues([...tempArray])
           
        }

     
    }
    return (
        <div>
            <label className="cursor-pointer label">
                <span className="label-text">{Label}</span>
                <input onClick={(e) => check(e)} type="radio" name={Name}  className="filter-input radio radio-xs" value={Label} />
            </label>
        </div>);

}


const FilterCheckBoxField = ({ Label, FilterType,Val }) => {
    const filterArray = useReactiveVar(filterValues);
    const check = (e) => {
        if (e.target.checked) {

            const isAlreadyPresentParameter= (item)=>item.filterType===FilterType

            if(filterValues().some(isAlreadyPresentParameter)){
                //Find index of specific object using findIndex method.
                let tempArray = filterValues()    
                let objIndex = tempArray.findIndex((obj => obj.filterType == FilterType));
                let tempObj = tempArray[objIndex]
                tempArray[objIndex]={
                    filterType: FilterType,
                    value: [e.target.value,...tempObj.value], 
                }
                console.log(tempArray)
                filterValues([...tempArray])

            }else{
                filterValues([...filterValues(),
                    {
                        filterType: FilterType,
                        value: [e.target.value],
                       
                    }
                    ])
            }
            
           
        }else{
            //Find index of specific object using findIndex method.
            let tempArray = filterValues()    
            let objIndex = tempArray.findIndex((obj => obj.filterType == FilterType));
            let tempObj = tempArray[objIndex]
            let newValArray=tempObj.value.filter(item=>item!=e.target.value)

            tempArray[objIndex]={
                filterType: FilterType,
                value: [...newValArray], 
            }
            filterValues([...tempArray])
            console.log(filterValues())
        }

     
    }
    return (
        <div>
            <label className="cursor-pointer label">
                <span className="label-text">{Label}</span>
                <input type="checkbox" onClick={(e) => check(e)} className=" filter-input checkbox checkbox-xs" value={Val} />
            </label>
        </div>);

}
export default AccordeonFilter;
