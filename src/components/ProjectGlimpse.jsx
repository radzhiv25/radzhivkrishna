
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

const ProjectGlimpse = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h2 className="my-5 md:text-5xl text-4xl font-semibold flex flex-col text-center">
                Project Glimpse
            </h2>
            <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
                <div className="md:col-span-3 col-span-1 border border-dashed rounded-md overflow-hidden">
                    <div className='w-max mx-auto pt-5'>
                        <h3 className='text-2xl font-semibold'>StackMeme</h3>
                        <p className='text-sm'>A meme platform for developers</p>
                    </div>
                    <div className="relative inset-x-20 inset-y-5 rounded-md">
                        <img src="./assets/StackMeme.png" alt="StackMeme" className='object-contain rounded-t-md border' />
                    </div>
                </div>
                <div className="md:col-span-2 col-span-1 border border-dashed rounded-md overflow-hidden">
                    <div className="relative rounded-md h-full w-full overflow-hidden">
                        <div className=" rounded-lg py-2 px-4 overflow-auto">
                            <div className="flex items-center mb-3 border-b">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <span className="text-sm ml-4 border-t border-x py-1 px-2 rounded-t">Me.jsx</span>
                            </div>
                            <pre className="text-gray-400 text-left text-sm font-mono leading-relaxed">
                                {`const aboutMe = {
  name: "Rajeev",
  role: "Frontend Engineer",
  passion: "Building amazing web experiences",
  skills: ["React", "Next", "Tailwind", "Capacitor"],
  location: "India"
};

console.log(aboutMe);

const projects = [
  { name: "StackMeme", tech: "React + Appwrite (BaaS)" },
  { name: "Nexus", tech: "React, AWS, Sockets" },
];

// Contact information
const contact = {
  email: "rajeevkrishna.work@gmail.com",
  github: "github.com/radzhiv25",
  linkedin: "linkedin.com/in/rajeevkrishna25"
};`}
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 col-span-1 border border-dashed rounded-md overflow-hidden px-2">
                    <div className='w-max mx-auto py-5 text-left'>
                        <h3 className='text-lg font-semibold'>Passage Point</h3>
                        <p className='text-sm'>Save your VARC portion essays and make them publically accessible</p>
                        <p className="text-xs text-gray-400">FYI - this is live</p>
                    </div>
                    <iframe src="https://passage-point.vercel.app/" className="w-full h-full border rounded-t-md"></iframe>
                    {/* <div className="relative inset-1/4 rounded-md">
                        <img src="./assets/StackMeme.png" alt="StackMeme" className='object-contain rounded-t-md border' />
                    </div> */}
                </div>
                <div className="md:col-span-3 col-span-1 border border-dashed rounded-md overflow-hidden">
                    <div className='w-max mx-auto pt-5'>
                        <h3 className='text-2xl font-semibold'>Nexus</h3>
                        <p className='text-sm'>Community for creators</p>
                    </div>
                    <div className="relative inset-10">
                        <video
                            className="h-auto rounded-md border-2 bg-black border-black p-0.5"
                            src="https://d3ee4x0nw2slac.cloudfront.net/nexus-main.mp4"
                            // poster={heroIllustration}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-label="Nexus Hero Video"
                        >
                            <track kind="captions" />
                        </video>
                    </div>
                </div>
            </div>

            <Button variant="outline" className="my-5 w-max mx-autop-2 rounded-md" onClick={() => navigate('/work')}>View All Projects</Button>
        </div>
    )
}

export default ProjectGlimpse