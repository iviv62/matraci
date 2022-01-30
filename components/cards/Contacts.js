import React from 'react'
import { phone } from 'react-icons-kit/fa/phone'
import { Icon } from 'react-icons-kit'
import {envelopeO} from 'react-icons-kit/fa/envelopeO'

const Contacts = () => {
    return (

        <div className="card w-full shadow-2xl mx-5 lg:card-side bg-primary text-primary-content my-20">
            <div className="card-body">
                <span className="font-bold text-xl">Имаш още въпроси?</span>
                <span className="font-bold text-md text-base-300">свържи се с консултант</span>
                <div className="flex items-center space-x-y space-x-5 text-md mt-5">
                
                <Icon size={24} icon={phone} className="animate-pulse text-white " />
                <p className="  font-bold md:text-md sm:text-sm ">0895211273</p>
                
            </div>
            <div className="flex items-center space-x-y space-x-5 text-md mt-5">
                
                <Icon size={24} icon={envelopeO} className="animate-pulse text-white " />
                <a href="mailto:your@email.com"><p className="  font-bold  md:text-md sm:text-sm">sales@matraci.org</p></a>
                
            </div>
            </div>
        </div>
    )
}

export default Contacts
