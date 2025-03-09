import Back from '/assets/Wallpaper4.jpeg'
import { FaSquareArrowUpRight } from "react-icons/fa6";
import Skills from '../components/Skills'
import Contact from './Contact';

const Hero = () => {
  return (
    <div className=''>
        <section className='mt-5 text-center'>
            <div className="w-max mx-auto mb-4 px-2 py-1 flex items-center gap-2 border border-dashed rounded-full">
                <p className='text-xs'>want to have a quick call</p>
                <FaSquareArrowUpRight />
            </div>
            <img src={Back} alt="" className=' rounded-lg hover:scale-105 transition-all' loading='lazy'/>
            <div className="absolute md:top-1/4 top-36 left-1/2 -translate-x-1/2 text-white z-1">
                <h1 className='md:text-4xl text-xl font-semibold'>Hi, I'm Rajeev Krishna</h1>
                <p className='md:text-lg text-xs'>I'm a frontend engineering enthusiast</p>
            </div>
            <span>
                <p className='relative md:-top-10 -top-5 z-1 text-white md:text-xs text-[8px]'> an anime enthusiast as well as an avid collector of digital wallpapers</p>
            </span>
            <Skills />
        </section>
    </div>
  )
}

export default Hero