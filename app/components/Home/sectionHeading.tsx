import { ReactNode } from "react"
type Props = {
    children:ReactNode
}

export default function SectionHeading({children}:Props){

   
    return (
        <h1 className="bg-[#8a063f] w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">
            {children}
        </h1>
    )
}