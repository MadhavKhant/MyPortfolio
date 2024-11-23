import MyImage from "../Assets/images/Self.jpg"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiHyperskill } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import Project01 from '../Assets/images/Project01.png'
import { GiFilmProjector } from "react-icons/gi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiGooglegemini } from "react-icons/si";

const About = () => {

   let Development = ['HTML', 'TailwindCSS', 'JavaScript', 'ReactJs', 'NodeJs', 'Express', 'MongoDB', 'ThreeJs']
   let languages = ['C', 'C++', 'JavaScript']
   let OtherSkills = ['Data Structure and Algorithms', 'Mathematics']
   let project01ToolsAndTech = {
    FrontEnd: ['HTML', 'TailwindCSS', 'ReactJs'],
    BackEnd: ['NodeJs', 'Express'],
    Database: ['MongoDB'],
    Storage: ['Cloudinary'],
    Payment: ['Razorpay'],
    MailSend: ['Node Mailer'] 
   }

   let ImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpj75WwmN1Q6TcrlhE-aiHTTEsGREMpiSJwQ&s'
   let frontbgImageGenerator = "https://em360tech.com/sites/default/files/styles/cover_image/public/2024-06/best-ai-image-generators.jpeg.webp?itok=otSqM0j-"
   let frontbgGemini = "https://storage.googleapis.com/ai-prod-wagtail/images/Gemini_in_our_products_tdRAZ7A.width-1000.format-webp.webp"
   let Gamebg = "https://c4.wallpaperflare.com/wallpaper/66/859/796/super-mario-mario-bros-super-mario-bros-mario-party-wallpaper-preview.jpg"

   return (
    <div
        style={{
        backgroundImage: `url(${ImageUrl})`,
        backgroundSize: 'cover',       // Ensures the image covers the entire div
        backgroundPosition: 'center',   // Centers the image within the div
        backgroundRepeat: 'no-repeat'   // Prevents tiling of the image
      }}

      className="w-screen overflow-hidden"
    >

      <div className="translate-x-5 translate-y-2 flex gap-4">
        <NavLink to="/" >
          <a href="#_" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-1 py-2 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span className="relative">Home</span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
              </a>
        </NavLink>

        <NavLink to="/Contact" className="mr-5">
          <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-1 py-2 rounded-lg bg-yellow-400"></span>
              <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Hire me</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
      </NavLink>
      </div>

      <div className="flex gap-10 items-center translate-x-[250px] ">
        <div className="relative flex  scale-[60%] hover:scale-[50%] transition-all duration-300">
          <div className="w-[300px] h-[300px] shadow-4xl  z-20 insert-0 -skew-x-[2deg] skew-y-[12deg] border-2 border-black rounded-full  overflow-hidden">
            <img src={MyImage} alt="SelfImage" className="object-cover w-[100%] h-[110%]  rotate-[-7deg] translate-x-1 translate-y-0"/> 
          </div>
          <div className="w-[300px] shadow-4xl  h-[300px] bg-gray-700 absolute rounded-full skew-y-[-20deg] scale-[90%] translate-x-[70px] translate-y-[10px]">
          </div>
        </div>

        <div className="bg-sky-100 px-12 py-7 rounded-3xl shadow-4xl hover:scale-[90%] transition-all duration-300">
          <p className="text-blue-800 text-[50px] font-bold relative z-10 hover:scale-[105%] transition-all duration-300">
              Madhav Khant
              <span className="absolute -left-[2px] -top-[2px] text-gray-700 opacity-50 
                hover:scale-[105%] transition-all duration-300
              ">Madhav Khant</span>
          </p>

          <p style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }} 
            className="hover:scale-[115%] transition-all duration-300 text-lg font-bold text-green-800 ">
            passionate about software developer
          </p>
        </div>
      </div>


      <div className="translate-x-[20px]">
        <VerticalTimeline>
          
          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'linear-gradient(135deg, #22c1c3, #0000)', // Add gradient here
              color: '#fff',
              borderRadius: '50px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid #790946',
              color: '#30b137'
            }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaPen />}
          >
            <div className="bg-blue-400 px-7 rounded-3xl py-3 w-fit shadow-4xl flex flex-col gap-4 justify-center items-center">
              <div className="flex justify-evenly gap-1">
                <div className="font-bold text-[25px] text-blue-900 shadow-4xl hover:scale-[90%] transition-all duration-300 rounded-3xl w-fit px-3 ">M.Sc.</div>
                <div className="text-blue-900 shadow-2xl rounded-3xl w-fit px-3 py-1 hover:scale-[90%] text-center text-[15px] font-bold transition-all duration-300">Mathematics and Scientific Computing</div>
              </div>
              <div className="text-blue-900  shadow-5xl scale-[130%] rounded-3xl w-fit px-3 font-bold py-1 hover:scale-[90%] transition-all duration-300">NIT - Allahabad</div>
            </div>
          </VerticalTimelineElement>

          {/* SkillSet */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            
            contentStyle={{
              // background: 'linear-gradient(135deg, #22c1c3, #70740b)', // Add gradient here
              color: '#fff',
              borderRadius: '50px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid #790946',
              color: '#30b137'
            }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SiHyperskill />}
          >
            <div className=" px-7 rounded-3xl py-3 flex flex-col gap-5">

              <div className="w-full py-1 shadow-4xl
                hover:scale-[120%] transition-all duration-300
               text-gray-300 bg-blue-900 rounded-3xl text-center font-bold text-[25px]">
                SkillSet
              </div>

              <div className="flex gap-3">
                {
                  languages.map((ele, index) => {
                    return (
                      <div key={index} className="shadow-2xl text-yellow-300 
                        hover:scale-[120%] transition-all duration-300
                        font-bold text-lg px-4 py-1 rounded-3xl bg-black w-fit">
                        {ele}
                      </div>
                    )
                  })
                }
              </div>

              <div className="flex flex-wrap gap-3">
                {
                  Development.map((ele, index) => {
                    return (
                      <div key={index} className="shadow-2xl text-black
                        hover:scale-[120%] transition-all duration-300
                        px-4 py-1 font-bold text-lg rounded-3xl bg-sky-300 w-fit">
                        {ele}
                      </div>
                    )
                  })
                }
              </div>

              <div className="flex flex-wrap gap-3">
                {
                  OtherSkills.map((ele, index) => {
                    return (
                      <div key={index} className="shadow-2xl text-gray-100 
                        hover:scale-[120%] transition-all duration-300
                        px-4 py-1 font-bold text-lg rounded-3xl bg-green-700 w-fit">
                        {ele}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </VerticalTimelineElement>

            {/* Course Project */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              background: 'linear-gradient(135deg, #22d3ee, #10b981, #0284c7, #0284c7, #14b8a6,   #a1a1aa)', // Add gradient here
              color: '#fff',
              borderRadius: '50px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid #790946',
              color: '#30b137'
            }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GiFilmProjector style={{ transform: 'scale(1.5)' }}/>}
          >

            <div className="">
              <div className="hover:scale-[105%] hover:cursor-pointer transition-all 
                  duration-300 rounded-3xl overflow-hidden">
                <a 
                  href="https://myfirstmernfrontend.vercel.app/"
                  className="rounded-2xl shadow-4xl  overflow-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Project01} alt="Project01" className="w-full h-full object-contain"/>
                </a>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <h3 className=" text-[20px] font-bold hover:scale-[110%] hover:cursor-pointer transition-all duration-300 
                text-center text-gray-200 bg-blue-800 px-3 py-1 rounded-3xl">Tools and Technologies</h3>

                <div className="flex flex-col gap-2">
                  {
                    Object.entries(project01ToolsAndTech).map(([key, value]) => {
                      return (
                        <div className="flex gap-3 " key={key}>

                          <div className="text-yellow-400 shadow-4xl
                            hover:scale-[110%] hover:cursor-pointer transition-all duration-300 
                           bg-black px-3 text-center py-2 rounded-3xl w-fit">{key}</div>

                          <div className="flex gap-2 justify-center">
                            {
                              value.map((ele, index) => {
                                return (
                                  <span key={index} 
                                    className="shadow-4xl hover:scale-[110%] hover:cursor-pointer transition-all duration-300 
                                    text-amber-950 bg-sky-500 px-3 py-2 rounded-2xl font-bold"
                                  >
                                    {ele}
                                  </span>
                                )
                              })
                            }
                          </div>

                        </div>
                      )
                    })
                  }
                </div>

              </div>
            </div>
          </VerticalTimelineElement>

            {/* Image Generation */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'linear-gradient(135deg, #22c1c3, #0000)', // Add gradient here
              color: '#fff',
              borderRadius: '50px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid #790946',
              color: '#30b137'
            }}
            iconStyle={{
              background: 'rgb(33, 150, 243)', 
              color: '#fff',
            }}
            icon={
              <GiArtificialIntelligence style={{ transform: 'scale(1.7)' }} /> // Sets icon size explicitly
            }
          >
            <Link to="https://my-gemini-alpha.vercel.app/" target="_blank"
              style={{background: 'linear-gradient(135deg, #0e7490, #115e59, #7c2d12, #0e7490, #115e59)'}}
              className="bg-blue-400 px-7 rounded-3xl py-3 w-fit shadow-4xl flex flex-col gap-4 justify-center items-center">
              <div className="flex gap-2 flex-col">
                <div className="h-[250px] w-[410px] hover:scale-110 transition-all duration-500">
                  <img src={frontbgImageGenerator} className="w-full h-full rounded-3xl"/>
                </div>
                <div className="text-center font-bold text-[30px] text-black drop-shadow-lg [text-shadow:_0_4px_5px_rgb(99_102_241_/_1)] ">
                  Text to Image Generator
                </div>
              </div>
            </Link>
          </VerticalTimelineElement>

            {/* Text Generation */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'linear-gradient(135deg, #22c1c3, #0000)', // Add gradient here
              color: '#fff',
              borderRadius: '50px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid #790946',
              color: '#30b137'
            }}
            iconStyle={{
              background: 'rgb(33, 150, 243)', 
              color: '#fff',
            }}
            icon={
              <SiGooglegemini style={{ transform: 'scale(1.7)' }} /> // Sets icon size explicitly
            }
          >
            <Link to="https://my-gemini-alpha.vercel.app/" target="_blank"
              style={{background: 'linear-gradient(135deg, #737373, #334155, #737373)'}}
              className="bg-blue-400 px-7 rounded-3xl py-3 w-fit shadow-4xl flex flex-col gap-4 justify-center items-center">
              <div className="flex gap-2 flex-col">
                <div className="h-[250px] w-[410px] hover:scale-110 transition-all duration-500">
                  <img src={frontbgGemini} className="w-full h-full rounded-3xl"/>
                </div>
                <div className="text-center font-bold text-[30px] text-black drop-shadow-lg [text-shadow:_0_4px_5px_rgb(99_102_241_/_1.8)] ">
                  Enter your prompt and generate your text
                </div>
              </div>
            </Link>
          </VerticalTimelineElement>

            {/* Games */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'linear-gradient(135deg, #22c1c3, #0000)', // Add gradient here
              color: '#fff',
              borderRadius: '50px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid #790946',
              color: '#30b137'
            }}
            iconStyle={{
              background: 'rgb(33, 150, 243)', 
              color: '#fff',
            }}
            icon={
              <SiGooglegemini style={{ transform: 'scale(1.7)' }} /> // Sets icon size explicitly
            }
          >
            <Link to="https://games-three-orpin.vercel.app/" target="_blank"
              style={{background: 'linear-gradient(135deg, #1e1b4b, #115e59, #525252, #a16207,  #0ea5e9)'}}
              className="bg-blue-400 px-7 rounded-3xl py-3 w-fit shadow-4xl flex flex-col gap-4 justify-center items-center">
              <div className="flex gap-2 flex-col">
                <div className="h-[250px] w-[410px] hover:scale-110 transition-all duration-500">
                  <img src={Gamebg} className="w-full h-full rounded-3xl"/>
                </div>
                <div
                  className="text-transparent bg-clip-text text-center font-bold text-[30px] 
                            bg-gradient-to-r from-indigo-100 via-purple-100 to-lime-200 
                            relative"
                >
                  <span
                    className="absolute inset-0 text-gray-800 blur-[1.8px] translate-y-[2px] translate-x-[2px]"
                  >
                    Play Games and Enjoy
                  </span>
                  Play Games and Enjoy
                </div>

              </div>
            </Link>
          </VerticalTimelineElement>

        </VerticalTimeline>

        <div className="translate-x-[58%] scale-[125%]">
          <NavLink to="/Contact" className="mr-5">
              <a href="#_" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-1 py-2 rounded-lg bg-yellow-400"></span>
                  <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span className="relative">Hire me</span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
              </a>
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default About;
