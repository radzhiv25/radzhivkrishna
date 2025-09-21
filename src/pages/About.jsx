import Experience from '../components/Experience';

export default function About() {
  return (
    <div className="md:my-20 my-10">
      <div className="md:mb-20 mb-10">
        {/* <img src={Rajeev} alt="" className='rounded'/> */}
        <div className='lg:text-5xl text-3xl font-bold text-gray-400 lg:col-span-2 md:leading-none leading-tight'>I’m
          <span className='text-black'> Rajeev</span>
          , a frontend <span className='text-purple-500'> engineering </span> enthusiast with a curiosity that spans from
          <span className='text-blue-500'> tech </span>
          to tasty <span className='text-yellow-400'> bites </span> wherever the
          <span className='text-green-500'> adventure </span>
          leads, I’m all in!</div>
      </div>
      <Experience />
    </div>
  )
}