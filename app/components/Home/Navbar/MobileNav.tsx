import { navLinks } from "../../../../constant/constant";
import Link from "next/link"
import { CgClose } from "react-icons/cg"
// props type

type Props = {
    showNav:boolean;
    closeNav :()=> void

}

export default function MobileNav({closeNav,showNav} :Props){

    const navOpen = showNav? "translate-x-0" : "translate-x-[-100%]";
    return(
        <div>
            {/* Overlay */}
            <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}>
                {/* navlinks */}
                <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000] `}>
                 
                        
                    {navLinks.map((navLink)=>{
                return(
                <Link key={navLink.id} href={navLink.url}>
                    <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
                        {navLink.label}</p>
                </Link>
                )
            })}
            {/* close button */}
            <CgClose
            onClick={closeNav} 
            className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white"/>

            
              
                </div>

            </div>
        </div>
    )
}