import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Icon } from 'react-icons-kit'
import {chevronDown} from 'react-icons-kit/fa/chevronDown'

const Accordeon = ({Title,Content}) => {
    return (
       
        
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between mt-5 w-full px-4 py-2 text-sm font-medium text-left text-primary bg-white rounded-lg hover:bg-secondary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{Title}</span>
                        <Icon size={15} icon={chevronDown} className={`${
                            open ? 'transform rotate-180 mt-2' : 'mb-2'
                          }  text-primary  flex justify-center items-center ` }  />
                          
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                       {Content}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                
            
          )
    
}

export default Accordeon
