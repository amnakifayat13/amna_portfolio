import { FaEnvelope, FaPhone } from "react-icons/fa"
import {contactData} from '../../../Data/data'
import { FaMap } from "react-icons/fa6"
export default function ContactInfo(){
    return(
        <div>
           <div className="flex items-center justify-center space-x-8 mt-8 mb-8">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900
            flex items-center justify-center flex-col">
                <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white"/>
                </div>
                <div>
                    <h1 className="text-lg sm:text-xl text-white font-bold 0">Phone</h1>
                    <h1 className="text-base sm:text-lg text-white text-opacity-70">{contactData.phone}</h1>
                </div>
                </div> 
                <div className="flex items-center justify-center space-x-8 mt-8 mb-8">
            <div className="ml-20 w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900
            flex items-center justify-center flex-col">
                <FaEnvelope className="w-4 h-4 md:w-7 md:h-7 text-white"/>
                </div>
                <div>
                    <h1 className="text-lg sm:text-xl text-white font-bold 0">Email</h1>
                    <h1 className="text-base sm:text-lg text-white text-opacity-70">{contactData.email}</h1>
                </div>
                </div> 
                <div className="flex items-center justify-center space-x-8 mt-8 mb-8">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900
            flex items-center justify-center flex-col">
                <FaMap className="w-4 h-4 md:w-7 md:h-7 text-white"/>
                </div>
                <div>
                    <h1 className="text-lg sm:text-xl text-white font-bold 0">Address</h1>
                    <h1 className="text-base sm:text-lg text-white text-opacity-70">{contactData.address}</h1>
                </div>
                </div> 
        </div>
    )
}