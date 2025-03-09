import Rajeev from '/assets/rajeev.jpeg';
import Experience from '../components/Experience';

export default function About() {
  return(
    <div className="my-5">
      <div className="md:w-3/4 mx-auto">
      {/* <img src={Rajeev} alt="" className='rounded'/> */}
      <p className='lg:text-5xl md:text-3xl text-2xl font-bold text-gray-400 lg:col-span-2'>I’m  
        <span className='text-black'> Rajeev</span>
        , a frontend engineering enthusiast with a curiosity that spans from tech to tasty bites—wherever the 
        <span className='text-black'> adventure </span>
        leads, I’m all in!</p>
      </div>
      <Experience />
    </div>
  )
}