import Image from 'next/image';
import { Icon } from 'react-icons-kit'
import {truck} from 'react-icons-kit/fa/truck'

const InfoSection = () => {
    return (
        <div className="flex container w-full justify-around mt-4 mb-4 flex-wrap py-20 ">


            <div className="flex flex-col items-center max-w-sm">
            <Icon size={48} icon={truck} className=""  />
                <h3>Безплатна доставка до всички населени места в България</h3>
               
            </div>

            <div className="flex flex-col items-center max-w-sm">
            <Icon size={48} icon={truck} className=""  />
            <h3>Бърза и лесна поръчка</h3>
            
        </div>

        <div className="flex flex-col items-center max-w-sm">
        <Icon size={48} icon={truck} className=""  />
        <h3>Гарантирано качество на най-добрите цени</h3>
        
    </div>
                
        </div>
    )
}

export default InfoSection