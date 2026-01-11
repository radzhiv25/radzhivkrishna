
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const ProjectGlimpse = () => {
    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(false)
    const [cursorPosition, setCursorPosition] = useState(0)
    const [typingText, setTypingText] = useState("")

    const codeText = `const aboutMe = {
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
];`

    // Typing effect
    useEffect(() => {
        if (isEditing) {
            const timer = setTimeout(() => {
                if (cursorPosition < codeText.length) {
                    setTypingText(codeText.slice(0, cursorPosition + 1))
                    setCursorPosition(prev => prev + 1)
                } else {
                    // Reset after completing
                    setTimeout(() => {
                        setIsEditing(false)
                        setCursorPosition(0)
                        setTypingText("")
                    }, 2000)
                }
            }, 50)
            return () => clearTimeout(timer)
        }
    }, [isEditing, cursorPosition, codeText])

    // Start editing effect on component mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsEditing(true)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div className="mb-20 border-t border-dashed dark:border-gray-700">
            <h2 className="my-10 md:text-5xl text-4xl font-semibold flex flex-col text-center text-black dark:text-white">
                <span className="text-gray-400">Project Glimpse</span>
            </h2>
            <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
                <div className="md:col-span-3 col-span-1 border border-dashed dark:border-gray-700 rounded-md overflow-hidden">
                    <div className='w-max mx-auto pt-5'>
                        <h3 className='text-2xl font-semibold text-black dark:text-white'>StackMeme</h3>
                        <p className='text-sm text-gray-400'>A meme platform for developers</p>
                    </div>
                    <div className="relative md:inset-x-20 inset-x-10 inset-y-5 rounded-md">
                        <img src="./assets/StackMemeChrome.png" alt="StackMeme" className='object-contain rounded-t-md border' />
                    </div>
                </div>
                <div className="md:col-span-2 col-span-1 border border-dashed dark:border-gray-700 rounded-md overflow-hidden">
                    <div className="relative rounded-md md:h-full h-[50vh] w-full overflow-y-auto">
                        <div className=" rounded-lg py-2 px-4 overflow-auto">
                            <div className="flex items-center mb-3 border-b w-full">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <span className="text-sm ml-4 border-t border-x py-1 px-2 rounded-t text-black dark:text-white">Me.jsx</span>
                            </div>
                            <pre className="text-gray-400 text-left text-sm font-mono leading-relaxed relative">
                                {isEditing ? (
                                    <>
                                        {typingText}
                                        <span className="animate-pulse bg-black dark:bg-white text-white dark:text-black">|</span>
                                    </>
                                ) : (
                                    codeText
                                )}
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 col-span-1 border border-dashed dark:border-gray-700 rounded-md overflow-hidden px-2">
                    <div className='w-max mx-auto py-5 text-left'>
                        <h3 className='text-lg font-semibold text-black dark:text-white'>Passage Point</h3>
                        <p className='text-sm text-gray-400'>Save your VARC portion essays and make them publically accessible</p>
                        <p className="text-xs text-gray-400">FYI - this is live</p>
                    </div>
                    <iframe src="https://passage-point.vercel.app/" className="w-full md:h-full h-[50vh] border border-dashed dark:border-gray-700 rounded-t-md"></iframe>
                    {/* <div className="relative inset-1/4 rounded-md">
                        <img src="./assets/StackMeme.png" alt="StackMeme" className='object-contain rounded-t-md border' />
                    </div> */}
                </div>
                <div className="md:col-span-3 col-span-1 border border-dashed dark:border-gray-700 rounded-md overflow-hidden">
                    <div className='w-max mx-auto pt-5'>
                        <h3 className='text-2xl font-semibold text-black dark:text-white'>Nexus</h3>
                        <p className='text-sm text-gray-400'>A Community for creators</p>
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

            <button className="my-5 w-max mx-auto p-2 rounded-md border border-dashed dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-400 transition-colors" onClick={() => navigate('/work')}>View All Projects</button>
        </div>
    )
}

export default ProjectGlimpse