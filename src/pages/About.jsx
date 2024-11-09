import Rajeev from '../assets/rajeev.jpeg'
import { FaLinkedin,FaSquareGithub,FaSquareXTwitter } from "react-icons/fa6";
import Experience from '../components/Experience';
export default function About() {
  return(
    <div className="my-5">
      <div className="flex md:flex-row flex-col gap-5">
      <img src={Rajeev} alt="" className='rounded md:w-1/3'/>
      <p className='text-5xl font-bold text-gray-500'>I’m Rajeev, a frontend engineering enthusiast with a curiosity that spans from tech to tasty bites—wherever the adventure leads, I’m all in!</p>
      </div>
      <Experience />
    </div>
  )
}