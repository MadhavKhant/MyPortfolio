import { useEffect, useRef } from "react";
import gsap from "gsap";
import MyImage from "../Assets/images/Self.jpg";
import Project01 from "../Assets/images/Project01.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiHyperskill } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { GiFilmProjector } from "react-icons/gi";
import { SiGooglegemini } from "react-icons/si";
import InfiniteMenu from "../Components/InfiniteMenu";
import htmlImage from "../Assets/circular images/html5-banner.jpg";
import CPlusPlusImage from "../Assets/circular images/CPlusPlusImage.webp";
import DSAImage from "../Assets/circular images/DSA.jpg";
import CImage from "../Assets/circular images/c-language.jpg";
import JavaScriptImage from "../Assets/circular images/JavaScript.jpg";
import reactJsImage from "../Assets/circular images/reactJs.png";

const About = () => {
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const points = useRef([]);
  const pathRef = useRef(null);
  const totalPoints = 7;

  const emojiRef = useRef(null);
  const emojiWrapperRef = useRef(null); // positioned at tail of path

  useEffect(() => {
    const initPoints = Array.from({ length: totalPoints }, () => ({
      x: window.innerWidth / 20,
      y: window.innerHeight / 20,
    }));
    points.current = initPoints;

    // ✅ Start bounce for both emojis (opposite direction)
    if (emojiRef.current) {
      // Same bounce with increasing delays for wave effect
      gsap.to(emojiRef.current, {
        y: -50,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        duration: 0.4,
        delay: 0,
      });
    }

    const handleMouseMove = (e) => {
      const mouse = { x: e.clientX, y: e.clientY };
      points.current[0] = mouse;

      for (let i = 1; i < totalPoints; i++) {
        gsap.to(points.current[i], {
          x: points.current[i - 1].x,
          y: points.current[i - 1].y,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      drawPath();
    };

    const drawPath = () => {
      if (!pathRef.current || !emojiWrapperRef.current) return;

      const d = points.current
        .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x},${p.y}`)
        .join(" ");
      pathRef.current.setAttribute("d", d);

      const last = points.current[points.current.length - 1];

      // ✅ Move emoji wrapper (bounce remains untouched)
      gsap.set(emojiWrapperRef.current, {
        x: last.x,
        y: last.y,
        force3D: true,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.killTweensOf(emojiRef);
    };
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let Development = [
    "HTML",
    "TailwindCSS",
    "JavaScript",
    "ReactJs",
    "NodeJs",
    "Express",
    "MongoDB",
    "ThreeJs",
  ];
  let languages = ["C", "C++", "JavaScript"];
  let OtherSkills = ["Data Structure and Algorithms", "Mathematics"];
  let project01ToolsAndTech = {
    FrontEnd: ["HTML", "TailwindCSS", "ReactJs"],
    BackEnd: ["NodeJs", "Express"],
    Database: ["MongoDB"],
    Storage: ["Cloudinary"],
    Payment: ["Razorpay"],
    MailSend: ["Node Mailer"],
  };

  let ImageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpj75WwmN1Q6TcrlhE-aiHTTEsGREMpiSJwQ&s";
  let Gamebg =
    "https://c4.wallpaperflare.com/wallpaper/66/859/796/super-mario-mario-bros-super-mario-bros-mario-party-wallpaper-preview.jpg";

  const items = [
    {
      image: htmlImage,
    },
    {
      image: CPlusPlusImage,
    },
    {
      image: DSAImage,
    },
    {
      image: JavaScriptImage,
    },
    {
      image: CImage,
    },
    {
      image: reactJsImage,
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${ImageUrl})`,
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image within the div
        backgroundRepeat: "no-repeat", // Prevents tiling of the image
      }}
      className="w-screen overflow-hidden relative"
    >
      {/************************************************************************************************************
       ***********************************************************************************************************
       *********************************************************************************************************** */}
      {/* independent svg*/}
      <svg className="fixed top-0 left-0 w-screen h-full pointer-events-none z-[9999]">
        <path
          ref={pathRef}
          stroke="#2bd622"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="drop-shadow(5 5 5px #aeb054)"
        />
      </svg>

      <div
        ref={emojiWrapperRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none scale-90"
      >
        {/* 😄 Left */}
        <span
          ref={emojiRef}
          className="text-2xl absolute -translate-x-[40%] translate-y-[20%] "
        >
          😊
        </span>
      </div>

      {/************************************************************************************************************
       ***********************************************************************************************************
       *********************************************************************************************************** */}
      {/* buttons home and hire me */}
      <div className="translate-x-5 translate-y-2 flex gap-4">
        <NavLink to="/">
          <a href="#_" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-1 py-2 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Home</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </NavLink>

        <NavLink to="/Contact" className="mr-5">
          <a href="#_" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-1 py-2 rounded-lg bg-yellow-400"></span>
              <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Hire me</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </NavLink>
      </div>

      {/************************************************************************************************************
       ***********************************************************************************************************
       *********************************************************************************************************** */}
      {/* Photo and name and passionate */}
      <div className="flex flex-col lg:flex-row gap-2 items-center px-4 md:px-10 lg:translate-x-[250px] translate-x-0 ">
        <div className="relative flex  scale-[60%] hover:scale-[50%] transition-all duration-300">
          <div className="w-[300px] h-[300px] shadow-4xl  z-20 insert-0 -skew-x-[2deg] skew-y-[12deg] border-2 border-black rounded-full  overflow-hidden">
            <img
              src={MyImage}
              alt="SelfImage"
              className="object-cover w-[100%] h-[110%]  rotate-[-7deg] translate-x-1 translate-y-0"
            />
          </div>
          <div className="w-[300px] shadow-4xl  h-[300px] bg-gray-700 absolute rounded-full skew-y-[-20deg] scale-[90%] translate-x-[70px] translate-y-[10px]"></div>
        </div>

        <div className="bg-sky-100 px-12 py-7 rounded-3xl shadow-4xl hover:scale-[90%] transition-all duration-300">
          <p className="text-blue-800 text-[50px] font-bold relative z-10 hover:scale-[105%] transition-all duration-300">
            Madhav Khant
            <span
              className="absolute -left-[2px] -top-[2px] text-gray-700 opacity-50 
                hover:scale-[105%] transition-all duration-300
              "
            >
              Madhav Khant
            </span>
          </p>

          <p
            style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
            className="hover:scale-[115%] transition-all duration-300 text-lg font-bold text-green-800 "
          >
            passionate about software developer
          </p>
        </div>
      </div>

      {/************************************************************************************************************
       ***********************************************************************************************************
       *********************************************************************************************************** */}
      {/* Timeline */}
      <div className="translate-x-[20px] mr-[30px] w-full h-full">
        <VerticalTimeline>
          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(135deg, #22c1c3, #0000)", // Add gradient here
              color: "#fff",
              borderRadius: "50px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #790946",
              color: "#30b137",
            }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaPen />}
          >
            <div className="bg-blue-400 px-7 rounded-3xl py-3 lg:w-fit md:w-[90%] shadow-4xl flex flex-col gap-4 justify-center items-center">
              <div className="flex justify-evenly gap-2">
                <div className="font-bold text-[25px] text-blue-900 shadow-4xl hover:scale-[90%] transition-all duration-300 rounded-3xl w-fit px-3 ">
                  M.Sc.
                </div>
                <div className="text-blue-900 shadow-2xl rounded-3xl w-fit px-3 py-1 hover:scale-[90%] text-center text-[15px] font-bold transition-all duration-300">
                  Mathematics and Scientific Computing
                </div>
              </div>
              <div className="text-blue-900  shadow-5xl scale-[130%] rounded-3xl w-fit px-3 font-bold py-1 hover:scale-[90%] transition-all duration-300">
                NIT - Allahabad
              </div>
            </div>
          </VerticalTimelineElement>

          {/* SkillSet */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              // background: 'linear-gradient(135deg, #22c1c3, #70740b)', // Add gradient here
              color: "#fff",
              borderRadius: "50px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #790946",
              color: "#30b137",
            }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SiHyperskill />}
          >
            <div className=" px-7 rounded-3xl py-3 flex flex-col gap-5">
              <div
                className="w-full py-1 shadow-4xl
                hover:scale-[120%] transition-all duration-300
               text-gray-300 bg-blue-900 rounded-3xl text-center font-bold text-[25px]"
              >
                SkillSet
              </div>

              <div className="flex gap-3 flex-wrap">
                {languages.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="shadow-2xl text-yellow-300 
                        hover:scale-[120%] transition-all duration-300
                        font-bold text-lg px-4 py-1 rounded-3xl bg-black w-fit"
                    >
                      {ele}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3">
                {Development.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="shadow-2xl text-black
                        hover:scale-[120%] transition-all duration-300
                        px-4 py-1 font-bold text-lg rounded-3xl bg-sky-300 w-fit"
                    >
                      {ele}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3">
                {OtherSkills.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="shadow-2xl text-gray-100 
                        hover:scale-[120%] transition-all duration-300
                        px-4 py-1 font-bold text-lg rounded-3xl bg-green-700 w-fit"
                    >
                      {ele}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mx-auto h-[500px] w-[480px] relative border-2 border-indigo-600 text-slate-400 rounded-3xl">
              <InfiniteMenu items={items} />
            </div>
            <div className="mt-4 flex justify-center items-center gap-2 text-indigo-700 text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2v20m10-10H2" />
              </svg>
              Drag to move around
            </div>
          </VerticalTimelineElement>

          {/* Course Project */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              background:
                "linear-gradient(135deg, #22d3ee, #10b981, #0284c7, #0284c7, #14b8a6,   #a1a1aa)", // Add gradient here
              color: "#fff",
              borderRadius: "50px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #790946",
              color: "#30b137",
            }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<GiFilmProjector style={{ transform: "scale(1.5)" }} />}
          >
            <div className="">
              <div
                className="hover:scale-[105%] hover:cursor-pointer transition-all 
                  duration-300 rounded-3xl overflow-hidden"
              >
                <a
                  href="https://myfirstmernfrontend.vercel.app/"
                  className="rounded-2xl shadow-4xl  overflow-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Project01}
                    alt="Project01"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <h3
                  className=" text-[20px] font-bold hover:scale-[110%] hover:cursor-pointer transition-all duration-300 
                text-center text-gray-200 bg-blue-800 px-3 py-1 rounded-3xl"
                >
                  Tools and Technologies
                </h3>

                <div className="flex flex-col gap-2 flex-wrap">
                  {Object.entries(project01ToolsAndTech).map(([key, value]) => {
                    return (
                      <div className="flex gap-5 items-center" key={key}>
                        <div
                          className="text-yellow-400 shadow-4xl
                            hover:scale-[110%] hover:cursor-pointer transition-all duration-300 
                           bg-black px-3 text-center items-center justify-center flex py-2 rounded-3xl lg:w-[19%] md:w-[20%]  h-fit "
                        >
                          {key}
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center">
                          {value.map((ele, index) => {
                            return (
                              <span
                                key={index}
                                className="shadow-4xl hover:scale-[110%] hover:cursor-pointer transition-all duration-300 
                                    text-amber-950 bg-sky-500 px-3 py-2 rounded-2xl font-bold"
                              >
                                {ele}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Games */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(135deg, #22c1c3, #0000)", // Add gradient here
              color: "#fff",
              borderRadius: "50px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #790946",
              color: "#30b137",
            }}
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            icon={
              <SiGooglegemini style={{ transform: "scale(1.7)" }} /> // Sets icon size explicitly
            }
          >
            <Link
              to="https://games-three-orpin.vercel.app/"
              target="_blank"
              style={{
                background:
                  "linear-gradient(135deg, #1e1b4b, #115e59, #525252, #a16207,  #0ea5e9)",
              }}
              className="bg-blue-400 px-7 rounded-3xl py-3 w-fit shadow-4xl flex flex-col gap-4 justify-center items-center"
            >
              <div className="flex gap-2 flex-col">
                <div className="h-[250px] w-[410px] hover:scale-110 transition-all duration-500">
                  <img src={Gamebg} className="w-full h-full rounded-3xl" />
                </div>
                <div
                  className="text-transparent bg-clip-text text-center font-bold text-[30px] 
                            bg-gradient-to-r from-indigo-100 via-purple-100 to-lime-200 
                            relative"
                >
                  <span className="absolute inset-0 text-gray-800 blur-[1.8px] translate-y-[2px] translate-x-[2px]">
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
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
