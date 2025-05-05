import { FaDownload } from "react-icons/fa"
import {BaseInfo} from "../../../Data/data"
import Image from "next/image"
export default function Hero (){
    return(
        <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0f0f] overflow-hidden relative">
            <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
            <div className="grid grid-cols-1  lg:grid-cols-2 items-center gap-12">
                {/* Text content */}
                <div>
                    <h1 data-aos = "fade-left"
                    className="text-2xl md:text-3xl lag:text-4xl mb-5 text-gray-300 font-semibold">I am {BaseInfo.name}</h1>
                    <h1 data-aos = "fade-right " data-aos-delay="100" 
                    className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] *:xl:leading-[4rem] text-white">
                        {BaseInfo.position}</h1>
                        <p data-aos = "fade-left " data-aos-delay="200" 
                        className="mt-6 text-sm md:text-base text-white text-opaccity-60">
                            {BaseInfo.description}</p>
                            <button data-aos = "zoom-in " data-aos-delay="300" 
                            className="md:px-8 md:py-2.5 px-6 py-1.5 text-white text-sm font-semibold md:text-lg transition-all duration-200 rounded-lg mt-8 bg-[#8a063f]
                             hover:bg-[rgba(138,6,63,0.5)] flex items-center space-x-2">
                                <span><a href={"https://my-resume-amna.vercel.app/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    Download CV</a></span>
                                <FaDownload/>
                            </button>
                </div>
                {/* Image content */}
                
                <div className="relative w-[300px] h-[300px] mx-auto hidden lg:block">
  {/* 🔄 Animated Rotating Circle */}
  <div className="absolute inset-0 rounded-full border-[3px] border-[#8a063f] animate-spin-slow"></div>

  {/* 👤 Centered Circular Image */}
  <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-[3px] border-blue-950 z-10 relative">
    <Image
      src={BaseInfo.profilePic}
      alt={BaseInfo.name}
      fill
      className="object-cover"
    />
  </div>
</div>
</div>
</div>
 </div>
    )
}